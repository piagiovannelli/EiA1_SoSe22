namespace L10 {

    // Variable für die Aufzählung der ToDos
    let counter: number = 0;

    // Variable für den Input
    let input: HTMLInputElement = document.querySelector("#textfield");


    // Eventlistener für das Hinzufügen einer neuen ToDo
    document.querySelector("#btn").addEventListener("click", newTask);


    function newTask (): void {

        // Counter für Anzahl von ToDos
        counter++; 
        document.querySelector("#todoAmount").innerHTML = String( counter + " in total");


        let eingabefeld: HTMLElement = document.createElement("p");
        eingabefeld.innerHTML = input.value;

        // Input leeren
        input.value = " ";

        //
        let task: HTMLElement = document.getElementById("task");
        let check: HTMLDivElement = document.createElement("div");
        let trash: HTMLDivElement = document.createElement("div");
            /* Neues div für task*/ 
        let wrapper: HTMLDivElement = document.createElement("div");

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
        function erledigteToDos (): void {
            if (check.getAttribute("class") == "far fa-check-circle") {
                check.setAttribute("class", "far fa-circle"); }
            else {
                check.setAttribute("class", "far fa-check-circle"); 
            }    
        }

        // 
           /* Eventlistener für den Mülleimer*/
        trash.addEventListener("click", deleteToDo);
            /*Fkt die ToDo löscht nach klick auf Mülleimer - counter wird um 1 verringert wenn ToDo gelöscht wird*/
        function deleteToDo (): void {
            wrapper.parentElement.removeChild(wrapper); 
            counter--;
            document.querySelector("#todoAmount").innerHTML = String( counter + " in total");
        }

    }

    // Neue ToDo wird hinzugefügt nach drücken der Entertaste
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.key == "Enter") {
        newTask();
        }
    });


}