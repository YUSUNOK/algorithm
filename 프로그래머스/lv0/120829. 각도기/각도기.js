function solution(angle) {
    let arr = [0, 90, 91, 180];
    const answer = arr.filter(x => angle>=x).length;
    return answer;
}