import React from 'react';
import styled from 'styled-components';

const SelectArea = styled.div.attrs({
  left: props => `${props.left}px`,
  top: props => `${props.top}px`,
  width: props => `${props.width}px`,
  height: props => `${props.height}px`
})`
  position: absolute;
  left: 145px;
  top: 188px;
  transform: translate(0%, 0%) rotate(0rad) scaleX(1) scaleY(1);
  transform-origin: 0% 0% 0px;
  width: 236px;
  height: 250px;
  background-color: transparent;
  border: 1px solid rgb(0, 0, 0);
  visibility: inherit;
`;


export default ({width, height, left, top})=>{
  return <SelectArea
    width={width}
    height={height}
    left={left}
    top={top}
  />
}
