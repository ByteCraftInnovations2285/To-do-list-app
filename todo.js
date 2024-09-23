document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector("button");
    const inputField = document.querySelector("input[type='text']");
    const container = document.querySelector(".container");
    const taskList = document.createElement("ul");

    taskList.style.listStyle = "none";
    taskList.style.padding = "0";
    container.appendChild(taskList);

    addButton.addEventListener("click", function () {
        const taskValue = inputField.value.trim();
        if (taskValue !== "") {
            const taskItem = document.createElement("li");
            taskItem.style.display = "flex";
            taskItem.style.justifyContent = "space-between";
            taskItem.style.alignItems = "center";
            taskItem.style.textAlign = "left";
            taskItem.textContent = taskValue;
            taskItem.style.padding = "10px";
            taskItem.style.margin = "5px";
            taskItem.style.backgroundColor = "#ebebeb";
            taskItem.style.borderRadius = "5px";

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.padding = "7px";
            deleteButton.style.border = "none";
            deleteButton.style.backgroundColor = "#00076b";
            deleteButton.style.color = "white";
            deleteButton.style.cursor = "pointer";
            deleteButton.style.fontSize = "15px";
            deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
            inputField.value = "";
        }
    });
});
