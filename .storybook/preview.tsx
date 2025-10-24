import type { Preview } from "@storybook/react-vite";

import "../src/index.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "default", title: "Default" },
        { value: "sign", title: "Sign" },
        { value: "id", title: "ID" },
        { value: "pay", title: "Pay" },
        { value: "risk", title: "Risk" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      document.documentElement.setAttribute("data-theme", theme);
      return <Story />;
    },
  ],
};

export default preview;
