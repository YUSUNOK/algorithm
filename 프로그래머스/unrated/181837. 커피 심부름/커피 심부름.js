function solution(order) {
    const price = {
        "americano" : 4500,
        "cafelatte" : 5000,
        "anything" : 4500,
    }
    let answer = 0;
    for(let item of order) {
        if(item.includes("anything")) {
            answer += price.anything;
        }
        if(item.includes("americano")) {
            answer += price.americano;
        }
        if(item.includes("cafelatte")) {
            answer += price.cafelatte;
        }
    }
    return answer;
}