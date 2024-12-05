# Deep Flatten Type Utility

[![npm version](https://img.shields.io/npm/v/deep-flatten-type.svg)](https://www.npmjs.com/package/deep-flatten-type)
[![license](https://img.shields.io/npm/l/deep-flatten-type.svg)](https://www.npmjs.com/package/deep-flatten-type)
[![downloads](https://img.shields.io/npm/dt/deep-flatten-type.svg)](https://www.npmjs.com/package/deep-flatten-type)

**Deep Flatten Type Utility** is a lightweight TypeScript utility that flattens deeply nested object types into a dot-separated union of keys. All optional keys are treated as required, ensuring flexibility and consistency.

## Installation

Install via npm or yarn:

```bash
npm install deep-flatten-type
# or
yarn add deep-flatten-type
```

## Features

- **TypeScript-First:** Define and manipulate deeply nested object types with ease.
- **Dot-Separated Union:** Automatically flattens keys into a dot-separated union.
- **Supports Optional Keys:** Treats all optional keys as required.

## Usage

Here's an example of how to use `DeepFlatten`:

```typescript
import { DeepFlatten } from "deep-flatten-type";

type NestedObject = {
  a: {
    b: {
      c: number;
    };
    d: string;
  };
  e: boolean;
};

const paths: DeepFlatten<NestedObject> = "e" | "a.d" | "a.b.c";
```

### Explanation
Given the type `NestedObject`, `DeepFlatten<NestedObject>` generates a union of string paths representing all possible keys:

- `"e"`
- `"a.d"`
- `"a.b.c"`

## API

### `DeepFlatten<T>`

- **`T`**: The deeply nested object type to be flattened.

Returns: A union of dot-separated string paths for all keys in `T`.

## Contributing

Contributions are welcome! If you encounter any issues or have feature requests, feel free to open an issue or submit a pull request on [GitHub](https://github.com/your-repo/deep-flatten-type).

## License

This project is licensed under the [MIT License](LICENSE).
