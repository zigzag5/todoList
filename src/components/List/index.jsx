import React, { Component } from "react";
import Item from "../Item";
import PropsTypes from "prop-types";
import "./index.css";

export default class List extends Component {
  static propsTypes = {
    todos: PropsTypes.array.isRequired,
    updateTodo: PropsTypes.func.isRequired,
    deleteTodo: PropsTypes.func.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
