import './App.css';
import {useState} from 'react';

function App() {
  // let title=['이레구내식당','영남집','얌샘김밥'];
  let [title, setTitle] = useState('영남집');
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <h2 className="title1">맛집 추천 Blog</h2>
      <button>글수정</button>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 28일 <span onClick={() => {setLike(like+1)}} className="span-left">🥇</span>{like}</p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 28일 <span className="span-left">🥇</span></p>
      </div>
      <div className="list">
        <h4>{title}</h4>
        <p>2월 28일 <span className="span-left">🥇</span></p>
      </div>


      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  );
}

function List() {
  return (
    <div className="list">
      <h4>이레구내식당</h4>
      <p>2월 28일 <span className="span-left">🥇</span></p>
    </div>
  )
}
export default App;