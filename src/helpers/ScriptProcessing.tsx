export const processRawScripts = (rawScripts: string): string[] => {
    const preprocessedScripts = JSON.stringify(rawScripts);
    const len: number = preprocessedScripts.length;
    return preprocessedScripts
        .slice(1, len - 1)
        .replaceAll("\\n", "")
        .split(";");
}