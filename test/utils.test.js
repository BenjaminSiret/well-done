import { pluralize } from "@/lib/utils";
import { describe, expect, it } from "vitest";

describe("pluralize function test", () => {
  it("should pluralize a word based on the count", () => {
    const singular = "milestone";
    const plural = "milestones";

    const result0 = pluralize(0, singular, plural);
    const result1 = pluralize(1, singular, plural);
    const result2 = pluralize(2, singular, plural);

    expect(result0).toEqual(null);
    expect(result1).toEqual("milestone");
    expect(result2).toEqual("milestones");
  });
});
