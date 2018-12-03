
const BaseComp = Comp => class extends Comp {
  render() {
    console.log(this.state, 'state');
    return super.render();
  }
}

export default BaseComp;
