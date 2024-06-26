import { describe, it, expect } from "vitest";
import { upperCase, localeUpperCase } from "./index.js";
const TEST_CASES = [
    ["", ""],
    ["test", "TEST"],
    ["test string", "TEST STRING"],
    ["Test String", "TEST STRING"],
    ["\u0131", "I"],
];
const LOCALE_TEST_CASES = [["i", "\u0130", "tr"]];
describe("upper case", () => {
    for (const [input, result] of TEST_CASES) {
        it(`${input} -> ${result}`, () => {
            expect(upperCase(input)).toEqual(result);
        });
    }
});
describe("locale upper case", () => {
    for (const [input, result, locale] of LOCALE_TEST_CASES) {
        it(`${locale}: ${input} -> ${result}`, () => {
            expect(localeUpperCase(input, locale)).toEqual(result);
        });
    }
});
//# sourceMappingURL=index.spec.js.map