export const processRawScripts = (rawScripts: string): string[] => {
    const preprocessedScripts = JSON.stringify(rawScripts);
    const len: number = preprocessedScripts.length;
    return preprocessedScripts
        .slice(1, len - 1)
        .replaceAll("\\n", "")
        .split(";");
}

export const checkErrors: any = (scripts: string[] | string) => {
    if (typeof scripts === "string") {
        return checkErrors(processRawScripts(scripts));
    }
    return;
}

// export const getCommandType: any = (processedCommand: string) => {
//     let commandType: string = "";
//     let started = false;
//     for(let i = 0; i < processedCommand.length; i++) {
//         if (processedCommand[i] === " " && started) {
//             return "Error";
//         }
//         started = true;
//         commandType += processedCommand[i];
//     }
// }

const typenameList: string[] = [
    "matrix", "vector", "complex", "real"
]

export const translateScripts: any = (scripts: string[] | string) => {
    if (typeof scripts === "string") {
        return translateScripts(processRawScripts(scripts));
    }
    // if ()
    return;
}