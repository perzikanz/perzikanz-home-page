import React from 'react';

const ImageWrapper = ({
  src,
  width,
  alt,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_STORAGE_DOMAIN}/${src}`}
        width={width}
        alt={alt}
        height={height}
      />
    </>
  );
};

export default ImageWrapper;
