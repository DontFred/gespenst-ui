# `@gespenst/avatar`

Avatar is used to display an image with an fallback if loading or errored.
Mainly for User indication.

```sh
boo@gespenst:~/hui-buh$ bun add @gespenst/avatar
# or
boo@gespenst:~/hui-buh$ npm i @gespenst/avatar
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/avatar
# or
boo@gespenst:~/hui-buh$ yarn add @gespenst/avatar
```

## Usage

```tsx
import { Avatar } from "@gespenst/avatar";

export default function App() {
  return <Avatar name="Dont Fred" src="https://github.com/1.png" />;
}
```

```tsx
import { AvatarGroup } from "@gespenst/avatar";

export default function App() {
  return (
    <AvatarGroup
      members={[
        { name: "John Doe", src: "https://github.com/1.png" },
        { name: "Jane Doe", src: "https://github.com/2.png" },
        { name: "Mario Doe", src: "https://github.com/3.png" },
        { name: "Luigi Doe", src: "https://github.com/4.png" },
      ]}
    />
  );
}
```

## Documentation

You can find details about usage
[here](https://docs-placeholder/docs/components/avatar)

## License

This project is licensed under the
[MIT license](https://opensource.org/license/mit)
