import { TouchableOpacityProps } from 'react-native';
import { ButtonIconContainer, ButtonIconStylesProps, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconStylesProps;
};

export function ButtonIcon({
  icon,
  type = 'primary',
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </ButtonIconContainer>
  );
}
