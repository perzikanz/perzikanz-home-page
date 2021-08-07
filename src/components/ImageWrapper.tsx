import React from 'react';

const ImageWrapper = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  return (
    <>
      <img
        src={`${process.env.NEXT_PUBLIC_STORAGE_DOMAIN}/${src}`}
        alt={alt}
        className={className}
      />
    </>
  );
};

export default ImageWrapper;
