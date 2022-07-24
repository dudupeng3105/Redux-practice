// react-redux 라이브러리를 깔면
// 귀찮게 subscribe 함수 쓸 필요없음
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';

// export const INCREMENT = 'increment';


// Store 구성 -> configureStore
// 여러가지 리듀서를 하나로 합칠 수 있음
// 왜냐면 store는 리듀서 하나만 가져야되서 합침
const store = configureStore({
  // 여러 슬라이서의 리듀서를 합침
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

// 외부에서 쓰려고
export default store;












// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     // 기존의 것을 새 것과 교환하는 방식이므로
//     // ★ merge방식 아님!!
//     // showCounter가 변하지 않더라도
//     // return에는 showCounter도 있어야한다(전체 객체가 있어야함)
//     // 절대 기존의 state를 바꿔서는 안된다 !!
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'increase') {
//     // BY dispatch({ type: 'increase', amount: 5 })
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     };
//   }

//   return state;
// }

// const store = createStore(counterReducer);


