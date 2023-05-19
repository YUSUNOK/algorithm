function solution(id_pw, db) {
    let idIncludeCheck = false;
    for(let [id, pw] of db) {
        if(id_pw[0] === id && id_pw[1] === pw) {
            return "login";
        }
        if(id_pw[0] === id){
            idIncludeCheck = true;
        }
    }
    
    if(idIncludeCheck){
        return "wrong pw";
    }else{
        return "fail";
    }
}