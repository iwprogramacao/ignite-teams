import { ButtonContainer, Title, ButtonStylesProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonStylesProps;
};

export function Button({ title, type = 'primary', ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
