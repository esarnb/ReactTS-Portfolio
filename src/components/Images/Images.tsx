import { Image, Skeleton, Modal } from '@mantine/core';
import { useState } from 'react';
import "./Images.css";

import { useDisclosure } from '@mantine/hooks';
import {  } from '@mantine/core';

type ImagesProps = {
  src: string
  height?: number | string
  width?: number | string
  alt_src?: string
  details?: any
}

export function Images ({height, width, src, alt_src}: ImagesProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Skeleton visible={loading} height={loading ? 200 : 'auto'} width={loading ? 200 : 'auto'}>
      <Image
        radius="md"
        h={height ?? 'auto'}
        w={width ?? 'auto'}
        fit="contain"
        src={src ?? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}
        fallbackSrc={alt_src}
        onLoad={() => setLoading(false)}
      />
    </Skeleton>
  );
}

export function ImageViewer({height, width, src, alt_src}: ImagesProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <span style={{
      "cursor": "pointer"
    }}>
      
      <Modal opened={opened} onClose={close} withCloseButton={false} size="auto" centered>
        <Images width={'100%'} height={'100%'} src={src} alt_src={alt_src} />
      </Modal>

      <span onClick={open}>
        <Images height={height} width={width} src={src} alt_src={alt_src} />
      </span>
    </span>
  );
}