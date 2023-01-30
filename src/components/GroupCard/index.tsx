import { TouchableOpacityProps } from 'react-native';
import { GroupCardContainer, Title, UsersIcon } from './styles';

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <GroupCardContainer {...rest}>
      <UsersIcon />
      <Title>{title}</Title>
    </GroupCardContainer>
  );
}
