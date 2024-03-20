import './Viewer.css';
import { getEmotionImage } from './../util/get-emotion-img';
import { emotionList } from '../util/constants';

const Viewer = ({emotionId, content}) => {
  const emotionItem =  emotionList.find((item)=>Number(item.emotionId) === Number(emotionId))

  return (
    <div className="Viewer">
      <section className="img_section">
        <h2>오늘의 감정</h2>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)}/>
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h2>오늘의 일기</h2>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
}
export default Viewer;