import { describe, expect, it } from "vitest";
import { MoodStatus } from "@/constants/mood";
import { getMoodTrend } from "@/utils/mood";

describe("getMoodTrend", () => {
  it("returns positive when mood scores meaningfully improve", () => {
    const data = [
      { score: 2 },
      { score: 2 },
      { score: 2 },
      { score: 3 },
      { score: 3 },
      { score: 3 },
      { score: 3 },
    ];

    expect(getMoodTrend(data)).toBe(MoodStatus.Positive);
  });

  it("returns negative when mood scores meaningfully decline", () => {
    const data = [
      { score: 2 },
      { score: 2 },
      { score: 2 },
      { score: 1 },
      { score: 1 },
      { score: 1 },
      { score: 1 },
    ];

    expect(getMoodTrend(data)).toBe(MoodStatus.Negative);
  });

  it("returns neutral when the difference is below the trend threshold", () => {
    const data = [
      { score: 2 },
      { score: 2 },
      { score: 1 },
      { score: 2 },
      { score: 1 },
      { score: 2 },
      { score: 2 },
    ];

    expect(getMoodTrend(data)).toBe(MoodStatus.Neutral);
  });

  it("returns neutral when there is insufficient data", () => {
    expect(getMoodTrend([{ score: 2 }])).toBe(MoodStatus.Neutral);
  });
  it("handles decimal scores", () => {
    const data = [
      { score: 1.9 },
      { score: 2.2 },
      { score: 1.6 },
      { score: 1.4 },
      { score: 1.3 },
      { score: 1.6 },
    ];

    expect(getMoodTrend(data)).toBe(MoodStatus.Negative);
  });
  it("handles datasets of different lengths", () => {
    const data = [
      { score: 1.5 },
      { score: 1.6 },
      { score: 1.7 },
      { score: 1.8 },
      { score: 2.2 },
      { score: 2.3 },
      { score: 2.4 },
      { score: 2.5 },
    ];

    expect(getMoodTrend(data)).toBe(MoodStatus.Positive);
  });

  it("returns neutral for insignificant decimal changes", () => {
    const data = [{ score: 2 }, { score: 2 }, { score: 2.2 }, { score: 2.2 }];

    expect(getMoodTrend(data)).toBe(MoodStatus.Neutral);
  });

  it("classifies a change at the threshold as meaningful", () => {
    const data = [{ score: 2 }, { score: 2 }, { score: 2.25 }, { score: 2.25 }];

    expect(getMoodTrend(data)).toBe(MoodStatus.Positive);
  });
});
