import React from 'react';
import BaseComp from './BaseComp';
import Progress from './CountDown';
class SelectAnswer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
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
      countDown: 10
    }
  }
  componentDidMount(){

    // 倒计时处理
    let time = this.state.countDown;
    let timer = setInterval(()=>{
      console.log(time);
      time--;
      if(time === 0){
        clearInterval(timer);
        console.log('done');
      }
    }, 1000);
  }
  handleClick = (option)=>{
    alert(option.name);
  };
  render(){
    const result = this.state.options.map((opt, index)=>{
      return (<div key={index} onClick={()=>{this.handleClick(opt)}}>{opt.name}:{opt.right ? '1' : '0'}</div>)
    });
    return <div>
      {result}
      {Progress}
    </div>

  }
}

SelectAnswer = BaseComp(SelectAnswer);
export default SelectAnswer;
