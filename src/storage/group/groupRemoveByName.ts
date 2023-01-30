import { groupsGetAll } from './groupGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';

export async function groupRemoveByName(groupToRemove: string) {
  try {
    const storedGroups = await groupsGetAll();
    const filteredGroups = storedGroups.filter(
      (group) => group !== groupToRemove
    );

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(filteredGroups)
    );

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupToRemove}`);
  } catch (err) {
    throw err;
  }
}
