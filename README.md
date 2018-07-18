# markdown to text emoji
[![npm](https://img.shields.io/npm/dt/markdown-to-text-emoji.svg?style=for-the-badge)](https://www.npmjs.com/package/markdown-to-text-emoji)

|Input|Output|
|---|---|
|`hello :smile: :smiling_imp::smile:`|`hello 😄 😈😄`|

> All primitive input evaluate String except `null`, `undefined`,
> `null`, `undefined` evaluate empty string.

## Install

```bash
npm install markdown-to-text-emoji
```

## Usage
```typescript
import {textEmoji} from 'markdown-to-text-emoji'

textEmoji(`hello :smile: :smiling_imp::smile:`) // `hello 😄 😈😄`
```


## Test
```bash
$ jest --coverage
 PASS  ./index.spec.ts
  emoji
    ✓ emoji (4ms)
    ✓ createMapMdToEmoji (1ms)
    ✓ emojiMd
    ✓ createRegExpTest (1ms)
    ✓ textEmoji (3ms)

---------------------|----------|----------|----------|----------|-------------------|
File                 |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------------|----------|----------|----------|----------|-------------------|
All files            |      100 |      100 |      100 |      100 |                   |
 emoji.ts            |      100 |      100 |      100 |      100 |                   |
 markdown-to-text.ts |      100 |      100 |      100 |      100 |                   |
---------------------|----------|----------|----------|----------|-------------------|

=============================== Coverage summary ===============================
Statements   : 100% ( 13/13 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 13/13 )
================================================================================
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        3.181s
Ran all test suites.
✨  Done in 3.68s.
```

> emoji data [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)

## LICENSE
MIT