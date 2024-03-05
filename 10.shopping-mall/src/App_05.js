import './App.css';
import {Navbar,Container,Nav, Row, Col, Button} from 'react-bootstrap';
import { createContext, useState } from 'react';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import pList from './data/ProductList';
import Detail from './pages/Detail';
import axios from 'axios';

/*
  - AJAX 사용
    설치 : npm i axios
*/

export let Context1 = createContext();

function App() {
  let [stock, setStock] = useState([10,11,12]);

  let [clothes, setClothes] = useState(pList);
  let navigate = useNavigate();  // 페이지의 이동을 도와주는 함수
  let [btnCount, setBtnCount] = useState(2);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' />
            <Container>
              <Row>
                {
                  clothes.map((list, i)=>{
                    return(
                      <PListImg clothes={list} i={i+1} key={i}/>
                    )
                  })
                }
              </Row>
            </Container>
            
            <Button variant="secondary" onClick={()=>{
              /* 
              axios.Method('서버url')
                   .then((변수)=>{})  -> 성공했을 때
                   .catch(()=>{})     -> 실패했을 때
              */
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${btnCount}.json`)
                   .then((result)=>{
                    console.log(result.data);
                    let copy = [...clothes, ...result.data]
                    setClothes(copy)
                    setBtnCount(btnCount+1)
                   })
                   .catch(()=>{
                    console.log('실패')
                    alert('더이상 상품이 없습니다')
                  })

              /*
              - 서버로 보낼때
                axios.post('서버 url', 보낼 데이터)
                     .then((변수)=>{})  -> 성공했을 때
                     .catch(()=>{})     -> 실패했을 때

                axios.post('https://raw.githubusercontent.com', {name:'kim',age:20,tel:'010-1111-2222'})
                     .then((변수)=>{})  -> 성공했을 때
                     .catch(()=>{})     -> 실패했을 때

              - 여러서버에 동시 요청
                Promise.all([axios.get('서버1url') , axios.get('서버2url')])
                       .then((변수)=>{})  -> 성공했을 때
                       .catch(()=>{})     -> 실패했을 때
              */
            }}>서버에서 데이터 가져오기</Button>



          </>
        }/>

        <Route path='/detail/:id' element={
          <Context1.Provider value={{stock, clothes}}>
            <Detail clothes={clothes} />
          </Context1.Provider>
        }/>

        <Route path='/cart' element={<div>장바구니</div>}/>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/> {/* 404페이지 */}

        <Route path='/about' element={ <About /> }>
          <Route path='member' element={<div>직원들</div>}/>
          <Route path='location' element={<div>찾아오는길</div>}/>
        </Route>

      </Routes>
    </div>
  );
}

function About() {
  return(
    <>
      <h4>회사정보들</h4>
      <Outlet></Outlet>
    </>
  )
}

function PListImg(props) {
  return (
    <>
      <Col md={4}>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png`} width="80%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}

export default App;