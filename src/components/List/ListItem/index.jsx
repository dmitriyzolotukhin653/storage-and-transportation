import React from "react";
import classNames from "classnames";

import { useTodo } from "./utils/useTodo";

import Input from "../../Input";
import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import NextArrowIcon from "../../Icons/NextArrowIcon";

import "./listItem.css";

const ListItem = ({ todo, stage }) => {
  const [currentStage, setCurrentStage] = React.useState(stage);
  const [currentStageRev, setCurrentStageRev] = React.useState(stage);

  const { editable, title, setTitle, toggleEdit, changeStage, updateTodo, deleteTodo } =
    useTodo(todo);

  React.useEffect(() => {
    switch (stage) {
      case "take":
      default: {
        setCurrentStage("in car");
        break;
      }

      case "in car": {
        setCurrentStage("transferred");
        setCurrentStageRev("take");
        break;
      }

      case "transferred": {
        setCurrentStageRev("in car");
        break;
      }
    }
  }, [stage]);

  return (
    <li
      data-testid="item"
      className={classNames("listItem", {
        listItem_inCar: stage === "in car",
        listItem_transferred: stage === "transferred",
      })}
    >
      {stage !== "take" && (
        <span
          className="listItem__icon listItem__icon_revers"
          onClick={() => changeStage(currentStageRev)}
        >
          <NextArrowIcon width="15" height="15" fill="#fff" />
        </span>
      )}

      {editable ? (
        <form onSubmit={updateTodo}>
          <Input edit={editable} value={title} onChange={(ev) => setTitle(ev.target.value)} />
        </form>
      ) : (
        <p
          className={classNames("listItem__text", {
            listItem__text_completed: todo.completed,
          })}
        >
          {todo.title}
        </p>
      )}

      <div className="listItem__iconWrapper">
        {stage === "take" && (
          <>
            <span className="listItem__icon" onClick={toggleEdit}>
              <EditIcon fill="#fff" width={24} height={24} />
            </span>
            <span className="listItem__icon" onClick={deleteTodo}>
              <DeleteIcon fill="#fff" />
            </span>
          </>
        )}

        {stage !== "transferred" && (
          <span className="listItem__icon" onClick={() => changeStage(currentStage)}>
            <NextArrowIcon width="15" height="15" fill="#fff" />
          </span>
        )}
      </div>
    </li>
  );
};

export default ListItem;
