import { Card, Image, Text } from '@mantine/core';
import "./Card.css";


export default function Cards({ image, title, description, category }: any) {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      // href=
      target="_blank"
    >
      <Card.Section>
        <Image
          src={image ?? "img"}
          h={300}
          alt={title ?? "title"}
        />
      </Card.Section>

      <Text fw={400} size="lg" mt="sm">
        {title ?? "title"}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {description ?? "desc"}
      </Text>
    </Card>
  );
}