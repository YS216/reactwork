import { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../App.css';
import {addItem} from './../store';
import { useDispatch } from 'react-redux';

function Detail(props) {

  let {id} = useParams();
  let findId = props.clothes.find(function(x){
    return x.id == id
  })
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState('')

  let dispatch = useDispatch()

  useEffect(()=> {
    // console.log("출력 : " + findId.id)

    let w = localStorage.getItem('watched')
    w = JSON.parse(w)
    w.push(findId.id)

    w = new Set(w)
    w = Array.from(w)

    localStorage.setItem('watched', JSON.stringify(w))
  },[])

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
            <Button variant="secondary" onClick={()=>{
              dispatch(addItem({id:findId.id , name:findId.title , count:1}))
            }}>장바구니에 담기</Button>
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