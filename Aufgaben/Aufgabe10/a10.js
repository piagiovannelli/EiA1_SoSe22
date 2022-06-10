var L10;
(function (L10) {
    // Variable für die Aufzählung der ToDos
    let counter = 0;
    // Variable für den Input
    let input = document.querySelector("#textfield");
    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);
    function newTask() {
        // Counter für Anzahl von ToDos
        counter++;
        document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
        let eingabefeld = document.createElement("p");
        eingabefeld.innerHTML = input.value;
        // Input leeren
        input.value = " ";
        //
        let task = document.getElementById("task");
        let check = document.createElement("div");
        let trash = document.createElement("div");
        /* Neues div für task*/
        let wrapper = document.createElement("div");
        wrapper.textContent = "";
        // Append Elemente 
        task.appendChild(wrapper);
        wrapper.appendChild(eingabefeld);
        wrapper?.appendChild(check);
        wrapper?.appendChild(trash);
        task?.appendChild(wrapper);
        // Id bzw. Klassen zuweisung
        eingabefeld.id = "eingabe";
        wrapper.id = "neuesDiv";
        check.className = "far fa-circle";
        trash.className = "fas fa-trash";
        //
        /*Eventlistener für die Check(erlefigt)-Box*/
        check.addEventListener("click", erledigteToDos);
        /* Fkt die ToDo als erledigt markiert - counter wird um 1 erhöht wenn ToDo hinzukommt*/
        function erledigteToDos() {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle");
            }
            else {
                check.setAttribute("class", "far fa-check-circle");
            }
        }
        // 
        /* Eventlistener für den Mülleimer*/
        trash.addEventListener("click", deleteToDo);
        /*Fkt die ToDo löscht nach klick auf Mülleimer - counter wird um 1 verringert wenn ToDo gelöscht wird*/
        function deleteToDo() {
            wrapper.parentElement.removeChild(wrapper);
            counter--;
            document.querySelector("#todoAmount").innerHTML = String(counter + " in total");
        }
    }
    // Neue ToDo wird hinzugefügt nach drücken der Entertaste
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            newTask();
        }
    });
})(L10 || (L10 = {}));
//# sourceMappingURL=a10.js.map