import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI) {
  plop.setGenerator("component", {
    description: "Create a new component package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the name of the component?",
      },
      {
        type: "list",
        name: "root",
        message: "What is the base of the component?",
        choices: [
          {
            name: "div",
            value: "div",
          },
          {
            name: "span",
            value: "span",
          },
        ],
      },
      {
        type: "input",
        name: "description",
        message: "What's the description of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "gespenst/components/{{name}}/tsup.config.ts",
        templateFile: "template/component/tsup-config-ts.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/tsconfig.json",
        templateFile: "template/component/tsconfig-json.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/README.md",
        templateFile: "template/component/README-md.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/package.json",
        templateFile: "template/component/package-json.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/.eslintrc.cjs",
        templateFile: "template/component/eslintrc-cjs.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/storybook/{{name}}.stories.tsx",
        templateFile: "template/component/storybook/comp-stories-tsx.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/src/index.tsx",
        templateFile: "template/component/src/index-tsx.hbs",
      },
      {
        type: "add",
        path: "gespenst/components/{{name}}/src/types.ts",
        templateFile: "template/component/src/types-ts.hbs",
      },
      {
        type: "append",
        path: ".changeset/config.json",
        pattern: /  "linked": \[\n    \[(?<insertion>)/g,
        template: '      "@gespenst/{{name}}",',
      },
      {
        type: "append",
        path: "apps/docs/package.json",
        pattern: /  "dependencies": {(?<insertion>)/g,
        template: '    "@gespenst/{{ name }}": "*",',
      },
    ],
  });
}
