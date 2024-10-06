package com.application.todo_app.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.application.todo_app.entity.Todo;

@Repository
public class TodoRepository {

    private Integer idCounter = 0;
    private final List<Todo> todoItems = new ArrayList<>();

    public List<Todo> fetchAllTodos() {
        if (todoItems.isEmpty()) {
            Todo item1 = new Todo();
            item1.setIsDone(false);
            item1.setTask("Click to edit task name.");
            item1.setId(idCounter++);

            todoItems.add(item1);
        }
        return todoItems;
    }

    public Todo save(Todo todoItem) {
        todoItem.setId(idCounter++);
        todoItems.add(todoItem);
        return todoItem;
    }

    public void delete(Integer id) {
        boolean removed = todoItems.removeIf(todoItem -> todoItem.getId().equals(id));
        if (removed) {
            System.out.println("Todo item with ID " + id + " has been removed.");
        } else {
            System.out.println("Todo item with ID " + id + " not found.");
        }
    }
}
