import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupsContainer } from './styles';

export function Groups() {
  return (
    <GroupsContainer>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com sua turma"
      />
    </GroupsContainer>
  );
}
