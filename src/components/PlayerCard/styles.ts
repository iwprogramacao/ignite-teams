import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const PlayerCardContainer = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.gray_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

export const PlayerName = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    font-size: ${theme.font_size.md}px;
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
  `}
`;

export const PlayerIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
