class Storage {
    static addTodoToStorage(newTodo) {
        let todos = this.getTodosFromStorage();

        if(todos.indexOf(newTodo) === -1){
            todos.push(newTodo);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    // Storage'a Kontrolü ve Obje Oluşturma
    static getTodosFromStorage() {
        let todos;

        if (localStorage.getItem("todos") === null) {
            todos = [];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));

        }

        return todos;
    }

    // Storage'dan Todo'ları Silme
    static deleteTodosFromStorage(deleteTodo) {
        let todos = this.getTodosFromStorage();

        todos.forEach(function (todo, index) {
            if (todo === deleteTodo) {
                todos.splice(index, 1);
            }
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    static clearAllTodosFromStorage(){
        localStorage.removeItem("todos");
    }
}
