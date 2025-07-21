import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className={`py-2 px-2 text-black dark:text-white ${className}`}
      {...rest}
      placeholderTextColor="grey"
    />
  );
};

export default ThemedTextInput;
