function solution(dots) {
    const slideObj = {};
    for(let i = 0; i < 3; i++){
        for(let j = i+1; j < 4; j++){
            let key = (dots[i][1] - dots[j][1]) / (dots[i][0]-dots[j][0]);
            slideObj[key] = (slideObj[key] || 0) + 1;
        }
    }
    const slideArr = Object.values(slideObj);
    return (slideArr.includes(2) || slideArr.includes(6)) ? 1 : 0;
}
