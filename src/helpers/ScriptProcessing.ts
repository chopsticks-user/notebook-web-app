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