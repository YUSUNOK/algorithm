const solution = (chicken) => {
    let remainCoupon = chicken;
    let maximalServiceChicken = 0;
    
    while(remainCoupon >= 10) {
        let addCoupon = 0;
        maximalServiceChicken += Math.floor(remainCoupon/10);
        addCoupon += remainCoupon%10;
        addCoupon += Math.floor(remainCoupon/10);
        remainCoupon = addCoupon;
    }
    
    return maximalServiceChicken;
}