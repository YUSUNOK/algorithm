const solution = (k, score) => {
    let lowHonor = [];
    let arrayOfHonor = [];
    for(let i = 0; i < score.length; i++) {
        if (arrayOfHonor.length < k) {
            arrayOfHonor.push(score[i]);
            lowHonor.push(Math.min(...arrayOfHonor));
            continue;
        } else {
            let minValueOfHonor = Math.min(...arrayOfHonor);
            if(minValueOfHonor < score[i]) {
                arrayOfHonor.sort((x, y) => y - x).pop();
                arrayOfHonor.push(score[i]);   
            }
            lowHonor.push(arrayOfHonor.sort((x, y) => x - y)[0]);
        }
    }
    return lowHonor;
}