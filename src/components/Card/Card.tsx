import { Card, Image, Text } from '@mantine/core';
import "./Card.css";


export default function Cards({ image, title, description, imgSize, footer }: any) {
  return (
    <Card
      className='mantine-cards'
      shadow="sm"
      padding="xl"
      component="a"
      // href=
      target="_blank"
    >
      <Card.Section>
        {
          image ? <Image
            src={image ?? "img"}
            h={imgSize ?? 300 }
            alt={title ?? "title"}
          /> : null
        }
      </Card.Section>
      <span className='card-body'>
          
        {
          title ? <Text fw={400} size="lg" mt="sm">
            {title ?? "title"}
          </Text> : null
        }

        {description ? <Text mt="xs" c="dimmed" size="sm">
          {description ?? "desc"}
        </Text> : null}
        { footer ? <footer className='footer'>{footer}</footer> : null}
      </span>
    </Card>
  );
}