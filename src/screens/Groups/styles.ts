import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const GroupsContainer = styled(SafeAreaView)`
  flex: 1%;
  background-color: ${({ theme }) => theme.colors.gray_600};
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
`;
