import { useMediaQuery } from "@/hooks/use-media-query";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

describe("useMediaQuery hook test", () => {
  beforeEach(() => {
    window.innerWidth = 500;
  });

  it("should return the correct initial value", () => {
    const query = "(min-width: 768px)";

    const { result } = renderHook(() => useMediaQuery(query));

    expect(result.current).toBe(false);
  });

  it("should update the value when the window size changes", () => {
    const query = "(min-width: 768px)";
    const { result, rerender } = renderHook(() => useMediaQuery(query));
    expect(result.current).toBe(false);

    window.innerWidth = 1044;
    window.dispatchEvent(new Event("resize"));

    rerender();

    setTimeout(() => {
      expect(result.current).toBe(true);
    }, 5);
  });
});
