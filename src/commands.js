import {ToDo} from "./todo.js";
import { FileManager } from "./fileManager.js";
import { doesToDoExists, validateToDoParams } from "./validator.js";

/**
 * Prints the Commands
 */
export function Help(){
    return `
        Welcome to my first ToDo App CLI 𝍌

        Usage:
            create --title [TITLE] --desc [DESCRIPTION]  - Creates a Task
            edit --id [TASK ID] --title [TITLE] --desc [DESCRIPTION]  - Edits a Task
            close --id [TASK ID]  - Closes a Task
            list --closed  - List Tasks (--closed will include closed Tasks)
            delete --id [TASK ID]  - Delete Tasks   
    `;
}

/**
 * @param {string} title 
 * @param {string} description 
 * @param {Date} dueDate 
 */
export function CreateToDo(title,description,dueDate){
    let newToDo = new ToDo(title=title,description=description,dueDate=dueDate)
    validateToDoParams(
        title=newToDo.title,
        description=newToDo.description,
        dueDate=newToDo.dueDate
    );
    FileManager.Write(newToDo);
}

/**
 * @param {number} id 
 * @param {ToDo} newToDo 
 */
export function EditToDo(id, newToDo){
    validateToDo(newToDo);
    readToDo = FileManager.ReadToDo(id);
    doesToDoExists(readToDo);
    FileManager.Write(todo=newToDo,id=id,overwrite=true);
}

/**
 * @param {number} id 
 */
export function CloseToDo(id){
    let todo = FileManager.ReadToDo(id);
    doesToDoExists(todo)
    todo.close();
    FileManager.Write(todo=todo,id=id,overwrite=true);
}

/**
 * @param {boolean} includeClosed 
 */
export function ListToDo(includeClosed){
    return FileManager.ReadAll(includeClosed);
}

/**
 * @param {number} id 
 */
export function DeleteToDo(id){
    let todo = FileManager.ReadToDo(id);
    doesToDoExists(todo)
    FileManager.Delete(id)
}