const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
eventListeners();

// Tüm Eventleri Cağırma
function eventListeners(){
    form.addEventListener("submit",addTodo)
    document.addEventListener("DOMContentLoaded",loadAllTodos);
    secondCardBody.addEventListener("click",deleteTodo);
    clearButton.addEventListener("click",clearAllTodos);
}

// Todo Ekleme 
function addTodo(e){
    const newTodo = todoInput.value.trim();
    
    if (newTodo === "" || newTodo.indexOf() === -1 ) {
        UI.showAlert("Lütfen bir todo girini...","danger");
    }
    else {
        UI.addTodoToUI(newTodo); // Arayüze Todo ekleme
        Storage.addTodoToStorage(newTodo);// Storage'a Todo ekleme
    }

    UI.clearInputs(todoInput);

    e.preventDefault();

}

// Sayfa Yüklendiğinde Todo'ları getirme
function loadAllTodos(){
    let todos = Storage.getTodosFromStorage();

    todos.forEach(function (todo) {
        UI.addTodoToUI(todo);

    });


}

// Todo'ları Sotragedan ve UIdan silme
function deleteTodo(e) {

    if (e.target.className === "fa fa-remove") {
        UI.deleteTodosFromUI(e.target);
        Storage.deleteTodosFromStorage(e.target.parentElement.parentElement.textContent);
        UI.showAlert("Todo silme işlemi başarılı", "success")
    }
}

// Tüm Todo'ları Sotragedan ve UIdan silme
function clearAllTodos(){
    if (confirm("Emin misiniz ?")) {
        UI.clearAllTodosFromUI();
        Storage.clearAllTodosFromStorage();
    }
}

