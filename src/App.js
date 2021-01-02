import React, { useState, useRef, useEffect } from "react";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  List,
} from "@material-ui/core";

function App() {
  const [todoes, setTodoes] = useState(() => {
    return [];
  });
  const [todo, setTodo] = useState(() => {
    return "";
  });
  useEffect(() => {
    db.collection("todoes")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setTodoes(
          snapshot.docs.map((doc) => {
            console.log(doc.data());
            return doc.data().todo;
          })
        );
      });
  }, [todo]);
  const inputRef = useRef();
  return (
    <div className="App">
      <h1>Hello world :rocket</h1>
      <form>
        <FormControl>
          <InputLabel>Type a Todo </InputLabel>
          <Input
            type="text"
            value={todo}
            onChange={(e) => {
              console.log(e.target.value);
              setTodo(e.target.value);
            }}
          />
        </FormControl>

        <Button
          type="submit"
          disabled={!todo}
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            db.collection("todoes").add({
              todo,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setTodo("");
          }}
        >
          Add a todo
        </Button>
      </form>

      <List>
        {todoes.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </List>
    </div>
  );
}

const helloWorld = "hello world";
export default App;
