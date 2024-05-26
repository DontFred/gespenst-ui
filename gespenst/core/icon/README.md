# `@gespenst/icon`

The tailwind plugin for gespenst.

```sh
boo@gespenst:~/hui-buh$ bun add @gespenst/icon
# or
boo@gespenst:~/hui-buh$ npm i @gespenst/icon
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/icon
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/icon
```

## Usage

```tsx
import Icon from "@gespenst/icon";
// or
import { Accessibility } from "@gespenst/icon/accessibility";

export default function App() {
  return (
    <div className="flex gap-1">
      <Icon name="accessibility" />
      <Accessibility />
    </div>
  );
}
```

## Documentation

You can find details about usage [here](https://docs-placeholder/docs/core/icon)

## License

This project is licensed under the
[MIT license](https://opensource.org/license/mit)
