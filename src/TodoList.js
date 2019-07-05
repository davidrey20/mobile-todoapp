import React, { Component } from "react";
import {
  Container,
  Header,
  Body,
  Title,
  Content,
  Button,
  Input,
  Text,
  Item,
  SwipeRow,
  ListItem,
  Icon,
  View
} from "native-base";
import { FlatList } from "react-native";
import { inject, observer } from "mobx-react";

@inject("todoStore")
@observer
class TodoList extends Component {
  render() {
    todoStore = this.props.todoStore;
    return (
      <Container>
        <Header>
          <Body>
            <Title>My Todo App</Title>
          </Body>
        </Header>
        <Content padder>
          <Item>
            <Input
              placeholder="Enter Todo Item"
              onChangeText={text => (todoStore.todoItem = text)}
              value={todoStore.todoItem}
            />
          </Item>
          <Button
            bordered
            primary
            style={styles.buttonStyle}
            onPress={todoStore.addTodo}
          >
            <Text>Add Todo</Text>
          </Button>
          <FlatList
            data={todoStore.todoList}
            renderItem={({ item }) => (
              <SwipeRow
                rightOpenValue={-75}
                body={
                  <View>
                    <Text style={styles.todoItemStyle}>{item.value}</Text>
                  </View>
                }
                right={
                  <Button danger onPress={() => todoStore.deleteTodo(item.key)}>
                    <Icon active name="trash" />
                  </Button>
                }
              />
            )}
          />
        </Content>
      </Container>
      // <View style={styles.viewStyle}>
      //   <Text style={styles.titleText}>My Todo App</Text>
      //   <TextInput
      //     style={styles.InputStyle}
      //     onChangeText={text => (todoStore.todoItem = text)}
      //     value={todoStore.todoItem}
      //   />
      //   <Button
      //     title="Add Todo"
      //     style={styles.Button}
      //     onPress={todoStore.addTodo}
      //   />
      //   <FlatList
      //     styles={styles.List}
      //     data={todoStore.todoList}
      //     renderItem={({ item }) => (
      //       <Text
      //         style={styles.Text}
      //         onPress={() => todoStore.deleteTodo(item.value)}
      //       >
      //         {item.value}
      //       </Text>
      //     )}
      //   />
      // </View>
    );
  }
}

const styles = {
  buttonStyle: {
    margin: 10,
    alignSelf: "center"
  },
  todoItemStyle: {
    paddingLeft: 10
  }
};

export default TodoList;
