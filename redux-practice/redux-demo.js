// 리액트 서드파티라이브러리 임포트 하기 위한 구문
const redux = require("redux");

// 리듀서 함수
// 리덕스 라이브러리에 의해 호출됨
// 항상 2개의 입력, 1개의 출력
// inputs: Old State + Dispatched Action
// output: New State Object
// pure function 이어야함
// : same input leads to same output
// state = 0 (디폴트설정, 안하면 초기상태 없어서 에러남)
const counterReducer = (state = { counter: 0 }, action) => {
  // 액션 타입에 따라 다른 동작 실행시킴
  if (action.type === 'increment') {
    // return new State Object(보통 객체를 리턴해서..)
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// Store가 어떤 리듀서가 Store를 바꾸는 지 알아야함
// redux.createStore(리듀서함수);
const store = redux.createStore(counterReducer);

console.log(store.getState()); // 처음 실행될 때 1 증가했음

// 상태가 변화할 때 마다 트리거 될 것이다.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 데이터가 변경될때마다 counterSubscriber를 호출
store.subscribe(counterSubscriber);


// 액션 및 디스패치
// 액션은 js object
// store.dispatch(액션);
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });