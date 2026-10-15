import { describe, it, expect } from "vitest";
import { computeScore, levelFor, QUESTIONS } from "@/lib/maturity";

describe("maturity scoring", () => {
  it("has 5 questions maxing at 100", () => {
    expect(QUESTIONS).toHaveLength(5);
    expect(computeScore(QUESTIONS.map((q) => Math.max(...q.options.map((o) => o.points))))).toBe(100);
  });
  it("maps scores to levels", () => {
    expect(levelFor(0).key).toBe("inspirer");
    expect(levelFor(50).key).toBe("conseiller");
    expect(levelFor(80).key).toBe("deployer");
  });
});
