import React from "react";
import { applyFilter, search } from "../../services/filter";
import FilteredList from "./FilteredList";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";
export default function TodoList(props) {
  const { list, filter, mode, query } = props.data;
  const { addNew, setSearchQuery, changeStatus, changeMode, changeFilter } =
    props.actions;
  const count = list.length;
  const items = search(applyFilter(list, filter), query);

  return (
    <div className="container">
      <div className="row">
        <div className="todo-list">
          <Header {...{ addNew, mode, query, setSearchQuery }} />
          <FilteredList {...{ items, changeStatus }} />
          <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
          <Info {...{ mode }} />
        </div>
      </div>
    </div>
  );
}
