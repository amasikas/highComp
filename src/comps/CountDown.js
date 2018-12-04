import React from 'react';
import styled from 'styled-components';

const Progress = styled.div.attrs({
  width: props => props.width || '100%'
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${props => props.width};
  background-color: red;
  height: 10px;
`;


export default ({currentTime, totalTime})=>{
  const percent = currentTime/totalTime * 100 + '%';
  console.log(percent);
  return <Progress width={percent} />
}
