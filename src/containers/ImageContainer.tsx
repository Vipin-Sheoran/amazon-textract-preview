import React from "react";
import ImgPreviewLayer from "../components/imgPreviewLayer";
import { DataProps } from "../types/app.types";
import { ImageContainerWrapper } from "./ImageContainer.style";

type Props = {
  children: React.ReactNode;
  data?: DataProps | any;
};
const ImageContainer = ({ children, data, ...otherProps }: Props) => {
  return (
    <ImageContainerWrapper
      className="ocr-detection-img-container"
      {...otherProps}
    >
      {children}
      {data && <ImgPreviewLayer data={data} />}
    </ImageContainerWrapper>
  );
};

export default ImageContainer;
