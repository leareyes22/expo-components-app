import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semibold" | "link";
}

const ThemedText = ({ className, type = "normal", ...rest }: Props) => {
  return (
    <Text
      {...rest}
      className={[
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semibold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        ` ${className}`,
      ].join(" ")}
    />
  );
};

export default ThemedText;
