import styled, { css } from 'styled-components/native';

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_300};
  `}
  text-align: center;
`;
