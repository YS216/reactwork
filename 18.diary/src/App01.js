import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { getEmotionImage } from './util/get-emotion-img';

/*
  1. "/" : 모든 diary를 보여는 주는 페이지
  2. "/new" : diary 쓰기
  3. "/diary" : diary 상세보기
  4. "/edit" : 수정페이지

  npm i react-router-dom
*/
function App() {
  const nav = useNavigate();

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
        <img src={getEmotionImage(6)} />
        <img src={getEmotionImage(7)} />
      </div>
      <button onClick={()=>{nav("/new")}}>New 페이지로</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;