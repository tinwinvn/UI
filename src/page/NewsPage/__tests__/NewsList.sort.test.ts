import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { sortByDateDescending } from "../NewsList";
import { CATEGORY_BADGE, type NewsItem } from "../../../common/Body/News/type";

/**
 * Feature: news-page
 * Property 1: News items are sorted by date descending
 *
 * For any array of NewsItem objects with valid "DD/MM/YYYY" date strings,
 * the sorting function SHALL produce an array where each item's date is
 * greater than or equal to the next item's date (newest first).
 *
 * Validates: Requirements 3.1
 */

const categoryKeys = Object.keys(CATEGORY_BADGE);

function parseDDMMYYYY(dateStr: string): Date {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
}

const newsItemArbitrary: fc.Arbitrary<NewsItem> = fc.record({
  id: fc.integer({ min: 1, max: 10000 }),
  title: fc.string({ minLength: 1, maxLength: 100 }),
  excerpt: fc.string({ minLength: 1, maxLength: 300 }),
  date: fc
    .tuple(
      fc.integer({ min: 1, max: 28 }),
      fc.integer({ min: 1, max: 12 }),
      fc.integer({ min: 2000, max: 2030 }),
    )
    .map(
      ([d, m, y]) =>
        `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`,
    ),
  category: fc.constantFrom(...categoryKeys),
  imageUrl: fc.webUrl(),
  featured: fc.boolean(),
});

describe("Feature: news-page, Property 1: News items are sorted by date descending", () => {
  it("should sort any array of NewsItems by date descending (newest first)", () => {
    fc.assert(
      fc.property(fc.array(newsItemArbitrary, { minLength: 0, maxLength: 30 }), (items) => {
        const sorted = sortByDateDescending(items);

        // Same length
        expect(sorted.length).toBe(items.length);

        // Each item's date >= next item's date
        for (let i = 0; i < sorted.length - 1; i++) {
          const current = parseDDMMYYYY(sorted[i].date).getTime();
          const next = parseDDMMYYYY(sorted[i + 1].date).getTime();
          expect(current).toBeGreaterThanOrEqual(next);
        }
      }),
      { numRuns: 100 },
    );
  });
});
