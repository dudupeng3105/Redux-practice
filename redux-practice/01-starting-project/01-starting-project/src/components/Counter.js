import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
// counterActions위에 마우스를 대면 멋있습니다.
import { counterActions } from "../store/counter-slice";
// import { INCREMENT } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  // react-redux에 의해 실행됨
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  // 리덕스 스토어가 바뀌면, 컴포넌트함수도 다시
  // 렌더링됨 -> 업데이트

  const incrementHandler = () => {
    // dispatch({액션타입})
    dispatch(counterActions.increment());
  };  

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // payload
    // 어떤 값이든 추가로 쓸 데이터는 payload에 넣으면 됨
    // 인자(argument)로서 실행하고자 하는 값을 액션메서드에 
    // 전달하면 payload 필드명에 저장됨, 이거는 default임 
    // 우리가정하는게 아님
    // {  type: SOME_UNIQUE_IDENTIFIER, payload: 10}
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component {
//   // 클래스 기반 컴포넌트에서는 hook(useSelector 등) 말고 connect를 씀

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment '}),
//     decrement: () => dispatch({ type: 'decrement '}),
//   };
// };

// // 단지 stateProps와 dispatchProps를 포인트하고 있다가 리액트 리덕스가 실행시켜줌
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
