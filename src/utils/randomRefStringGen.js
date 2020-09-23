export function refStringGen(size, range){
    let result = "";
    let previous = 0;
    let r = 0;
    for (let i = 0; i < size ; i++){
        do {
            r = Math.floor(Math.random()*range);
        }while(r === previous);
        result = result + r.toString() + ",";
        previous = r;
    }
    result = result.substring(0, result.length-1);
    return result;
}