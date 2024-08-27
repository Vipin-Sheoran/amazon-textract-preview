import { useCallback, useLayoutEffect, useState } from "react";
import { Magnifier, Tooltip, ToolTipText } from "./imgPreviewLayer.style";
import { DataProps } from "../types/app.types";

type Props = {
  data: DataProps;
};
const ImgPreviewLayer = (props: Props) => {
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [hoveredText, setHoveredText] = useState<any>(null);

  const { data } = props;

  useLayoutEffect(() => {
    const element = document.getElementsByClassName(
      "ocr-detection-img-container"
    );
    const width = element[0] && element[0]?.getBoundingClientRect().width;
    const height = element[0] && element[0]?.getBoundingClientRect().height;
    setPageWidth(width);
    setPageHeight(height);
  }, [data]);

  const diplayableData = data.Blocks.filter(
    (block: any) => !!block?.Text && block.BlockType !== "WORD"
  );

  const handleCopy = useCallback((value: string) => {
    setHoveredText("Copied!");
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setHoveredText(null);
    }, 1500);
  }, []);
  return (
    <>
      {diplayableData.map((item: any) => {
        const top = `${item.Geometry.Polygon[0].Y * pageHeight}px`;
        const left = `${item.Geometry.Polygon[0].X * pageWidth}px`;
        const width = `${
          (item.Geometry.Polygon[1].X - item.Geometry.Polygon[0].X) * pageWidth
        }px`;
        const height = `${
          (item.Geometry.Polygon[2].Y - item.Geometry.Polygon[1].Y) * pageHeight
        }px`;
        return (
          <Tooltip
            top={top}
            left={left}
            key={item.Id}
            className="img-previewer-tooltip"
          >
            <ToolTipText className="img-previewer-tooltip-text">
              {hoveredText ? hoveredText : item.Text}
            </ToolTipText>
            <Magnifier
              onClick={() => handleCopy(item?.Text as string)}
              width={width}
              height={height}
              className="img-previewer-magnifier"
            ></Magnifier>
          </Tooltip>
        );
      })}
    </>
  );
};

export default ImgPreviewLayer;
