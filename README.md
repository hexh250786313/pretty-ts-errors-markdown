# pretty-ts-errors-markdown

A fork of https://github.com/yoavbls/pretty-ts-errors. It transforms TypeScript errors into markdown.

https://github.com/hexh250786313/pretty-ts-errors-markdown/assets/26080416/e22dfcd6-2ca6-46e9-9abd-cce1cc56e63a

## Install

※ Global

```bash
npm i -g pretty-ts-errors-markdown
```

※ Local

```bash
npm i pretty-ts-errors-markdown
```

## Usage (CLI)

※ Use inline parameters

```bash
pretty-ts-errors-markdown -i "{\"range\":{\"start\":{\"line\":6,\"character\":6},\"end\":{\"line\":6,\"character\":7}},\"message\":\"Variable 'a' implicitly has an 'any' type.\",\"code\":7005,\"severity\":1,\"source\":\"tsserver\"}"
```

※ Use standard input

```bash
git clone https://github.com/hexh250786313/pretty-ts-errors-markdown && cd pretty-ts-errors-markdown
cat ./examples/input1.txt | pretty-ts-errors-markdown > ./examples/output.md
```

## Usage (Programmatically)

```typescript
import { formatDiagnostic } from "pretty-ts-errors-markdown";
import { Diagnostic } from "vscode-languageserver-types";

const diagnostic: Diagnostic = {
  range: {
    start: { line: 6, character: 6 },
    end: { line: 6, character: 7 },
  },
  message: "Variable 'a' implicitly has an 'any' type.",
  code: 7005,
  severity: 1,
  source: "tsserver",
};

const marked = formatDiagnostic(diagnostic);
console.log(marked);
```

## Credits

Awesome thanks to [yoavbls](https://github.com/yoavbls) and other contributors for the original [pretty-ts-errors](https://github.com/yoavbls/pretty-ts-errors)
