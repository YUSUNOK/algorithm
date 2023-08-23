const solution = (array, commands) => {
    let result = [];
    for(let command of commands) {
        result.push(array.slice(command[0]-1, command[1]).sort((x, y) => x - y)[command[2]-1]);
    }
    return result;
}