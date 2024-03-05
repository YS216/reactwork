import './App.css';
import {useState} from 'react';
/*
  - map을 이용한 반복문 사용하기
  - props : 부모 -> 자식에게 state를 전송
    1. <자식컴포넌트 변수이름={state이름}>
    2. 자식 컴포넌트에서 파라미터 하나 추가하여 받는다
*/

function App() {
  // let title=['이레구내식당','영남집','얌샘김밥'];
  let [title, setTitle] = useState(['이레구내식당','영남집','얌샘김밥']);
  let [modal, setModal] = useState(false);

  // 배열로 만들어 줌
  let [like, setLike] = useState([0,0,0]);

  // 모달에 클릭한 제목이 들어가게하기위한 state
  let [modalTitle, setModalTitle] = useState(0);  // 0,1,2 중에 하나가 들어가도록 해줌

  // input을 저장할 state
  let [inputValue, setInputValue] = useState('');

  // map() 함수
 /*
  let arr = [3,6,8];
  arr.map(() => {
    console.log(1);
  });

  [3,6,8].map((a)=>{
    console.log(a);
  });

  let b = 3;
  let newArr = [2,7,9,8].map(()=>{
    return '172638';
  })
  console.log(newArr);

  let newArr2 = [2,7,9].map((b)=>{
    return b*2;
  })
  console.log(newArr2);
 */
  return (
    <div className="App">
      <h2 className="title1">맛집 추천 Blog</h2>

      let [title, setTitle] = useState(['이레구내식당','영남집','얌샘김밥']);

      {/* <button onClick={()=>{setTitle(['이향','영남집','얌샘김밥'])}}>글수정</button> */}

      {/* 복사하여 사용 */}
      <button onClick={()=>{
        let copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy)
      }}>글수정</button>
      {/* ...은 spread operator 문법
        array나 object의 자료형의 왼쪽에 붙일 수 있다
        의미 : 괄호를 벗겨서 새로운 array나 object를 만들어 반환
      */}

         let [title, setTitle] = useState(['이레구내식당','영남집','얌샘김밥']);
      {
        title.map((a, i)=>{
          return (
            <div className="list" key={i}>
              {/* <h4 onClick={()=>{setModal(!modal)}}>{title[i]}</h4> */}
              <h4 onClick={()=>{setModal(!modal); setModalTitle(i)}}>{a}</h4>                                       
              <p>2월 28일 <span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i]+1;
                setLike(copy) 
              }} className="span-left">🥇</span>{like[i]}</p>  

              {/* 삭제버튼 만들어 클릭하면 삭제하기 */}
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                setTitle(copy)
              }}>삭 제</button>                                      
            </div>
          )
        })
      }

      <input onChange={(e) => {setInputValue(e.target.value)}}/>
      <button onClick={()=>{
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy)
      }}>글추가</button>

      {/* 동적 UI를 만드는 방법(모달창 만들기)
        - 유저가 조작시 형태가 바뀌는 모달창, 탭, 서브메뉴, 툴팁, 경고문 등

        1. html, css로 미리 디자인
        2. UI의 현재 상태를 state로 저장
        3. state에 따라 ui가 어떻게 보일지 조건문등으로 작성
      */}

      {
        // modal ? <Modal color="pink" title={title}/> : null
        modal ? <Modal modalTitle={modalTitle} title={title} /> : null                      
      }
    </div>
  );
}

function Modal(props){
  return(
    // <div className='modal' style={{backgroundColor : props.color}}>
    <div className='modal'>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{ 
        let copy = [...props.title]
        copy[0] = '김밥천국';
        props.setTitle(copy)
        }}>첫번째 제목 수정</button>
    </div>
  )
}

/* 
const Modal2 = () => {
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// map대신 for문으로 한다면
function App() {
  let arr = [];
  for(let i=0; i<3; i++) {
    arr.push(<div>안녕</div>)
  }
  return (
    <div>
      {arr}
    </div>
  )
}
*/

export default App;