import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    coverageThreshold: {
        global: {
            lines: 95,
        },
    },
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.esm.json",
        },
    },
};

export default config;
