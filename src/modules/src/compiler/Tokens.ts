// TYPENAMES
type typenameT = {
    compilerID: string;
    displayable: boolean;
}

export const defineTypename = (compilerID: string, displayable: boolean): typenameT => {
    return {
        compilerID: compilerID,
        displayable: displayable
    }
}

// FUNCTIONS
type actionT = {
    compilerID: string;
    acceptedTypenames: string[];
}

// KEYWORDS
type keywordT = {
    compilerID: string;
}

// WRAPPER
type tokenT = {
    typenames: readonly typenameT[],
    actions: readonly actionT[],
    keywords: readonly keywordT[],
}

export const tokens: tokenT = {
    typenames: [
        defineTypename("complex", true),
    ],
    actions: [],
    keywords: [],
}