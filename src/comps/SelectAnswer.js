import React from 'react';
import BaseComp from './common/BaseComp';
import Progress from './common/CountDown';
import styled from 'styled-components';

const BoxStyle = styled.div`
  width: 660px;
`;

const TitleStyle = styled.div`
  margin-bottom: 38px;
  height: 40px;
  line-height: 37px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #FFF;
`;

const OptionPanelStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const OptionStyle = styled.div.attrs({
  boxShadow: props => {
    if(props.result === null){
      return "0 0 0 6px rgba(152, 136, 207, 1)"
    }
    return props.result ? " 0 0 0 6px rgba(83, 227, 189, 1)" : " 0 0 0 6px rgba(252, 97, 97, 1)";
  }
})`
  width: 180px;
  height: 135px;
  border-radius: 20px;
  margin-right: 60px;
  background-color: #FFF;
  cursor: pointer;
  transition: all 0.2s linear;
  &:last-child{
    margin-right: 0;
  }
  &:hover{
    box-shadow: ${props => props.boxShadow};
  }
`;

const ResultOptionStyle = styled(OptionStyle)`
  box-shadow: ${props=>props.result ? " 0 0 0 6px rgba(83, 227, 189, 1)" : " 0 0 0 6px rgba(252, 97, 97, 1)"}
`;
class SelectAnswer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      title: '',
      options: [{
        name: 'A',
        right: false
      },{
        name: 'B',
        right: true
      },{
        name: 'C',
        right: false
      }],
      answer: null,
      countDown: 10,
      time: 10
    }
  }
  componentDidMount(){
    // 倒计时处理
    let time = this.state.countDown;
    let timer = setInterval(()=>{
      time--;
      this.setState({
        time
      });

      if(time === 0){
        this.setState({
          time
        });
        clearInterval(timer);
        console.log('done');
      }
    }, 1000);
  }
  handleClick = (option)=>{
    this.setState({
      answer: option.name
    })
  };
  render(){
    const ToggleOptionStyle = this.state.answer === null ? OptionStyle:ResultOptionStyle;
    const result = this.state.options.map((opt, index)=>{
      const result = this.state.answer ? opt.right : null;
      return (<ToggleOptionStyle key={index} result={result} onClick={()=>{this.handleClick(opt)}}>{opt.name}:{opt.right ? '1' : '0'}</ToggleOptionStyle>);
    });
    return <BoxStyle>
      <TitleStyle >which food grown in Jennie’s farm</TitleStyle>
      <OptionPanelStyle>
        {result}
      </OptionPanelStyle>
      <Progress currentTime={this.state.time} totalTime={this.state.countDown}/>
    </BoxStyle>

  }
}

SelectAnswer = BaseComp(SelectAnswer);
export default SelectAnswer;
