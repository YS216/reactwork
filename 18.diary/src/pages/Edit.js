import { useNavigate, useParams } from "react-router-dom";
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { useContext } from "react";
import { DiaryDispathContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispathContext);
  const curDiaryItem = useDiary(params.id);

  // 삭제시
  const onClickDelete = () => {
    if(window.confirm("정말 삭제할까요?")) {
      onDelete(params.id);
      nav("/", { replace:true })
    }
  }

  const onSubmit = (input) => {
    if(window.confirm("일기를 정말 수정할까요?")){
      onUpdate(
        Number(params.id),
        input.createDate.getTime(),
        input.emotionId,
        input.content
      )
      nav("/",{replace:true});
    }
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로"} onClick={()=>nav(-1)} />}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete} />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
    </div>
  )
}
export default Edit;