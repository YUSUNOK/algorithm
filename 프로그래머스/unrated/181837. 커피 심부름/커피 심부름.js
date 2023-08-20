const solution = (order) => {
    let result = 0;
    order.forEach((x) => {
        if(x.includes('cafelatte')) result += 5000;
        else result += 4500;
    })
    return result;
}