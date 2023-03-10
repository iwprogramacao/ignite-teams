import { UsersThree } from 'phosphor-react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const NewGroupContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: 24px;
`;

export const NewGroupContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const NewGroupIcon = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.colors.green_700,
}))`
  align-self: center;
`;
