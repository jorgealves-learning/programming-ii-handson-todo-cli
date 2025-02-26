import {CreateToDo, Help} from "./commands.js";
import { validateCliParams, parseCliParams } from "./validator.js";
try {
    const args = process.argv.slice(2);
    const [command, ...commandArgs] = args;
    if(!command){
        throw new Error("Command not defined 🥲")
    }
    switch(command.toString().toLowerCase()){
        case "--help":
            console.log(Help());
            break;
        case "create":
            if (!validateCliParams(commandArgs))
                throw new Error("Parameters not valid")
            let params = parseCliParams(commandArgs)
            CreateToDo(params.title,params.desc, params.dueDate);
            break;
        default:
            throw new Error("Command not Valid 🥲");
    }

    
} catch (error) {
    console.error(error);
}
