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
        return checkErrors(processRawScripts(scripts), false);
    }
    return;
}

export const translateScripts: any = (scripts: string[] | string) => {
    if (typeof scripts === "string") {
        return translateScripts(processRawScripts(scripts), false);
    }
    return;
}

