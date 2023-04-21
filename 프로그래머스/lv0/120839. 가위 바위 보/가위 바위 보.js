function solution(rsp) {
   var answer = {
       2 : 0,
       0 : 5,
       5 : 2,
   }
   return [...rsp].map(x => answer[x]).join("");
}