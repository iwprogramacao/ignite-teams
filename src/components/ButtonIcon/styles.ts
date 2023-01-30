import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonIconStylesProps = 'primary' | 'secondary';
type StyleProps = {
  type: ButtonIconStylesProps;
};

export const ButtonIconContainer = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<StyleProps>(
  ({ theme, type }) => ({
    size: 32,
    color: type === 'primary' ? theme.colors.green_700 : theme.colors.red_dark,
  })
)``;
