import './Editor.css';
import EmotionItem from "./EmotionItem";
import Button from './Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../util/constants';
import { getStringDate } from '../util/get-stringed-date';

const Editor = ({onSubmit, initData}) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId : 1,
    content : ""
  });

  useEffect(()=> {
    if(initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate))
      })
    }
  }, [initData])

  // input의 값이 바뀔때마다 setInput을 호출
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if(name === 'createDate') {
      value = new Date(value);  // string을 Date의 형태로 변경
    }

    setInput({
      ...input, [name]:value
    });
  };

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h3>날짜 선택</h3>
        <input 
          name="createDate" 
          type="date" 
          value={getStringDate(input.createDate)}
          onChange={onChangeInput}
        />
      </section>
      <section className='emotion_section'>
        <h3>오늘의 감정</h3>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item)=>(
            <EmotionItem
              onClick={()=>{
                onChangeInput({
                  target:{
                    name:"emotionId",
                    value:item.emotionId
                  }
                })
              }}
              {...item} 
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className='content_section'>
          <h3>오늘의 일기</h3>
          <textarea 
            placeholder='오늘은 어땠나요?'
            name='content'
            value={input.content}
            onChange={onChangeInput}
          />  
      </section>
      <section className='btn_section'>
          <Button text={"취소하기"} onClick={()=>nav(-1)}/>
          <Button text={"작성완료"} type={"POSITIVE"} onClick={()=>{onSubmit(input)}}/>  
      </section>
    </div>
  )
}

export default Editor;