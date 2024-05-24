# `@gespenst/utils`

The utility functions for the gespenst project.

```sh
boo@gespenst:~/hui-buh$ bun add -d @gespenst/utils
# or
boo@gespenst:~/hui-buh$ npm i -D @gespenst/utils
# or
boo@gespenst:~/hui-buh$ yarn add -D @gespenst/utils
# or
boo@gespenst:~/hui-buh$ yarn add -D @gespenst/utils
```

## Usage

```tsx
import type { Config } from "tailwindcss";
import { cn } from "@gespenst/utils";

function someFunction(){
  ...
}

export default function App(){

  const result = someFunction();

  return (
    <div className={cn("text-lg text-blue-700", result && "text-red-700" )}>
      Hallo World!
    </div>
  )
}
```

## Documentation

You can find details about usage
[here](https://docs-placeholder/docs/core/utils)

## License

This project is licensed under the
[MIT license](https://opensource.org/license/mit)
