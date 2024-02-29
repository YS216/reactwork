import './App.css';

function App() {
  const isStudent = true;
  /*
  if(isStudent) {
    return <h1>학생입니다</h1>
  } else {
    return <h1>학생이 아닙니다</h1>
  }
  */

  /*
  if(isStudent) {
    return <h1>학생입니다</h1>
  } 
  return <h1>학생이 아닙니다</h1>
  */

  // 오류 : return안에 if문 불가
  /*
  return (
    if(isStudent) {
      <h1>학생입니다</h1>
    }
    <h1>학생이 아닙니다</h1>
  )
  */

  // 삼항연산자를 많이 사용
  /*
  return isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
  */

  return (
    // 문자로 인식하여 출력
    /*
    <div>
      isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
    </div>
    */

    // 삼항연산자로 인식하게 하려면 { }안에서 해야함
    <div>
      { isStudent === true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1> }
    </div>
  );
}

export default App;