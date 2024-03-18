import './Editor.css';
import EmotionItem from "./EmotionItem";
import Button from './Button';

const emotionList = [
  {
    emotionId :1,
    emotionName:"아주좋음"
  },
  {
    emotionId :2,
    emotionName:"행복함"
  },
  {
    emotionId :3,
    emotionName:"좋음"
  },
  {
    emotionId :4,
    emotionName:"별로 안좋음"
  },
  {
    emotionId :5,
    emotionName:"피곤함"
  },
  {
    emotionId :6,
    emotionName:"울고 싶다"
  },
  {
    emotionId :7,
    emotionName:"아주 화남"
  }
]

const Editor = () => {
  const emotionId = 5;

  return (
    <div className='Editor'>
      <section className='date_section'>
        <h3>날짜 선택</h3>
        <input type="date" />
      </section>
      <section className='emotion_section'>
        <h3>오늘의 감정</h3>
        <div className='emotion_list_wrapper'>
          {emotionList.map((item)=>(
            <EmotionItem {...item} isSelected={item.emotionId === emotionId} />
          ))}
        </div>
      </section>
      <section className='content_section'>
          <h3>오늘의 일기</h3>
          <textarea placeholder='오늘은 어땠나요?'/>  
      </section>
      <section className='btn_section'>
          <Button text={"취소하기"} />
          <Button text={"작성완료"} type={"POSITIVE"} />  
      </section>
    </div>
  )
}

export default Editor;