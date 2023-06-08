function solution(babbling) {
    const babbleToCan = ["aya", "ye", "woo", "ma"];
    for(let babble of babbleToCan) {
        babbling = babbling.map((x) => {
          if(x.includes(babble)) return x.replace(babble,'+');
            return x;
        })
    }
    return babbling.filter((x) => x.replaceAll('+','') === '').length;
}