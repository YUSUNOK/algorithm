const solution = (id_pw, db) => {
    const idPwMap = new Map(db);
    if(idPwMap.has(id_pw[0]) && idPwMap.get(id_pw[0]) === id_pw[1]) return 'login';
    return !idPwMap.has(id_pw[0]) ? 'fail' : 'wrong pw';
}