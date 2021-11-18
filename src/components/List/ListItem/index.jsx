import React from "react";
import classNames from "classnames";

import EditIcon from "../../Icons/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon";
import NextArrowIcon from "../../Icons/NextArrowIcon";

import "./listItem.css";

const ListItem = ({ todo, stage }) => {
  return (
    <li
      className={classNames("listItem", {
        listItem_inCar: stage === "in car",
        listItem_transferred: stage === "transferred",
      })}
    >
      {stage !== "take" && (
        <span className="listItem__icon listItem__icon_revers">
          <NextArrowIcon width="15" height="15" fill="#fff" />
        </span>
      )}

      <p
        className={classNames("listItem__text", {
          listItem__text_completed: todo.completed,
        })}
      >
        {todo.title}
      </p>

      <div className="listItem__iconWrapper">
        {stage === "take" && (
          <>
            <span className="listItem__icon">
              <EditIcon fill="#fff" width={24} height={24} />
            </span>
            <span className="listItem__icon">
              <DeleteIcon fill="#fff" />
            </span>
          </>
        )}

        {stage !== "transferred" && (
          <span className="listItem__icon">
            <NextArrowIcon width="15" height="15" fill="#fff" />
          </span>
        )}
      </div>
    </li>
  );
};

export default ListItem;
