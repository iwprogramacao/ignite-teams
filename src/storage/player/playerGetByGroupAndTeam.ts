import { playersGetByGroup } from '@storage/player/playersGetByGroup';

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group);

    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (err) {
    throw err;
  }
}
