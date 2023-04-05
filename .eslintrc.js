module.exports = {
  plugins: ["vitest", "testing-library"],
  extends: ["plugin:vitest/recommended", "plugin:testing-library/react"],
  rules: {
    "vitest/no-done-callback": "warn",
    "vitest/no-conditional-expect": "warn",
    "vitest/no-conditional-tests": "error",
    "vitest/no-conditional-in-test": "warn",
    "vitest/no-hooks": "error",
    "vitest/max-nested-describe": ["error", { max: 2 }],
    "vitest/max-expects": ["error", { max: 5 }],
    "vitest/consistent-test-it": [
      "error",
      { fn: "test", withinDescribe: "it" },
    ],
    "vitest/no-standalone-expect": [
      "warn",
      { additionalTestBlockFunctions: ["test"] },
    ],
    "vitest/no-test-prefixes": "warn",
    "vitest/no-test-return-statement": "warn",
    "vitest/prefer-called-with": "off",
    "vitest/prefer-expect-resolves": "warn",
    "vitest/prefer-strict-equal": "warn",
    "vitest/prefer-to-be": "warn",
    "vitest/prefer-to-be-falsy": "warn",
    "vitest/prefer-to-be-object": "warn",
    "vitest/prefer-to-be-truthy": "warn",
    "vitest/prefer-to-have-length": "warn",
    "vitest/valid-expect": [
      "error",
      { asyncMatchers: ["toBeResolved", "toBeRejected"] },
    ],
    "vitest/valid-title": [
      "error",
      {
        ignoreTypeOfDescribeName: false,
        disallowedWords: ["skip", "only"],
      },
    ],
  },
};
