import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Title from "../Title";
import ListItem from "./ListItem";

import "./list.css";

const List = ({ title = "", icon = null, listItems = [], stage = "take" }) => {
  return (
    <div className="wrapper">
      <Title type="h2" icon={icon} title={title} />

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
