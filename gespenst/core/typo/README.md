# `@gespenst/typo`

The Typography components for gespenst

```sh
boo@gespenst:~/hui-buh$ bun add @gespenst/typo
# or
boo@gespenst:~/hui-buh$ npm i @gespenst/typo
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/typo
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/typo
```

## Usage

```tsx
import { Text } from "@gespenst/typo";

export default function App() {
  return <Text size={16}>Hello World</Text>;
}
```

```tsx
import { Text } from "@gespenst/typo";
import { useRef } from "react";

export default function App() {
  const spanRef = useRef<HTMLDivElement>(null);
  // This will Error

  const spanRef = useRef<HTMLSpanElement>(null);
  // This will not Error

  return (
    <Text as="span" ref={spanRef} size={16}>
      Hello World
    </Text>
    // This renders a span element
  );
}
```

```tsx
import { TBody, TD, TH, THead, TR, Table } from "@gespenst/typo";

export default function App() {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Header 1</TH>
          <TH>Header 2</TH>
          <TH>Header 3</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>Item-1.1</TD>
          <TD>Item-1.2</TD>
          <TD>Item-1.3</TD>
        </TR>
        <TR>
          <TD>Item-2.1</TD>
          <TD>Item-2.2</TD>
          <TD>Item-2.3</TD>
        </TR>
        <TR>
          <TD>Item-3.1</TD>
          <TD>Item-3.2</TD>
          <TD>Item-3.3</TD>
        </TR>
      </TBody>
    </Table>
  );
}
```

## Documentation

You can find details about usage [here](https://docs-placeholder/docs/core/typo)

## License

This project is licensed under the
[MIT license](https://opensource.org/license/mit)
