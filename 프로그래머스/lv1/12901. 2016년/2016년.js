/*
    윤년 : 2월 29일
    31,29,31,30,31,30,31,31,30,31,30,31
    a : 2월, b : 23일 
    
    => 31 + 23일 
*/
const solution = (a, b) => {
    const howManyDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    const daysOfweek = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    const totalDays = howManyDays.slice(0, a-1).reduce((prev, curr) => prev+curr, 0) + b;
    return daysOfweek[totalDays % 7];
}