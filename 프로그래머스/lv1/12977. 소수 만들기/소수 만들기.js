const solution = (nums) => {
    let count = 0;
    for(let leftIndex = 0; leftIndex <= nums.length-3; leftIndex++) {
        for(let centerIndex = leftIndex+1; centerIndex <= nums.length -2; centerIndex++) {
            let rightIndex = centerIndex+1;
            while(rightIndex !== nums.length) {
                let sum = nums[leftIndex] + nums[centerIndex] + nums[rightIndex];
                for(let i = sum -1; i > 1; i--) {
                    if(sum % i === 0) {
                        break;
                    }
                    
                    if(i === 2) count++;
                }
                rightIndex++;
            }
        }
    }
    return count;
}