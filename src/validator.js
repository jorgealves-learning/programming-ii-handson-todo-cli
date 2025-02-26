/**
 * @param {string} title 
 * @param {string} description 
 * @param {Date} dueDate 
 */
export function validateToDoParams(title,description,dueDate){
    if(!isTitleValid(title=title)){
        throw new Error("Title is not valid.")
    }
    if(!isDescriptionValid(description)){
        throw new Error("Description is not valid.")
    }
    if(!isDueDateValid(dueDate)){
        throw new Error("DueDate is not valid.")
    }
}

/**
 * @param {string} title 
 */
function isTitleValid(title){
   if(typeof title != "string") return false;
   return title?true:false;
}

/**
 * @param {string} description 
 */
function isDescriptionValid(description){
    if(typeof description != "string") return false;
    return description ? true: false;
 }

 /**
 * @param {Date} dueDate 
 */
function isDueDateValid(dueDate){
    if(!dueDate) return false;
    let today = Date.now();
    return dueDate < today;
 }

 export function doesToDoExists(toDo){
    if(!toDo){
        throw new Error("ToDo does not exist");
    }
    return true;
 }

 /**
  * 
  * @param {object} argParams 
  */
 export function validateCliParams(argParams){
    return argParams.every(val=>val != undefined && val != null);
 }

 /**
  * 
  * @param {string[]} argParams 
  * @returns {object}
  */
 export function parseCliParams(argParams){
    const keys = argParams.filter((el,idx)=>idx%2==0);
    const values = argParams.filter((el,idx)=>idx%2!=0);
    const result = {};
    for(let i =0;i<keys.length;i++){
        result[keys[i].slice(2)] = values[i];
    }
    return result    
    
 }