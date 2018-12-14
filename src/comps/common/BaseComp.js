import React from 'react';
const Fragment = React.Fragment;


export default (WrappedComp) => {
  class NewComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        editable: props.editable
      };
      // 组件创建前
      this.BeforeCreate = this.props.BeforeCreate || function(){};
      // 组件创建完成后
      this.Created = this.props.Created || function(){};
      // 组件销毁后调用
      this.BeforeDestroy = this.props.BeforeDestroy || function(){};
      // 每一次操作
      this.EveryAction = this.props.EveryAction || function(){};

      // 答题类组件专用——答题开始
      this.BeginAnswer = this.props.BeginAnswer || function(){};
      // 答题类组件专用——答题完成
      this.FinishAnswer = this.props.FinishAnswer || function(){};
    }
    static getDerivedStateFromProps(prev, next){

    }
    shouldComponentUpdate(){
      let flag = true;
      // 组件创建前调用钩子
      flag = flag === true ? this.BeforeCreate() : flag;
      return flag;
    }
    componentDidMount(){
      console.log('BaseComp did mount');

      // 组件创建完成后调用钩子
      this.Created()
    }
    componentWillUnmount(){

      // 组件销毁前调用钩子
      this.BeforeDestroy();
    }

    handleBeginAnswer(){

      // 开始作答调用钩子
      this.BeginAnswer();
    }
    handleFinishAnswer(){

      // 作答完成调用钩子
      this.FinishAnswer();
    }
    handleEveryAction(){

      // 每次操作调用
      this.EveryAction();
    }

    render() {
      return (
        <Fragment>
          <WrappedComp
            editable={this.state.editable}
            handleBeginAnswer={this.handleBeginAnswer}
            handleFinishAnswer={this.handleFinishAnswer}
            handleEveryAction={this.handleEveryAction}
          />
        </Fragment>
      );
    }
  }
  return NewComp;
}
