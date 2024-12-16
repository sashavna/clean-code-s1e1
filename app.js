//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

var taskInput=document.getElementById("new-task");//Add a new task.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
var createNewTaskElement=function(taskString){

    var listItem=document.createElement("li");

    //input (checkbox)
    var checkBox=document.createElement("input");//checkbx
    //label
    var label=document.createElement("label");//label
    //input (text)
    var task-list__edit-button Input=document.createElement("input");//text
    //button.task-list__edit-button 
    var task-list__edit-button Button=document.createElement("button");//task-list__edit-button  button

    //button.task-list__delete-button 
    var task-list__delete-button Button=document.createElement("button");//task-list__delete-button  button
    var task-list__delete-button ButtonImg=document.createElement("img");//task-list__delete-button  button image

    label.innerText=taskString;
    label.className='task';

    //Each elements, needs appending
    checkBox.type="checkbox";
    task-list__edit-button Input.type="text";
    task-list__edit-button Input.className="task";

    task-list__edit-button Button.innerText="task-list__edit-button "; //innerText encodes special characters, HTML does not.
    task-list__edit-button Button.className="task-list__edit-button ";

    task-list__delete-button Button.className="task-list__delete-button ";
    task-list__delete-button ButtonImg.src='./remove.svg';
    task-list__delete-button Button.appendChild(task-list__delete-button ButtonImg);


    //and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(task-list__edit-button Input);
    listItem.appendChild(task-list__edit-button Button);
    listItem.appendChild(task-list__delete-button Button);
    return listItem;
}



var addTask=function(){
    console.log("Add Task...");
    //Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    var listItem=createNewTaskElement(taskInput.value);

    //Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

    taskInput.value="";

}

//task-list__edit-button  an existing task.

var task-list__edit-button Task=function(){
    console.log("task-list__edit-button  Task...");
    console.log("Change 'task-list__edit-button ' to 'save'");


    var listItem=this.parentNode;

    var task-list__edit-button Input=listItem.querySelector('input[type=text]');
    var label=listItem.querySelector("label");
    var task-list__edit-button Btn=listItem.querySelector(".task-list__edit-button ");
    var containsClass=listItem.classList.contains("task-list__edit-button -mode");
    //If class of the parent is .task-list__edit-button -mode
    if(containsClass){

        //switch to .task-list__edit-button -mode
        //label becomes the inputs value.
        label.innerText=task-list__edit-button Input.value;
        task-list__edit-button Btn.innerText="task-list__edit-button ";
    }else{
        task-list__edit-button Input.value=label.innerText;
        task-list__edit-button Btn.innerText="Save";
    }

    //toggle .task-list__edit-button -mode on the parent.
    listItem.classList.toggle("task-list__edit-button -mode");
};


//task-list__delete-button  task.
var task-list__delete-button Task=function(){
    console.log("task-list__delete-button  Task...");

    var listItem=this.parentNode;
    var ul=listItem.parentNode;
    //Remove the parent list item from the ul.
    ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
    console.log("Complete Task...");

    //Append the task list item to the #completed-tasks
    var listItem=this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
    console.log("Incomplete Task...");
//Mark task as incomplete.
    //When the checkbox is unchecked
    //Append the task list item to the #incomplete-tasks.
    var listItem=this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
    console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
    console.log("bind list item events");
//select ListItems children
    var checkBox=taskListItem.querySelector("input[type=checkbox]");
    var task-list__edit-button Button=taskListItem.querySelector("button.task-list__edit-button ");
    var task-list__delete-button Button=taskListItem.querySelector("button.task-list__delete-button ");


    //Bind task-list__edit-button Task to task-list__edit-button  button.
    task-list__edit-button Button.onclick=task-list__edit-button Task;
    //Bind task-list__delete-button Task to task-list__delete-button  button.
    task-list__delete-button Button.onclick=task-list__delete-button Task;
    //Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i=0; i<incompleteTaskHolder.children.length;i++){

    //bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}




//cycle over completedTasksHolder ul list items
for (var i=0; i<completedTasksHolder.children.length;i++){
    //bind events to list items chldren(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}




// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change task-list__edit-button  to save when you are in task-list__edit-button  mode.