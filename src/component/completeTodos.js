import React from 'react';

export const completeTodos = (props) => {
    const{todos,onclickBack} = props;
    return(
        <div className='complete-area'>
      <p>完了のTODO</p>
      <ul>
      {todos.map((todo,index) => {
          return(
          <div key={todo} className='list-row'>
            <li>{todo}</li>
            <button onClick={() => onclickBack(index)}>戻す</button>
          </div>
          )

        })}
        
      </ul>
    </div>

    );
};
