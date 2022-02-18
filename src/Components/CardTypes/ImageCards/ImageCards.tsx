import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

export default function ImageCard() {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Image Alt" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Title</Text>
          <Badge color="pink" variant="light">
            Badge Title
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo incidunt, tenetur sequi rerum, tempora nostrum accusamus velit nobis nesciunt officiis quae illum aliquam iure architecto, ea officia quibusdam porro.
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Button name
        </Button>
      </Card>
    </div>
  );
}