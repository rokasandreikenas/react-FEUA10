import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const BasicButton = () => <Button>I am basic button</Button>;

export const PrimaryButton = () => <Button primary>I am primary button</Button>;

export const SecondaryButton = () => (
  <Button secondary>I am primary button</Button>
);
