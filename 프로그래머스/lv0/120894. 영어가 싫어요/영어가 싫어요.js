function solution(numbers) {
    const engToNum = {
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    const engArr = Object.keys(engToNum);
    for(let eng of engArr){
        if(numbers.includes(eng)){
            numbers = numbers.replaceAll(eng, engToNum[eng]);
        }
    }
    return Number(numbers);
}