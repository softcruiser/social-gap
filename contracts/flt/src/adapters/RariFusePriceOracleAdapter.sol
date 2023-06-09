// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import { Owned } from "solmate/auth/Owned.sol";
import { FixedPointMathLib } from "solmate/utils/FixedPointMathLib.sol";

import { IRariFusePriceOracleAdapter } from "./IRariFusePriceOracleAdapter.sol";
import { IRariFusePriceOracle } from "src/interfaces/IRariFusePriceOracle.sol";

/**
 * @title Rari Fuse Price Oracle Adapter
 * @author bayu <bayu@risedle.com> <https://github.com/pyk>
 * @notice Adapter for Rari Fuse Price Oracle
 */
contract RariFusePriceOracleAdapter is IRariFusePriceOracleAdapter, Owned {
    /// ███ Libraries ████████████████████████████████████████████████████████

    using FixedPointMathLib for uint256;

    /// ███ Storages █████████████████████████████████████████████████████████

    /// @notice Map token to Rari Fuse Price oracle contract
    mapping(address => OracleMetadata) public oracles;

    /// ███ Constructor ██████████████████████████████████████████████████████
    constructor() Owned(msg.sender) {}

    /// ███ Owner actions ████████████████████████████████████████████████████

    /// @inheritdoc IRariFusePriceOracleAdapter
    function configure(
        address _token,
        address _rariFusePriceOracle,
        uint8 _decimals
    ) external onlyOwner {
        oracles[_token] = OracleMetadata({
            oracle: IRariFusePriceOracle(_rariFusePriceOracle),
            precision: 10**_decimals
        });
        emit OracleConfigured(_token, oracles[_token]);
    }

    /// ███ Read-only functions ██████████████████████████████████████████████

    /// @inheritdoc IRariFusePriceOracleAdapter
    function isConfigured(address _token) external view returns (bool) {
        if (_token == address(0)) return true;
        if (oracles[_token].precision == 0) return false;
        return true;
    }

    /// ███ Adapters █████████████████████████████████████████████████████████

    /// @inheritdoc IRariFusePriceOracleAdapter
    function price(address _token) public view returns (uint256 _price) {
        if (_token == address(0)) return 1 ether;
        if (oracles[_token].precision == 0) revert OracleNotExists(_token);
        _price = oracles[_token].oracle.price(_token);
    }

    /// @inheritdoc IRariFusePriceOracleAdapter
    function price(address _base, address _quote)
        public
        view
        returns (uint256 _price)
    {
        uint256 basePriceInETH = price(_base);
        if (_quote == address(0)) return basePriceInETH;
        uint256 quotePriceInETH = price(_quote);
        uint256 priceInETH = basePriceInETH.divWadDown(quotePriceInETH);
        _price = priceInETH.mulWadDown(oracles[_quote].precision);
    }

    /// @inheritdoc IRariFusePriceOracleAdapter
    function totalValue(
        address _base,
        address _quote,
        uint256 _baseAmount
    ) external view returns (uint256 _value) {
        uint256 p = price(_base, _quote);
        if (_base == address(0)) return _baseAmount.mulWadDown(p);
        _value = _baseAmount.mulDivDown(p, oracles[_base].precision);
    }
}
