/**
 * Fix format issues with unordered lists in Markdown text and add indentation for consecutive list items
 * @param markdownText The Markdown text to be fixed
 * @returns The fixed Markdown text
 */
export function fixMarkdownLists(markdownText: string): string {
  // Split the text into lines
  const lines = markdownText.split("\n");
  const result: string[] = [];

  let inListContext = false;
  let codeBlockDepth = 0;
  let previousLineEmpty = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle code blocks
    if (line.trim().startsWith("```")) {
      codeBlockDepth = codeBlockDepth === 0 ? 1 : codeBlockDepth - 1;
      result.push(line);
      continue;
    }

    // Add lines inside code blocks directly
    if (codeBlockDepth > 0) {
      result.push(line);
      continue;
    }

    // Check if the line is a list item
    const isListItem = /^\s*-\s+/.test(line);

    if (isListItem) {
      // If the previous line is empty and we're in a list context, remove the last empty line
      if (previousLineEmpty && inListContext) {
        result.pop();
      }

      result.push(line);
      inListContext = true;
      previousLineEmpty = false;
    } else if (line.trim() === "") {
      // Handle empty lines
      result.push(line);
      previousLineEmpty = true;

      // If not immediately following a list item, end the list context
      if (!inListContext) {
        previousLineEmpty = false;
      }
    } else {
      // Regular text lines
      result.push(line);
      inListContext = false;
      previousLineEmpty = false;

      // If the line ends with a colon, like "is missing the following properties:",
      // ensure that the following list items are considered in the same context
      if (line.trim().endsWith(":")) {
        inListContext = true;
      }
    }
  }

  return result.join("\n");
}
