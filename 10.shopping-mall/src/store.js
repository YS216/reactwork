import { configureStore, createSlice } from "@reduxjs/toolkit";
import user2 from './store/userSlice'

let user = createSlice({
  name : 'user',
  initialState : 'Hong'
})

let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id:0, name:"vest", count:2},
    {id:2, name:"jacket", count:1},
  ],
  reducers : {
    addCount(state, action) {
      let i = state.findIndex((a)=>{return a.id == action.payload})
      state[i].count++
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})
export let { addCount, addItem } = cart.actions

/*
  Redux의 state를 변경하고 싶으면
  1) state함수를 만들기
  2) export하기
  3) 쓰는곳에서는 import, dispatch()감싸줘야 한다

*/
let member = createSlice({
  name : 'member',
  initialState : 'Kim',
  reducers : {
    changeName(state) {
      return 'jiwon ' + state
    }
  }
})

export let { changeName} = member.actions
/* 
let user2 = createSlice({
  name : 'user2',
  initialState : {name:'kim', age:20},
  reducers : {
    changeObj(state) {
      state.name = 'park'
    },
    increase(state, num) {
      state.age += num.payload
    }
  }
})
export let { changeObj, increase } = user2.actions
*/

export default configureStore({
  reducer:{
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
    member : member.reducer,
    user2 : user2.reducer
  }
})