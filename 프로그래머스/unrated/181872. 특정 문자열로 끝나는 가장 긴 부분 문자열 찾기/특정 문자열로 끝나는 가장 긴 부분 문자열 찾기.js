const solution = (myString, pat) => {
    let finalStartIndex = myString.lastIndexOf(pat);
    return myString.substring(0, finalStartIndex + pat.length);
}