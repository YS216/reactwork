import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';
import { Context1 } from './../App';

/*
  Single page Application의 단점
  1) 컴포넌트간의 state공유 어려움
     특히, 형제간의 컴포넌트의 공유

  공동으로 사용할 수 있는 방법
  1) Context Api 문법
  2) Redux 외부라이브러리 사용

*/
function Detail(props) {

  let a = useContext(Context1)
  console.log(a);

  let {id} = useParams();
  let findId = props.clothes.find(function(x){
    return x.id == id
  })
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade2('end')}, 200)
    return()=>{
      setFade2('')
    }
  },[])

  return(
    <div className={`start ${fade2}`}>
      <Container>
        <Row>
          <Col md={6}>
            <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} width="300px"/>
          </Col>
          <Col md={6}>
            <h4>{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <Button variant="secondary">주문하기</Button>
          </Col>
        </Row>
      </Container>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{setTab(0)}}>탭 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{setTab(1)}}>탭 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={()=>{setTab(2)}}>탭 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} clothes={props.clothes[0]}/>
    </div>
  )
}

function TabContent({tab, clothes}) {
  
  let [fade, setFade] = useState('')
  let {stock} = useContext(Context1)

  useEffect(()=>{
    setTimeout(()=>{setFade('end')}, 200)
    return()=>{
      setFade('')
    }
  },[tab])

  return ( 
    <div className={`start ${fade}`}>
      { [<div>{stock}</div>,<div>내용1</div>,<div>내용2</div>][tab] } 
    </div>
  )
}
export default Detail;