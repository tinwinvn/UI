import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import * as fc from "fast-check";
import { NewsCard } from "../NewsCard";
import { CATEGORY_BADGE, type NewsItem } from "../../../common/Body/News/type";

/**
 * Feature: news-page
 * Property 2: NewsCard renders all required fields
 *
 * For any valid NewsItem, when rendered as a NewsCard, the output SHALL contain
 * the item's title text, category badge text, date text, and an image element
 * with the item's imageUrl as its source.
 *
 * Validates: Requirements 3.5
 */

afterEach(() => cleanup());

const categoryKeys = Object.keys(CATEGORY_BADGE);

const newsItemArbitrary: fc.Arbitrary<NewsItem> = fc.record({
  id: fc.integer({ min: 1, max: 10000 }),
  title: fc.string({ minLength: 3, maxLength: 100 }).filter((s) => s.trim().length > 2),
  excerpt: fc.string({ minLength: 1, maxLength: 300 }),
  date: fc
    .tuple(
      fc.integer({ min: 1, max: 28 }),
      fc.integer({ min: 1, max: 12 }),
      fc.integer({ min: 2020, max: 2030 }),
    )
    .map(
      ([d, m, y]) =>
        `${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`,
    ),
  category: fc.constantFrom(...categoryKeys),
  imageUrl: fc.webUrl(),
  featured: fc.boolean(),
});

describe("Feature: news-page, Property 2: NewsCard renders all required fields", () => {
  it("should render title, category badge, date, and image src for any valid NewsItem", () => {
    fc.assert(
      fc.property(newsItemArbitrary, (item: NewsItem) => {
        cleanup();
        const { container } = render(
          <NewsCard item={item} isSelected={false} index={0} onClick={() => {}} />,
        );

        // Title is present
        expect(container.textContent).toContain(item.title);

        // Category badge is present
        expect(container.textContent).toContain(item.category);

        // Date is present
        expect(container.textContent).toContain(item.date);

        // Image with correct src is present
        const img = container.querySelector("img");
        expect(img).not.toBeNull();
        expect(img!.getAttribute("src")).toBe(item.imageUrl);
        expect(img!.getAttribute("alt")).toBe(item.title);

        cleanup();
      }),
      { numRuns: 100 },
    );
  });
});
