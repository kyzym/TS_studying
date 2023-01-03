"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
