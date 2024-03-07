import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';
import { increase, changeObj } from './../store/userSlice';

function Cart() {

  let state = useSelector((state) => {return state})
  console.log(state)

  console.log(state.user)
  console.log(state.stock)

  // 원하는 것만 가져오기
  // let state2 = useSelector((state)=> {return state.user})
  let state2 = useSelector(state => state.user)
  console.log(state2)

  let cart = useSelector(state => state.cart)

  let dispatch = useDispatch()
  let member = useSelector(state=>state.member)

  return (
    <>
      <h5>{state.user2.name}의 장바구니 &emsp; {state.user2.age}</h5>
      <button onClick={()=>{dispatch(increase(5))}}>나이증가</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          <tr>
            <td>{cart[0].id}</td>
            <td>{cart[0].name}</td>
            <td>{cart[0].count}</td>
            <td>변경</td>
          </tr>
          <tr>
            <td>{cart[1].id}</td>
            <td>{cart[1].name}</td>
            <td>{cart[1].count}</td>
            <td>변경</td>
          </tr>
          */}
          {
            cart.map( a =>
              <tr>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button onClick={()=>{
                    
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}
export default Cart;