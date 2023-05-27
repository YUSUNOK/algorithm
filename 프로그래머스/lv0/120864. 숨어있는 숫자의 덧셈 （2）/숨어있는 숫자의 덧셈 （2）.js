function solution(my_string) {
  const answer = [...my_string].map(x => !isNaN(Number(x)) ? x : "*").join("").split("*").filter(x => x !=="").map(x => Number(x)).reduce((prev, curr) => prev + curr, 0);
    return answer;
}