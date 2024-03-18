import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({data}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortData = () => {
    return data.toSorted((a,b) => {
      if(sortType === "oldest") {
        return a.createDate - b.createDate;
      } else {
        return b.createDate - a.createDate;
      }
    })
  }

  const sortedDate = getSortData();

  return(
    <div className='DiaryList'>
      <div className='menubar'>
        <select value={sortType} onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button onClick={()=>nav('/new')} text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div>
        {sortedDate.map((item)=> <DiaryItem {... item}/>)}
      </div>
    </div>
  )
}

export default DiaryList;