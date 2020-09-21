export function refStringGen(size, range){
    let result = "";
    for (let i = 0; i < size ; i++){
        let r = Math.floor((Math.random()*range)).toString();
        result = result + r + ",";
    }
    result = result.substring(0, result.length-1);
    return result;
}