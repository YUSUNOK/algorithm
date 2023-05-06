//function solution(array) {
    /*
    테스트 1 〉	통과 (0.10ms, 33.4MB)
    테스트 2 〉	통과 (0.22ms, 33.5MB)
    테스트 3 〉	통과 (0.23ms, 33.5MB)
    테스트 4 〉	통과 (0.10ms, 33.5MB)
    테스트 5 〉	통과 (0.10ms, 33.4MB)
    테스트 6 〉	통과 (0.12ms, 33.4MB)
    테스트 7 〉	통과 (0.11ms, 33.6MB)
    테스트 8 〉	통과 (0.22ms, 33.5MB)
    테스트 9 〉	통과 (0.08ms, 33.4MB)
    테스트 10 〉통과 (0.07ms, 33.4MB)
    테스트 11 〉통과 (0.08ms, 33.4MB)
    테스트 12 〉통과 (0.12ms, 33.5MB)
    테스트 13 〉통과 (0.12ms, 33.6MB)
    테스트 14 〉통과 (0.24ms, 33.4MB)
    테스트 15 〉통과 (0.16ms, 33.5MB)
    테스트 16 〉통과 (0.13ms, 33.5MB)
    */
    // if(array.length === 1) return array[0];
    // const countObj ={};
    // for(let num of array){
    //     countObj[num] = (countObj[num] || 0) + 1;
    // };
    // const maxValue = Math.max(...Object.values(countObj));
    // const firstIndex = Object.values(countObj).indexOf(maxValue);
    // const lastIndex = Object.values(countObj).lastIndexOf(maxValue);
    // if(firstIndex !== lastIndex) return -1;
    // for(let [num, value] of Object.entries(countObj)){
    //     if(value === maxValue){
    //         return Number(num);
    //    }
    //}    
//}
function solution(array) {
    let m = new Map();
    for (let n of array) m.set(n, (m.get(n) || 0)+1);
    m = [...m].sort((a,b)=>b[1]-a[1]);
    return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}