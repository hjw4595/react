react start app
1. props
부모컴포넌트에서 자식 컴포넌트에게 주는 값 
자식 컴포넌트에서 변경 불가능 (읽기전용)

부모 컴포넌트에서 선언 하고 
class App extends Component { 
  render() {
    return (
        <ChildComponent name="내용" /> 
    )
    export default App;
    
자식 컴포넌트에서 읽어옴
class ChildComponent extends Component { 
  render() {
    return (
    <div>
       {this.props.name}
    </div>
    )
    export default ChildComponent;
    
2. state
컴포넌트 내부에서 선언하며 내부에서 값 변경가능

state 선언 
class state extends Component {
  state = {
    number: 0
  }
  
2-1 this.setState
이 함수가호출되면 컴포넌트가 리랜더링이 적용되어 state의 값을 바꿀때 사용 
this.setState({
  number: 0,
    ...this.state.number,
    number: 2
  }
});
… 은 자바스크립트의 전개연산자 - 역할은 객체안에 있는 내용을 해당 위치에 보여줌
