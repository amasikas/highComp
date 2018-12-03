import React from 'react';

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
  handleClick = (option)=>{
    alert(option.name);
  };
  render(){
    const result = this.state.options.map(opt=>{
      return (<div onClick={()=>{this.handleClick(opt)}}>{opt.name}:{opt.right}</div>)
    });
    return {result}
  }
}

export default SelectAnswer;
