import React from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../firebase";
import { todoSelector } from "../../store/reducers/todoReducer";
import { todoLoading, todoFetch } from "../../store/reducers/todoReducer/actions";

import List from "../List";
import BaggageIcon from "../Icons/BaggageIcon";

import "./listWrapper.css";
import CarIcon from "../Icons/CarIcon";
import TransferredIcon from "../Icons/TransferredIcon";
import ArrowIcon from "../Icons/ArrowIcon";

const ListWrapper = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(todoSelector);

  const takeStage = todoList.filter((todo) => todo.stage === "take");
  const inCarStage = todoList.filter((todo) => todo.stage === "in car");
  const transferredStage = todoList.filter((todo) => todo.stage === "transferred");

  React.useEffect(() => {
    const q = query(collection(db, "todoList"), orderBy("createdAt", "desc"));

    dispatch(todoLoading);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todoArr = [];
      querySnapshot.forEach((doc) => todoArr.push({ ...doc.data(), id: doc.id }));

      dispatch(todoFetch(todoArr));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="listWrapper">
      <List title="Take" stage="take" listItems={takeStage} icon={<BaggageIcon />} />
      <ArrowIcon width="70" height="70" />
      <List title="In car" stage="in car" listItems={inCarStage} icon={<CarIcon />} />
      <ArrowIcon width="70" height="70" />
      <List
        title="Transferred"
        stage="transferred"
        listItems={transferredStage}
        icon={<TransferredIcon />}
      />
    </div>
  );
};

export default ListWrapper;
