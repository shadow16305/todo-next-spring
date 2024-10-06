"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { TodoItem } from "./todo-item";
import { TodoItemType } from "@/types";
import { Button } from "./ui/button";

export const TodoList = () => {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([]);

  useEffect(() => {
    if (todoItems.length === 0) {
      fetch("http://localhost:8080/api/todoItems")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodoItems(data);
        })
        .catch((error) => {
          console.error("Error fetching items: ", error);
        });
    }
  }, [todoItems]);

  const addNewItem = () => {
    fetch("http://localhost:8080/api/todoItems", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoItems([...todoItems, data]);
      });
  };

  const handleDeleteTodoItem = (item: TodoItemType) => {
    fetch(`http://localhost:8080/api/todoItems/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((updatedTodos) => {
        setTodoItems(updatedTodos);
      })
      .catch((error) => {
        console.error("Error deleting todo item:", error);
      });
  };

  const handleUpdateTask = (newTaskValue: string, itemId: number) => {
    setTodoItems((prevItems) => prevItems.map((todo) => (todo.id === itemId ? { ...todo, task: newTaskValue } : todo)));

    fetch(`http://localhost:8080/api/todoItems/${itemId}`, {
      headers: {
        "content-type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({ task: newTaskValue }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error updating todo item:", error);
      });
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Button variant="default" onClick={addNewItem}>
        Add+
      </Button>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          task={item.task}
          isDone={item.isDone}
          onDelete={() => handleDeleteTodoItem(item)}
          setValue={handleUpdateTask}
        />
      ))}
    </div>
  );
};
