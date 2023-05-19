function solution(id_pw, db) {
    const dbMap = new Map(db);
    if(dbMap.has(id_pw[0]) && dbMap.get(id_pw[0]) === id_pw[1]){
        return "login";
    }
    return dbMap.has(id_pw[0]) ? "wrong pw" : "fail";
}