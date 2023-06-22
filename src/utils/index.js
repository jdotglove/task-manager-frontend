export const compareISOTimestamps = (timestampA, timestampB, sortDesc) => {
    if (timestampA === timestampB) return 0;
    if (sortDesc) return timestampA > timestampB ? 1 : -1;
    return timestampA > timestampB ? -1 : 1;
}

export const compareStrings = (stringA, stringB, sortDesc) => {

    const nameA = stringA.toUpperCase(); // ignore upper and lowercase
    const nameB = stringB.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return sortDesc ? 1 : -1;
    }
    if (nameA > nameB) {
        return sortDesc ? -1 : 1;
    }
    // names must be equal
    return 0;

};