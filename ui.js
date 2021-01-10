class UI {
    static addTodoToUI(newTodo) {

        // List Item Create
        const listItem = document.createElement("li");
        listItem.className = "list-group-item d-flex justify-content-between";

        // Checkbox
        const listCheck = document.createElement("div");
        const listCheckInput = document.createElement("input");
        const listCheckLabel = document.createElement("label");

        listCheck.className = "form-check";
        listCheckInput.className = "form-check-input";
        listCheckInput.type = "checkbox";
        listCheckInput.value = "";
        listCheckInput.id = "defaultCheck1";
        listCheckLabel.className = "orm-check-label";
        listCheckLabel.for = "defaultCheck1";

        // Link Create
        const listLink = document.createElement("a");
        listLink.href = "#";
        listLink.className = "delete-item";
        listLink.innerHTML += "<i class='fa fa-remove'></i>"

        // Add to Element
        listCheck.appendChild(listCheckInput);
        listCheck.appendChild(listCheckLabel);
        listCheckLabel.appendChild(document.createTextNode(newTodo));
        listItem.appendChild(listCheck);
        listItem.appendChild(listLink);
        todoList.appendChild(listItem);


        console.log(listItem);
    }

    // Input Value Clear
    static clearInputs(element1) {
        element1.value = "";
    }

    // Alert Message
    static showAlert(message, type) {
        const firstCardBody = document.querySelectorAll(".card-body")[0];

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;

        firstCardBody.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 1000);
    }


    // Arayüzden Todo'ları SİLME
    static deleteTodosFromUI(element) {
        element.parentElement.parentElement.remove();
    }


    // Tüm Todo'ları silme
    static clearAllTodosFromUI() {
        const todoList = document.querySelector(".list-group");
        // todoList.innerHTML = "";

        while (todoList.firstElementChild != null) {
            todoList.firstElementChild.remove();
        }
    
    }

}