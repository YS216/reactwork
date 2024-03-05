import { useEffect, useState } from 'react';
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
  1) 생성이 될 수도 있고(mount)
  2) 재렌더링이 될 수도 있고(update)
  3) 삭제가 될 수도 있다(unmout)

- useEffect 안에 적은 코드는 html렌더링 이후에 동작한다
    * useEffect 밖에 적은 코드는 위에서부터 차례대로 실행(렌더링이 나중에 됨)
  # html 렌더링이 빠른 사이트를 원하면 시간이 걸리는 코드는 useEffect() 안에

  # useEffect안에 적는 코드들
  1) 어려운 연산(시간이 걸리는 연산)
  2) 서버에서 데이터를 가져오는 작업
  3) 타이머 등

- useEffect(()=>{실행할 코드}) : mount,update가 될 때마다 실행
- useEffect(()=>{실행할 코드}, []) : mount되었을 때 1번만 실행
- useEffect(()=>{실행할 코드}, [변수]) : 변수가 변할 때만 실행(update시 실행 안됨)
- useEffect(()=>{
    실행할 코드; 
    return()=>{
      실행문보다 먼저 실행할 구문
    } 
  }, [변수])
*/

function Detail(props) {
  // let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState('');

  useEffect(()=>{
    if(isNaN(num) == true) {
      alert('숫자만 넣으셈')
    }
  },[num])
/* 
  useEffect(() => {
    let timer = setTimeout(()=>{setAlert(false)}, 2000);
    return () => {    // 실행문보다 먼저 실행
      clearTimeout(timer);
    }
  },[count])
 */
  let {id} = useParams();
  let findId = props.clothes.find(function(x){
    return x.id == id
  })

  return(
    <>
      <input onChange={(e)=>{ setNum(e.target.value)}} />

      {
        alert == true ? <div>2초 이내에 구매시 10% 할인</div> : null
      }
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
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