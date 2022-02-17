import { Paper, Text } from "@mantine/core";
import { singleCard } from "../../../Interfaces/Cards";
import "./BasicCard.css";

function BasicCard(props: any) {
  const { title, desc, img, alt }: singleCard = props;

  return (
    <Paper padding="xl" shadow="xl" radius="md" withBorder>
      <Text>Paper is the most basic ui component</Text>
      <Text>
        Use it to create cards, dropdowns, modals and other components that require background
        with shadow
      </Text>
    </Paper>
  )
}

export default BasicCard;