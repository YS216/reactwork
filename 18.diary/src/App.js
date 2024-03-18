import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { createContext, useReducer, useRef } from 'react';

const mockData = [
  {
    id:1,
    createDate : new Date("2024-03-18").getTime(),
    emotionId : 1,
    content: "1번 일기 내용"
  },
  {
    id:2,
    createDate : new Date("2024-03-15").getTime(),
    emotionId : 2,
    content: "2번 일기 내용"
  },
  {
    id:3,
    createDate : new Date("2024-02-17").getTime(),
    emotionId : 3,
    content: "3번 일기 내용"
  },
  {
    id:4,
    createDate : new Date("2024-02-03").getTime(),
    emotionId : 4,
    content: "4번 일기 내용"
  },
  {
    id:5,
    createDate : new Date("2024-01-24").getTime(),
    emotionId : 5,
    content: "5번 일기 내용"
  }
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>item.id === action.data.id ? action.data : item);
    case "DELETE":
      return state.filter((item)=>item.id != action.id);
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispathContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 diary추가
  const onCreate =(createDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        createDate,
        emotionId,
        content
      }
    })
  }

  // diary 수정
  const onUpdate =(id, createDate, emotionId, content) => {
    dispatch({
      type:"UPDATE",
      data:{
        id,
        createDate,
        emotionId,
        content
      }
    })
  }

  // diary 삭제
  const onDelete =(id) => {
    dispatch({
      type:"DELETE",
      id
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispathContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispathContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;