import { TouchableOpacityProps } from 'react-native';
import { FilterContainer, FilterStyleProps, FilterTitle } from './styles';

type FilterProps = FilterStyleProps &
  TouchableOpacityProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <FilterContainer
      isActive={isActive}
      {...rest}
    >
      <FilterTitle>{title}</FilterTitle>
    </FilterContainer>
  );
}
