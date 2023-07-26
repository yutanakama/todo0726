import React from 'react';

export const incompleteTodos = (props) =>{
    const {todos,onclickComplete,onClickDelete} = props;
    return(
    <div className='incomplete-area'>
      <p>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return(
          <div key={todo} className='list-row'>
            <li>{todo}</li>
            <button onClick={() => onclickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
          )

        })}
      </ul>
    </div>

    );
    

};