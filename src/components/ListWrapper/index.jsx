import React from "react";

import List from "../List";
import BaggageIcon from "../Icons/BaggageIcon";
import CarIcon from "../Icons/CarIcon";
import TransferredIcon from "../Icons/TransferredIcon";
import ArrowIcon from "../Icons/ArrowIcon";

import "./listWrapper.css";

const takeStage = [
  {
    id: 0,
    title: "Lamp",
    stage: "take",
  },
  {
    id: 1,
    title: "Table",
    stage: "take",
  },
];

const inCarStage = [
  {
    id: 0,
    title: "Sofa",
    stage: "in car",
  },
];

const transferredStage = [
  {
    id: 0,
    title: "Picture",
    stage: "transferred",
  },
  {
    id: 1,
    title: "Chair",
    stage: "transferred",
  },
];

const ListWrapper = () => {
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
