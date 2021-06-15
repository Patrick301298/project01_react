import React from "react";
import { MSG_NO_ITEMS } from "../../assets/text/en_US";
import TodoItem from "./TodoItem";

export default function FilteredList(props) {
  const { items, changStatus } = props;
  if (items.length === 0) {
    return <p className="alert alert-info">{MSG_NO_ITEMS}</p>;
  }
  return (
    <ul className="list-styled">
      {items.map((item) => (
        <TodoItem key={item.id} data={item} changStatus={changStatus} />
      ))}
    </ul>
  );
}
