import classNames from 'classnames';
import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  checkedTodo: Todo | null,
  onCheckedTodo: (todo: Todo) => void,
};

export const TodoList: React.FC<Props> = ({
  todos,
  checkedTodo,
  onCheckedTodo,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {
          todos.map(todo => {
            const { id, title, completed } = todo;

            return (
              <tr
                key={id}
                data-cy="todo"
                className={
                  classNames({
                    'has-background-info-light': checkedTodo?.id === id,
                  })
                }
              >
                <td className="is-vcentered">{id}</td>
                <td className="is-vcentered">
                  {completed && (
                    <span className="icon" data-cy="iconCompleted">
                      <i className="fas fa-check" />
                    </span>
                  )}
                </td>
                <td className="is-vcentered is-expanded">
                  <p className={classNames({
                    'has-text-success': completed,
                    'has-text-danger': !completed,
                  })}
                  >
                    {title}
                  </p>
                </td>
                <td className="has-text-right is-vcentered">
                  <button
                    data-cy="selectButton"
                    className="button"
                    type="button"
                    onClick={() => onCheckedTodo({ ...todo })}
                  >
                    <span className="icon">
                      {
                        checkedTodo?.id === id
                          ? <i className="fa-eye-slash" />
                          : <i className="far fa-eye" />
                      }
                    </span>
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};
