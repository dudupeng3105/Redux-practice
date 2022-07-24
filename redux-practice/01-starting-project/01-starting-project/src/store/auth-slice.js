import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
});

// 액션s 안에 액션오브젝트랑 타입이랑 다있음
// 그래서 순수 redux쓸 때처럼 액션타입, 액션객체 선언 필요없음
export const authActions = authSlice.actions;

export default authSlice.reducer;