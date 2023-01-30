import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { InputContainer } from './styles';

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  const theme = useTheme();
  return (
    <InputContainer
      placeholderTextColor={theme.colors.gray_300}
      ref={inputRef}
      {...rest}
    />
  );
}
