import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
  stageTodoRequest,
  deleteTodoRequest,
} from "../../../../store/reducers/todoReducer/actions";
import { useEdit } from "./useEdit";

export const useTodo = (todo) => {
  const dispatch = useDispatch();
  const { editable, title, setTitle, toggleEdit } = useEdit(todo);

  const changeStageHandler = useCallback(
    async (stage) => {
      dispatch(stageTodoRequest({ todo, stage }));
    },
    [todo, dispatch]
  );

  const updateTodoHandler = useCallback(
    (ev) => {
      ev.preventDefault();
      toggleEdit(ev);
    },
    [toggleEdit]
  );

  const deleteTodoHandler = useCallback(
    async (ev) => {
      ev.stopPropagation();
      dispatch(deleteTodoRequest(todo.id));
    },
    [dispatch, todo]
  );

  return {
    editable,
    title,
    setTitle,
    toggleEdit: toggleEdit,
    changeStage: changeStageHandler,
    updateTodo: updateTodoHandler,
    deleteTodo: deleteTodoHandler,
  };
};
