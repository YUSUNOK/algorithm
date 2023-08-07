const solution = (s) => {
    // "())(()"
    let arr = [...s];
    if(arr[0] === ')' || arr[arr.length-1] === '(') return false;
    let stack = [];
    arr.forEach((x, i) => {
        if(stack[stack.length -1] !== x && stack[stack.length -1] === '(') {
            stack.pop();
        }else{
            stack.push(x);
        }
    })
    return stack.length === 0 ? true : false;
}