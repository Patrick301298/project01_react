import React from "react";
import { applyFilter, search } from "../../services/filter";
import FilteredList from "./FilteredList";
import Header from "./Header";
export default function TodoList(props) {
  const { list, filter, mode, query } = props.data;
  const { addNew, setSearchQuery, changeStatus } = props.actions;
  const items = search(applyFilter(list, filter), query);

  return (
    <div className="container">
      <div className="row">
        <div className="todo-list">
          <Header {...{ addNew, mode, query, setSearchQuery }} />
          <FilteredList {...{ items, changeStatus }} />
        </div>
      </div>
    </div>
  );
}
