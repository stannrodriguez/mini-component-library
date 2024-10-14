/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper size={size}>
      <ProgressBarFill value={value} size={size} />
    </ProgressBarWrapper>
  );
};

const SIZES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 24,
    padding: 4,
  },
};

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  padding: ${(props) => SIZES[props.size].padding}px;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => props.value}%;
  height: ${(props) => SIZES[props.size].height}px;
  background-color: ${COLORS.primary};
  border-radius: 4px;
`;

export default ProgressBar;
