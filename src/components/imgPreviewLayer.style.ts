import styled, { css } from 'styled-components';

type TooltipProps = {
  top: string;
  left: string;
};
export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  ${({ top, left }) => css`
    top: ${top};
    left: ${left};
  `}
  &:hover .img-previewer-tooltip-text {
    opacity: 1;
    display: flex;
  }
`;
export const ToolTipText = styled.span`
  padding: 4px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #0071e3;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 113, 227, 0.2);
  font-size: 12px;
  font-weight: bold;
  font-family: Gudea Regular;
  color: rgb(0, 7, 59);
  opacity: 0;
  display: none;
  z-index: 1;
  width: max-content;
  position: absolute;
  bottom: 100%;
  font-family: Gudea Regular;
`;

type MagnifierProps = {
  width: string;
  height: string;
};
export const Magnifier = styled.button<MagnifierProps>`
  background: transparent;
  display: flex;
  cursor: pointer;
  border: 1px solid #549de7;
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
  `}
`;
