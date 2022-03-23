import { Paper, Text, Skeleton } from "@mantine/core";
import { BaseData } from "../../../Interfaces/Cards";
import { CardBtns } from "../../CardBtns/CardBtns";
import { CardFooter } from "../../CardFooter/CardFooter"
import "../../../App.css";
import "./BasicCard.css";

function BasicCard(props: any) {
  const { title, desc, img, alt, btn, link, updated, padding, shadow, radius}: BaseData = props;
  return (
    <Paper className="BCGit" padding={padding} shadow={shadow} radius={radius} withBorder>
      <Text size="lg" underline>{title ?? <Skeleton height={8} radius="xl" /> }</Text>
      <Text>{desc ?? <Skeleton height={8} mt={6} radius="xl" />}
      <CardBtns btn={btn} link={link}/>
      
      <p className="tiny" />
      {/* <br /> */}
      
      <CardFooter updated={updated} lang={props.language}/>
      </Text>
    </Paper>
  )
}

export default BasicCard;