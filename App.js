import React from "react";

import todoStore from "./stores/TodoStore";
import { Provider } from "mobx-react";

import TodoList from "./src/TodoList";

import { Font } from "expo";
import { Ionicons } from "@expo/vector-icons";

class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
  }
  render() {
    return (
      <Provider todoStore={todoStore}>
        <TodoList />
      </Provider>
    );
  }
}

export default App;
