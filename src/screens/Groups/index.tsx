import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupGetAll';
import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Highlight } from '../../components/Highlight';
import { GroupsContainer } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (err) {
      console.log(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <GroupsContainer>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
      />

      <Button
        title="Criar nova turma"
        onPress={handleNewGroup}
      />
    </GroupsContainer>
  );
}
