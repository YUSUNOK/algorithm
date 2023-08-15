const solution = (score) => {
  const result = [];
  const sumScore = score.map((scoresOfperson) => scoresOfperson[0] + scoresOfperson[1]);
  const sortScore = sumScore.slice().sort((x, y) => y-x);
  sumScore.forEach((score) => result.push(sortScore.indexOf(score) + 1));
return result;
}