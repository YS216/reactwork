import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';
/*
  전환 애니메이션
  1) css에 애니메이션 동작 전 스타일(className)
  2) css에 애니메이션 동작 후 스타일(className)
  3) transtion 속성 추가
  4) 원하는 태그에 속성 className 넣었다 뺏다
*/
function Detail(props) {

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

      <TabContent tab={tab}/>
    </div>
  )
}

function TabContent({tab}) {
  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{setFade('end')}, 200)
    return()=>{
      setFade('')
    }
  },[tab])

  return ( 
    <div className={`start ${fade}`}>
      { [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][tab] } 
    </div>
  )
}
export default Detail;