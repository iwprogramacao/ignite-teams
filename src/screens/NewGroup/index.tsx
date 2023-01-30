import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';
import { NewGroupContainer, NewGroupContent, NewGroupIcon } from './styles';

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleCreateNewGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma!');
      }

      await groupCreate(group);

      // {group} === {group: group}
      navigation.navigate('players', { group });
    } catch (err) {
      if (err instanceof AppError) {
        Alert.alert('Novo Grupo', err.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um grupo.');
        console.error(err);
      }
    }
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />

      <NewGroupContent>
        <NewGroupIcon />
        <Highlight
          title="Nova Turma"
          subtitle="Cria uma turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />
        <Button
          title="Criar"
          onPress={handleCreateNewGroup}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
