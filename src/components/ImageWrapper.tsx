import React from 'react';

const ImageWrapper = ({
  src,
  width,
  alt,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_STORAGE_DOMAIN}/${src}`}
        width={width}
        alt={alt}
        height={height}
        className={className}
      />
    </>
  );
};

export default ImageWrapper;
