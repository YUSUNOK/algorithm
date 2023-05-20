function solution(spell, dic) {
    const spellsSet = new Set(spell);
    for(let dicItem of dic) {
        const dicItemSet = new Set(dicItem);
        if ([...spellsSet].every(i => dicItemSet.has(i))) {
            return 1;
        }  
    }
    return 2;
}