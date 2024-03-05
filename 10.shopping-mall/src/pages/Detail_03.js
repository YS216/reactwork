import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
/*
탭 만들기
*/

function Detail(props) {

  let {id} = useParams();
  let findId = props.clothes.find(function(x){
    return x.id == id
  })
  let [tab, setTab] = useState(0);

  return(
    <>
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

      {/* {
        tab == 0 ? <div>내용0</div> : ( tab == 1 ? <div>내용1</div> : tab == 2 ? <div>내용2</div> : null  )
      } */}

      <TabContent tab={tab}/>
    </>
  )
}
/* 
function TabContent(props) {
  if (props.tab==0) {
    return <div>내용0</div>
  } else if(props.tab==1) {
    return <div>내용1</div>
  } else  {
    return <div>내용2</div>
  }
}
*/

// props가 싫으면 매개변수를 받을 때 변수를 직접 입력해 주면 됨
/* 
function TabContent({tab}) {
  if (tab==0) {
    return <div>내용0</div>
  } else if(tab==1) {
    return <div>내용1</div>
  } else  {
    return <div>내용2</div>
  }
}
 */

function TabContent({tab}) {
  return [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab]
}

export default Detail;