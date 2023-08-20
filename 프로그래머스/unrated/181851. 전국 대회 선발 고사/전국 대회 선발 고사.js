const solution = (rank, attendance) => {
    const sortAndAttendArr = rank.filter((x, i) => attendance[i]).sort((x, y) => x - y);
    const firstIndex = rank.indexOf(sortAndAttendArr[0]);
    const secondIndex = rank.indexOf(sortAndAttendArr[1]);
    const thirdIndex = rank.indexOf(sortAndAttendArr[2]);
    return  10000 * firstIndex + 100 * secondIndex + thirdIndex;
}