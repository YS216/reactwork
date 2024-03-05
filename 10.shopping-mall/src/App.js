import './App.css';
import {Navbar,Container,Nav, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// import clothes1 from './img/clothes1.png';
// import Num from './data/ProductList';
/*
 - export {num1, num2} 여러개 했을 때
   import할 때  export의 이름이 같아야 함
   ex) import {num1, num2}
*/
// import {num1, num2} from './data/ProductList';
import pList from './data/ProductList';
import Detail from './pages/Detail';

/*
  - 페이지 전환하기
    * 기존의 페이지 전환
      1) detail.html파일 만들고
      2) /detail로 접속하면 detail.html파일 보여줌

    * react에서 페이지 전환
      1) 컴포넌트로 상세페이지 만들기
      2) /detail로 접속하면 기존의 index.html파일을 모두 비운 후 1번의 컴포넌트를 보여줌(싱글페이지)

  - router-dom : 페이지 교체시켜주는 api
    1) 설치 : npm i react-router-dom
    2) index.js에서 <BrowserRouter></BrowserRouter>로 감싸줌
    3) App.js에서 import
*/
function App() {
  let [clothes] = useState(pList);
  console.log(clothes);

  /*
  - use 로 시작하는 함수를 Hook이라 함.
    Hook : 함수형 컴포넌트에서 클래스형 컴퍼넌트의 기능
           (state(상태값), life cycle)을 사용할 수 있도록 해주는 함수
  */

  let navigate = useNavigate();  // 페이지의 이동을 도와주는 함수

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로</Nav.Link>
            {/* 
            <Link to="/">Home</Link>&emsp;
            <Link to="/detail">상세페이지</Link>
             */}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* <Route path='url' element={실행하고자하는 값}/> */}
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
          </>
        }/>

        {/* <Route path='/detail' element={<Detail clothes={clothes} />}/> 

        <Route path='/detail/0' element={<Detail clothes={clothes[0]} />}/>
        <Route path='/detail/1' element={<Detail clothes={clothes[1]} />}/>
        <Route path='/detail/2' element={<Detail clothes={clothes[2]} />}/>
        */}

        <Route path='/detail/:id' element={<Detail clothes={clothes} />}/>

        {/* 파라미터(:key)가 여러개 일때( 콜론(:)이 없는것은 문자)
        <Route path='/detail/:id/:memKey' element={<Detail clothes={clothes} />}/>
        <Route path='/detail/:id/name/:memName' element={<Detail clothes={clothes} />}/>
        */}

        <Route path='/cart' element={<div>장바구니</div>}/>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/> {/* 404페이지 */}

        {/* 
        <Route path='/about/member' element={<div>직원들</div>}/>
        <Route path='/about/location' element={<div>찾아오는길</div>}/> 
        */}

        <Route path='/about' element={ <About /> }>
          <Route path='member' element={<div>직원들</div>}/>
          <Route path='location' element={<div>찾아오는길</div>}/>
        </Route>

      </Routes>

      {/*
      <div className='main-bg' />

      <Container>
        <Row>
           
          <Col md={4}>
            <img src={clothes1} width="80%"/>
            <h4>{clothes[0].title}</h4>
            <p>{clothes[0].price}</p>
          </Col>
          <Col md={4}>
            <img src="/img/clothes2.png" width="80%"/>
            <h4>{clothes[1].title}</h4>
            <p>{clothes[1].price}</p>
          </Col>
          <Col md={4}>
            <img src={`${process.env.PUBLIC_URL}/img/clothes3.png`} width="80%"/>
            {/* <img src={process.env.PUBLIC_URL + "/img/clothes3.png"} width="80%"/> 
            <h4>상품명</h4>
            <p>가격</p>
          </Col>

          <PListImg clothes={clothes[0]} i={1}/>
          <PListImg clothes={clothes[1]} i={2}/>
          <PListImg clothes={clothes[2]} i={3}/> 
          
          {
            clothes.map((list, i)=>{
              return(
                <PListImg clothes={list} i={i+1}/>
                // <PListImg clothes={clothes[0]} i={i+1}/>
              )
            })
          }
        </Row>
      </Container>
      */}
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