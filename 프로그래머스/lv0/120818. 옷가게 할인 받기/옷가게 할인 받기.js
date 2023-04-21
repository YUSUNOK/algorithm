function solution(price) {
    var arr = [
        {
            price : 10,
            percent : 0,
        }
        ,
        {
            price : 100000,
            percent : 0.05,
        },
        {
            price : 300000,
            percent : 0.1,
        },
        {
            price : 500000,
            percent : 0.2,
        },
        ];
    
    var filterArr = arr.filter(x => x.price <= price);
    return ~~(price - price * filterArr[filterArr.length -1].percent);
    
    
}