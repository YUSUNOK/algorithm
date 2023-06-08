function solution(score) {
    const plusScore = score.reduce((prev, curr) => {
        return [...prev, curr[0] + curr[1]]
    }, []);
    const sortScore = plusScore.slice().sort((a,b) => b-a);
    return plusScore.map((x) => sortScore.indexOf(x) + 1);
}