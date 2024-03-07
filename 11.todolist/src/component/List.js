import { useState } from 'react';
import './List.css';
import TodoItem from "./TodoItem";

const List = ({todos, onUpdate}) => {
  const [search, setSearch] = useState("")

  const getFilteredData = () => {
    if(search == "") {
      return todos;
    }
    return todos.filter( todo =>
      todo.content.toLowerCase().includes(search.toLowerCase()) //includes()함수 : todo.content과 search가 같으면 true반환 다르면 false반환
    )
  }
  
  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List ☕</h4>
      <input placeholder="검색어를 입력하세요" onChange={(e)=>{setSearch(e.target.value)}}/>
      <div className='todos_wrapper'>
        {
          filteredTodos.map( todo =>
            <TodoItem {...todo} onUpdate={onUpdate} />
          )
        }
      </div>
    </div>
  )
}
export default List;