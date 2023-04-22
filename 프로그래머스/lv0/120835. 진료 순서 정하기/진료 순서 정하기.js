function solution(emergency) {
    let inputEmergency = [...emergency];
    emergency.sort((x, y) => y - x);
    return inputEmergency.map(x => emergency.indexOf(x) + 1);
}