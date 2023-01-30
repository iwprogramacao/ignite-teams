import { ButtonIcon } from '@components/ButtonIcon';
import { PlayerCardContainer, PlayerIcon, PlayerName } from './styles';

type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerCardContainer>
      <PlayerIcon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon
        icon="close"
        type="secondary"
        onPress={onRemove}
      />
    </PlayerCardContainer>
  );
}
