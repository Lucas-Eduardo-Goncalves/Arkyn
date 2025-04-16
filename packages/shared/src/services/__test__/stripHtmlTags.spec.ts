import { describe, it, expect } from "vitest";
import { stripHtmlTags } from "../stripHtmlTags";

describe("stripHtmlTags", () => {
  it("should remove simple HTML tags", () => {
    const input = "<p>Hello World</p>";
    const expected = "Hello World";
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it("should remove nested HTML tags", () => {
    const input = "<p>Hello <strong>World</strong></p>";
    const expected = "Hello World";
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it("should handle HTML tags with attributes", () => {
    const input = '<div class="container" id="main">Content</div>';
    const expected = "Content";
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it("should handle self-closing tags", () => {
    const input = 'Text with <img src="image.png" /> inside';
    const expected = "Text with  inside";
    expect(stripHtmlTags(input)).toBe(expected);
  });

  it("should return the original string if no HTML tags are present", () => {
    const input = "Just plain text";
    expect(stripHtmlTags(input)).toBe(input);
  });

  it("should handle empty string", () => {
    expect(stripHtmlTags("")).toBe("");
  });

  it("should handle complex HTML structures", () => {
    const input = `
      <article>
        <h1>Title</h1>
        <p>Paragraph with <em>emphasized</em> and <strong>strong</strong> text.</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </article>
    `;
    const expected =
      "\n      \n        Title\n        Paragraph with emphasized and strong text.\n        \n          Item 1\n          Item 2\n        \n      \n    ";
    expect(stripHtmlTags(input)).toBe(expected);
  });
});
