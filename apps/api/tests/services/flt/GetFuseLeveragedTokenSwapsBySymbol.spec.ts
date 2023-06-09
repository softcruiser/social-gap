import flt from "../../../src/services/flt";

describe("GetFuseLeveragedTokenSwapsBySymbol", () => {
    describe("given random chainId", () => {
        it("should throw an error", async () => {
            expect.assertions(1);
            try {
                await flt.GetFuseLeveragedTokenSwapsBySymbol(
                    1234,
                    "AAA",
                    undefined
                );
            } catch (e) {
                expect(e).toBe("Endpoint not defined for chainId 1234");
            }
        });
    });

    describe("given BSC as chainId", () => {
        describe("given random symbol", () => {
            it("should return undefined", async () => {
                const swaps = await flt.GetFuseLeveragedTokenSwapsBySymbol(
                    56,
                    "AAA",
                    undefined
                );
                expect(swaps).toBeUndefined();
            });
        });

        describe("given BNBRISE without userAddress", () => {
            it("should return array of FuseLeveragedTokenSwap", async () => {
                const swaps = await flt.GetFuseLeveragedTokenSwapsBySymbol(
                    56,
                    "BNBRISE",
                    undefined
                );
                expect(swaps?.flt.length).toBeGreaterThanOrEqual(1);
                expect(swaps?.user.length).toBe(0);

                // Make sure it returns array of FuseLeveragedTokenSwap
                expect(swaps?.flt?.[0].timestamp).toBeGreaterThan(10000);
                expect(typeof swaps?.flt?.[0].hash).toBe("string");
                expect(swaps?.flt?.[0].hash.length).toBe(66);
                expect(typeof swaps?.flt?.[0].user).toBe("string");
                expect(swaps?.flt?.[0].user.length).toBe(42);
                expect(typeof swaps?.flt?.[0].tokenIn.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenIn.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountIn).toBe("number");
                expect(typeof swaps?.flt?.[0].amountInUSD).toBe("number");
                expect(typeof swaps?.flt?.[0].tokenOut.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenOut.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountOut).toBe("number");
                expect(typeof swaps?.flt?.[0].amountOutUSD).toBe("number");

                // Check user swaps
                expect(swaps?.user?.length).toBe(0);
            });
        });

        describe("given BNBRISE with lowercased userAddress", () => {
            it("should return array of FuseLeveragedTokenSwap", async () => {
                const addy = "0x1418be4753a22b69b613fa8b8144d856c023d46b";
                const swaps = await flt.GetFuseLeveragedTokenSwapsBySymbol(
                    56,
                    "BNBRISE",
                    addy
                );
                expect(swaps?.flt.length).toBeGreaterThanOrEqual(1);
                expect(swaps?.user.length).toBeGreaterThanOrEqual(1);

                // Make sure it returns array of FuseLeveragedTokenSwap
                expect(swaps?.flt?.[0].timestamp).toBeGreaterThan(10000);
                expect(typeof swaps?.flt?.[0].hash).toBe("string");
                expect(swaps?.flt?.[0].hash.length).toBe(66);
                expect(typeof swaps?.flt?.[0].user).toBe("string");
                expect(swaps?.flt?.[0].user.length).toBe(42);
                expect(typeof swaps?.flt?.[0].tokenIn.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenIn.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountIn).toBe("number");
                expect(typeof swaps?.flt?.[0].amountInUSD).toBe("number");
                expect(typeof swaps?.flt?.[0].tokenOut.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenOut.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountOut).toBe("number");
                expect(typeof swaps?.flt?.[0].amountOutUSD).toBe("number");

                // Check user swaps; Make sure it returns Swap data
                expect(swaps?.user?.[0].timestamp).toBeGreaterThan(10000);
                expect(typeof swaps?.user?.[0].hash).toBe("string");
                expect(swaps?.user?.[0].hash.length).toBe(66);
                expect(typeof swaps?.user?.[0].user).toBe("string");
                expect(swaps?.user?.[0].user.length).toBe(42);
                expect(swaps?.user?.[0].user).toBe(addy);
                expect(typeof swaps?.user?.[0].tokenIn.name).toBe("string");
                expect(typeof swaps?.user?.[0].tokenIn.symbol).toBe("string");
                expect(typeof swaps?.user?.[0].amountIn).toBe("number");
                expect(typeof swaps?.user?.[0].amountInUSD).toBe("number");
                expect(typeof swaps?.user?.[0].tokenOut.name).toBe("string");
                expect(typeof swaps?.user?.[0].tokenOut.symbol).toBe("string");
                expect(typeof swaps?.user?.[0].amountOut).toBe("number");
                expect(typeof swaps?.user?.[0].amountOutUSD).toBe("number");
            });
        });

        describe("given BNBRISE with checksummed userAddress", () => {
            it("should return array of FuseLeveragedTokenSwap", async () => {
                const addy = "0x1418bE4753a22b69b613fA8B8144D856C023D46B";
                const swaps = await flt.GetFuseLeveragedTokenSwapsBySymbol(
                    56,
                    "BNBRISE",
                    addy
                );
                expect(swaps?.flt.length).toBeGreaterThanOrEqual(1);
                expect(swaps?.user.length).toBeGreaterThanOrEqual(1);

                // Make sure it returns array of FuseLeveragedTokenSwap
                expect(swaps?.flt?.[0].timestamp).toBeGreaterThan(10000);
                expect(typeof swaps?.flt?.[0].hash).toBe("string");
                expect(swaps?.flt?.[0].hash.length).toBe(66);
                expect(typeof swaps?.flt?.[0].user).toBe("string");
                expect(swaps?.flt?.[0].user.length).toBe(42);
                expect(typeof swaps?.flt?.[0].tokenIn.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenIn.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountIn).toBe("number");
                expect(typeof swaps?.flt?.[0].amountInUSD).toBe("number");
                expect(typeof swaps?.flt?.[0].tokenOut.name).toBe("string");
                expect(typeof swaps?.flt?.[0].tokenOut.symbol).toBe("string");
                expect(typeof swaps?.flt?.[0].amountOut).toBe("number");
                expect(typeof swaps?.flt?.[0].amountOutUSD).toBe("number");

                // Check user swaps; Make sure it returns Swap data
                expect(swaps?.user?.[0].timestamp).toBeGreaterThan(10000);
                expect(typeof swaps?.user?.[0].hash).toBe("string");
                expect(swaps?.user?.[0].hash.length).toBe(66);
                expect(typeof swaps?.user?.[0].user).toBe("string");
                expect(swaps?.user?.[0].user.length).toBe(42);
                expect(swaps?.user?.[0].user).toBe(addy.toLowerCase());
                expect(typeof swaps?.user?.[0].tokenIn.name).toBe("string");
                expect(typeof swaps?.user?.[0].tokenIn.symbol).toBe("string");
                expect(typeof swaps?.user?.[0].amountIn).toBe("number");
                expect(typeof swaps?.user?.[0].amountInUSD).toBe("number");
                expect(typeof swaps?.user?.[0].tokenOut.name).toBe("string");
                expect(typeof swaps?.user?.[0].tokenOut.symbol).toBe("string");
                expect(typeof swaps?.user?.[0].amountOut).toBe("number");
                expect(typeof swaps?.user?.[0].amountOutUSD).toBe("number");
            });
        });
    });
});
