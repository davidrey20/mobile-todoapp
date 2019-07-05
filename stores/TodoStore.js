import React from "react";
import { Text } from "react-native";

import { action, observable } from "mobx";

class TodoStore {
  todoKey = 0;
  @observable todoItem = "";
  formattedList = [];
  @observable todoList = [];
  @action addTodo = () => {
    if (this.todoItem != "") {
      this.formattedList.push({
        key: (this.todoKey + 1).toString(),
        value: this.todoItem
      });
      this.todoKey = this.todoKey + 1;
      this.todoList = this.formattedList;
      this.todoItem = "";
      //console.log(this.todoItem);
    }
  };
  @action deleteTodo = todoDelete => {
    let filteredTodos = this.todoList.filter(todo => {
      return todo.key != todoDelete;
    });
    this.todoList = filteredTodos;
    //console.log(filteredTodos);
  };
}

const todoStore = new TodoStore();

export default todoStore;
