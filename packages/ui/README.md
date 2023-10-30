# UI components package

This package contains all the UI components that can be shared across apps.
These components should be generic and not contain app specific code.

# What is used in this package

- [Shadcn](https://ui.shadcn.com/) for basic components
- [Tailwind](https://tailwindcss.com/) for additional styling

## Using this example you can add a new component from shadcn

Run the following command:

```sh
pnpm ui:add {componentName}
```

Component will be available in components/ui/{componentName}.

Finished component should then be exported in index.ts.
