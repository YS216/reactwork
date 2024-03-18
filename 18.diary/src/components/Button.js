import './Button.css';

/*
- text : 버튼에 들어갈 글자
- type : 3가지 타입(일반(회색버튼), 긍정버튼(연두색버튼), 부정버튼(빨간색버튼))
- onClick : 버튼이 클릭되었을 때
*/
const Button = ({text, type, onClick}) => {
  return <button className={`Button Button_${type}`} onClick={onClick}>{text}</button>
}

export default Button;