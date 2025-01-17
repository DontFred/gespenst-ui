# `@gespenst/style`

The tailwind plugin for gespenst.

```sh
boo@gespenst:~/hui-buh$ bun add -d @gespenst/style
# or
boo@gespenst:~/hui-buh$ npm i -D @gespenst/style
# or
boo@gespenst:~/hui-buh$ yarn add -D @gespenst/style
# or
boo@gespenst:~/hui-buh$ yarn add -D @gespenst/style
```

## Usage

```ts
import type { Config } from "tailwindcss";
import { gespenst } from "@gespenst/style";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  plugins: [gespenst],
};

export default config;
```

## Documentation

You can find details about usage
[here](https://docs-placeholder/docs/core/style)

## License

This project is licensed under the
[MIT license](https://opensource.org/license/mit)
