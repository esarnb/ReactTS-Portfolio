import { Paper, Button, Text, Skeleton, Anchor } from "@mantine/core";
import { BaseData } from "../../../Interfaces/Cards";
import "../../../App.css";
import "./BasicCard.css";

function BasicCard(props: any) {
  const { title, desc, img, alt, btnText, link, updated, padding, shadow, radius}: BaseData = props;
  return (
    <Paper className="BCGit" padding={padding} shadow={shadow} radius={radius} withBorder>
      <Text size="lg" underline>{title ?? <Skeleton height={8} radius="xl" /> }</Text>
      <Text>{desc ?? <Skeleton height={8} mt={6} radius="xl" />}
      {
        btnText ? <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        {btnText}
      </Button> : <></>
      }
      {
        link ? <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          <Anchor href={link} target="_blank">
            Live
          </Anchor>
        </Button> : <></>
      }
      {
        updated ? <i className="tiny float-right">Last Updated: {`${updated.getMonth()}/${updated.getDate()}/${updated.getFullYear()}`}</i> : <></>
      }
      
      </Text>
    </Paper>
  )
}

export default BasicCard;