import AIButton from "./AIButton"; // Adjust the import path as necessary

export default {
  title: "Components/AIButton",
  component: AIButton,
  argTypes: {
    onClick: { action: "clicked" },
    label: { control: "text" },
    style: { control: "object" },
    className: { control: "text" },
  },
};

export const Primary = {
  args: {
    label: "Primary AI Button",
    className: "primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary AI Button",
    className: "secondary",
  },
};
