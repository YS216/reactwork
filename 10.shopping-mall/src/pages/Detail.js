import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

/*
- Lifecycle(생명주기)
  class Detail extends React.Component {
    componentDidMount() {
      // Detail 컴포넌트가 로드 되고나서 실행할 코드
    }
    componentDidUpdate() {
      // Detail 컴포넌트가 업데이트 되고나서 실행할 코드
    }
    componentWillUnmount() {
      // Detail 컴포넌트가 삭제 되기 전에 실행할 코드
    }
  }

  컴포넌트는
  1. 생성이 될 수도 있고(mount)
  2. 재렌더링이 될 수도 있고(update)
  3. 삭제가 될 수도 있다(unmout)
*/


function Detail(props) {
  useEffect(() => {
    // mount, update 될 때 실행
    // Lifecycle Hook이라함
    // console.log('로드되고 실행');
  })
  console.log('로드되고 실행');

  let {id} = useParams();
  let findId = props.clothes.find(function(x){
    return x.id == id
  })

  return(
    <>
      <Container>
        <Row>
          <Col md={6}>
            <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} width="400px"/>
          </Col>
          <Col md={6}>
            <h4>{findId.title}</h4>
            <p>{findId.content}</p>
            <p>{findId.price}</p>
            <Button variant="secondary">주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Detail;