const solution = (num_list) => {
    let evenValue = ''
    let oddValue = '';
    num_list.forEach((x) => {
        x % 2 === 0 ? evenValue += String(x) : oddValue += String(x);
    })
    return Number(evenValue) + Number(oddValue);
}