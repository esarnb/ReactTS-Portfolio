import { Paper, Text, Skeleton } from "@mantine/core";
import "./BasicCard.css";

function BasicCard(props: any) {
  const { title, desc, img, alt, padding, shadow, radius} = props;
  return (
    <Paper className="BCGit" padding={padding} shadow={shadow} radius={radius} withBorder>
      <Text>{title ?? <Skeleton height={8} radius="xl" /> }</Text>
      <Text>{desc ?? <Skeleton height={8} mt={6} radius="xl" />}
      </Text>
    </Paper>
  )
}

export default BasicCard;