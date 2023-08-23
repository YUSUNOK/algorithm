const solution = (name, yearning, photo) => {
    const nameYearningMap = new Map();
    for(let i = 0; i < name.length; i++) {
        let value = 0;
        if(i < yearning.length) {
            value = yearning[i];
        }
        nameYearningMap.set(name[i], value);
    }
 
    return photo.map((x, i) => {
       return x.reduce((prev, curr) => {
           if(!nameYearningMap.has(curr)) return prev;
           else return prev + nameYearningMap.get(curr);
       }, 0)
    })
}
                         
