import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green_700,
}))``;
