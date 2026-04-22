import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as fc from "fast-check";
import { ArticleView } from "../ArticleView";
import { CATEGORY_BADGE, type NewsItem } from "../../../common/Body/News/type";

/**
 * Feature: news-page
 * Property 3: ArticleView renders all required fields
 *
 * For any valid NewsItem, when rendered as an ArticleView, the output SHALL
 * contain the item's full-size image (via imageUrl), date string, title text,
 * category badge text, and excerpt text.
 *
 * Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5
 */

afterEach(() => cleanup());

const categoryKeys = Object.keys(CATEGORY_BADGE);

const newsItemArbitrary: fc.Arbitrary<NewsItem> = fc.record({
  id: fc.integer({ min: 1, max: 10000 }),
  title: fc.string({ minLength: 3, maxLength: 100 }).filter((s) => s.trim().length > 2),
  excerpt: fc.string({ minLength: 3, maxLength: 300 }).filter((s) => s.trim().length > 2),
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

describe("Feature: news-page, Property 3: ArticleView renders all required fields", () => {
  it("should render image, date, title, category badge, and excerpt for any valid NewsItem", () => {
    fc.assert(
      fc.property(newsItemArbitrary, (item: NewsItem) => {
        cleanup();
        const { container } = render(
          <MemoryRouter>
            <ArticleView item={item} />
          </MemoryRouter>,
        );

        // Full-size image with correct src
        const img = container.querySelector("img");
        expect(img).not.toBeNull();
        expect(img!.getAttribute("src")).toBe(item.imageUrl);
        expect(img!.getAttribute("alt")).toBe(item.title);

        // Title is present
        expect(container.textContent).toContain(item.title);

        // Category badge is present
        expect(container.textContent).toContain(item.category);

        // Date is present
        expect(container.textContent).toContain(item.date);

        // Excerpt is present
        expect(container.textContent).toContain(item.excerpt);

        cleanup();
      }),
      { numRuns: 100 },
    );
  });
});
