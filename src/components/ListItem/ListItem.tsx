import { useI18n } from "~/hooks/useI18n";
import { Container, HeaderContainer, Info, SubTitle, Title } from "./styles";

type ItemProps = {
  id: number,
  date: string,
  value: number
}

type ListItemProps = {
  item: ItemProps
}
const ListItem = ({item}: ListItemProps) => {
  const { c } = useI18n()
  const dateSplit = item.date.split(' ')

  return (
    <Container>
      <HeaderContainer>
        <Title>{dateSplit[0]}</Title>
        <SubTitle>{dateSplit[1]}</SubTitle>
      </HeaderContainer>
      <Info>{c(item.value)}</Info>
    </Container>
  );
}

export default ListItem;
