import {MantineNumberSize, MantineShadow} from "@mantine/core";

export interface singleCard {
  title?: string,
  desc?: string,
  img?: string, 
  alt?: string,
  color?: string
}

export interface BaseData {
  title?: string | React.ReactElement,
  desc?: string | React.ReactElement,
  btnText?: string,
  link?: string | null,
  img?: string,
  alt?: string,
  padding?: MantineNumberSize | undefined,
  shadow?: MantineShadow | undefined,
  radius?: MantineNumberSize | undefined
}