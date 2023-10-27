document.addEventListener("DOMContentLoaded", function () {
    const inputTask = document.getElementById("task");
    const addButton = document.getElementById("add-button");
    const taskList = document.getElementById("task-list");

    addButton.addEventListener("click", function () {
        const taskText = inputTask.value.trim();

        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);

            inputTask.value = "";

            li.querySelector(".complete-button").addEventListener("click", function () {
                li.querySelector("span").classList.toggle("complete");
            });

            li.querySelector(".delete-button").addEventListener("click", function () {
                taskList.removeChild(li);
            });
        }
    });

    inputTask.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
