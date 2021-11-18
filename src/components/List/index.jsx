import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { todoSelector } from "../../store/reducers/todoReducer";

import Title from "../Title";
import ListItem from "./ListItem";

import "./list.css";

const List = ({ title = "", icon = null, listItems = [], stage = "take" }) => {
  const { loading, error } = useSelector(todoSelector);

  return (
    <div className="wrapper">
      <Title type="h2" icon={icon} title={title} />

      {error && <p className="list__text">Something went wrong!</p>}
      {!loading && listItems.length === 0 && <p className="list__text">The list is empty.</p>}

      <TransitionGroup component="ul" className="list">
        {!!listItems.length &&
          listItems.map((todo) => (
            <CSSTransition key={todo.id} timeout={500} classNames="item">
              <ListItem key={todo.createdAt} stage={stage} todo={todo} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  );
};

export default List;
