import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonStylesProps = 'primary' | 'secondary';
type StyleProps = {
  type: ButtonStylesProps;
};

export const ButtonContainer = styled(TouchableOpacity)<StyleProps>`
  flex: 1;

  // Hack para prevenção de distorção de tamanho com contexto de flex 1
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.colors.green_700 : theme.colors.red_dark};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
  `}
`;
