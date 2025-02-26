/**
 * Respresents the tasks for the user.
 */
export class ToDo{
    #id;
    #title;
    #description;
    #dueDate;
    #dateCompleted;
    /**
     * @constructor
     * @param {number} id 
     * @param {string} title 
     * @param {string} description 
     * @param {Date} dueDate 
     */
    constructor(title,description,dueDate){
        this.#description = description;
        this.#title = title;
        this.#dueDate = dueDate;
        this.#id = null;
        this.#dateCompleted = null;
    }

    get title(){
        return this.#title
    }
    get description(){
        return this.#description
    }
    get dueDate(){
        return this.#dueDate
    }
}