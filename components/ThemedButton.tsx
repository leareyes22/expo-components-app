import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  onPress?: () => void;
  onLongPress?: () => void;
  className?: string;
  children: string;
}

const ThemedButton = ({
  onPress,
  onLongPress,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      {...rest}
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
