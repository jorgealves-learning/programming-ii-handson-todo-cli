import {homedir} from "node:os"
import { writeFileSync,existsSync, readFileSync } from "node:fs";

export class FileManager{
    static #filePath = `${homedir()}/.todoapp.json`;

    static #writeFile(data){
        writeFileSync(this.#filePath, data=data,options={encoding:"utf-8"});
    }
    static #createFileIfNotExists(){
        if(!existsSync(this.#filePath,)) 
            this.#writeFile(JSON.stringify([]));
    }
    /**
     * @param {ToDo} obj 
     * @param {number} id 
     * @param {boolean} overwrite 
     */
    static Write(obj,id=null,overwrite=false){ 
        this.#createFileIfNotExists();
        let fileData = this.ReadAll(includeClosed=true);
        if(overwrite){
            fileData.forEach(element, index => {
                if(id === index){
                    element.id = index;
                    element.title = obj.title;
                    element.description = obj.description;
                    element.dueDate = obj.dueDate;
                    element.dateCompleted = null;
                }
            });
        }else{
            obj.id = fileData.lenght()++;
            fileData.push(obj);
        }
        this.#writeFile(JSON.stringify(fileData));
    };

    /**
     * @param {boolean} includeClosed 
     * @returns {ToDo[]}
     */
    static ReadAll(includeClosed){
        let taskList;
        fetch(this.#filePath).then(
            response=>response.json().then(data=> taskList = data)
        );
        return taskList.filter(el=> includeClosed && el.dateCompleted);
    }

    /**
     * @param {number} id 
     * @returns {ToDo}
     */
    static ReadToDo(id){
        let tasks = this.ReadAll(includeClosed=true);
        return tasks.filter(el=>el.id ===id)[0];
    }

    /**
     * @param {number} id 
     */
    static Delete(id){
        let exists = this.ReadToDo(id=id) ?? false;
        if(!exists){
            throw new Error("Task does not exists");
        }
        let tasks = this.ReadAll(includeClosed=true);
        let newTasks = tasks.filter(el=>el.id !== id);
        this.#writeFile(JSON.stringify(newTasks));
    }
}