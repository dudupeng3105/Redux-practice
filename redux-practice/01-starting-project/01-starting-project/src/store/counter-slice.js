import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  // 리덕스 툴킷을 리덕스를 편하게 사용하게 해줌
  // 일단 이름이 필요함
  name: 'counter',
  // 초깃값
  initialState: initialCounterState,
  // 리듀서 함수들
  // increment자체가 액션타입이된다.
  // action.type을 props 안받아도됨
  reducers: {
    increment(state) {
      // 툴킷에서는 상태를 바로 바꿔도 된다!!
      // 내부적으로 처리를 해줌(새로운 객체만들어서 교체)
      // 내부적으로 immer 사용해서
      // 그래서 여전히 immutable
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // 이경우에는 action.type이외의 다른 action.???이 쓰일 수 있으므로 action을 넣어준다.
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// 액션s 안에 액션오브젝트랑 타입이랑 다있음
// 그래서 순수 redux쓸 때처럼 액션타입, 액션객체 선언 필요없음
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;