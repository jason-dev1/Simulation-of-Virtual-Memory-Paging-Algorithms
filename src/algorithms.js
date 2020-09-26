import {floor} from "lodash";

export function firstInFirstOut(referenceString, frameNumber) {
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    for (let i = 0; i < referenceString.length; i++) {
            //If the frames include the string, no page fault
            if (pageInMem.includes(referenceString[i])) {
                pageFaults.push('');
            } else {
                //Page fault occurs
                pageFaults.push('F');
                //If there is free frame
                if (pageInMem.length < frameNumber) {
                    //add to the top of the array
                    pageInMem.unshift(referenceString[i]);
                } else {
                    if (pageNotInMem.length >= frameNumber) {
                        pageNotInMem.pop();
                    }
                    pageNotInMem.unshift(pageInMem.pop());
                    //insert the new page into the top of the array
                    pageInMem.unshift(referenceString[i]);
                }
            }
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}

export function leastRecentlyUsed(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            pageInMem.splice(pageInMem.indexOf(referenceString[i]),1);
            pageInMem.unshift(referenceString[i]);
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
            }
            else{
                if (pageNotInMem.length >= frameNumber) {
                    pageNotInMem.pop();
                }
                pageNotInMem.unshift(pageInMem.pop());
                pageInMem.unshift(referenceString[i]);
            }
        }
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}

export function notRecentlyUsed(referenceString, frameNumber, resetTurns){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let referenceMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    referenceString.forEach( (e) => referenceMap.set(e,0));
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (i%resetTurns === 0){
            referenceString.forEach( (e) => referenceMap.set(e,0));//reset clock condition, reset all reference bit to 0
        }
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            referenceMap.set(referenceString[i], 1);                //set reference bit to 1
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
            }
            else{
                for (let j = frameNumber-1; j >=0 ; j--){
                    if (referenceMap.get(pageInMem[j])===1){
                        referenceMap.set(pageInMem[j], 0);          //second chance, reset reference bit to 0
                    }
                    else
                    {
                        if (pageNotInMem.length >= frameNumber) {
                            pageNotInMem.pop();
                        }
                        pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(pageInMem[j]),1)[0]);
                        pageInMem.unshift(referenceString[i]);
                        break;
                    }
                }
            }
        }
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
        referenceMapArray.push(new Map(referenceMap));
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}

export function secondChance(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let referenceMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    let isReplace = false;
    referenceString.forEach( (e) => referenceMap.set(e,0)); //initialize all reference bit to 0
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            referenceMap.set(referenceString[i], 1);        //set reference bit to 1
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
            }
            else{
                //page replacement algorithm here
                for (let j = frameNumber-1; j >=0 ; j--){
                    if (referenceMap.get(pageInMem[j]) === 1){
                        referenceMap.set(pageInMem[j], 0);    //set reference bit to 0 (second chance)
                    }
                    else
                    {
                        if (pageNotInMem.length >= frameNumber)
                            pageNotInMem.pop();
                        pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(pageInMem[j]),1)[0]);
                        pageInMem.unshift(referenceString[i]);
                        isReplace = true;
                        break;
                    }
                }
                if (!isReplace){
                    pageNotInMem.unshift(pageInMem.pop());
                    pageInMem.unshift(referenceString[i]);
                }
            }
        }
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
        referenceMapArray.push(new Map(referenceMap));
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}

export function notFrequentlyUsed(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let frequentMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    referenceString.forEach( (e) => frequentMap.set(e,0));                                 //initialize counter as 0
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            frequentMap.set(referenceString[i], frequentMap.get(referenceString[i]) + 1);  //increment counter
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
            }
            else{
                //page replacement algorithm here
                let lowestCount = frequentMap.get(pageInMem[frameNumber - 1]);
                let lowestCountHolder = pageInMem[frameNumber - 1];
                for (let count = frameNumber - 2; count >= 0; count--){                     //find out the lowest count (victim)
                    if (frequentMap.get(pageInMem[count]) < lowestCount){
                        lowestCount = frequentMap.get(pageInMem[count]);
                        lowestCountHolder = pageInMem[count];
                    }
                }
                if (pageNotInMem.length >= frameNumber) {
                    pageNotInMem.pop();
                }
                pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(lowestCountHolder),1)[0]);    //replace the lowest count
                pageInMem.unshift(referenceString[i]);
            }
        }
        referenceMapArray.push(new Map(frequentMap));
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}

export function aging(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let frequentMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    let referenceMapArray = [];
    referenceString.forEach( (e) => frequentMap.set(e,0));                      //initialize as 0
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            frequentMap.forEach( (v,k) => frequentMap.set(k, floor(v/2) ));     //divide by 2
            frequentMap.set(referenceString[i], frequentMap.get(referenceString[i]) + 256);
        }
        else{
            pageFaults.push('F');
            frequentMap.forEach( (v,k) => frequentMap.set(k, floor(v/2) ));     //divide by 2
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
            }
            else{
                //page replacement algorithm here
                let lowestCount = frequentMap.get(pageInMem[frameNumber - 1]);
                let lowestCountHolder = pageInMem[frameNumber - 1];
                for (let count = frameNumber - 2; count >= 0; count--){
                    if (frequentMap.get(pageInMem[count]) < lowestCount){
                        lowestCount = frequentMap.get(pageInMem[count]);
                        lowestCountHolder = pageInMem[count];
                    }
                }
                if (pageNotInMem.length >= frameNumber) {
                    pageNotInMem.pop();
                }
                pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(lowestCountHolder),1)[0]);  //replace the lowest count
                pageInMem.unshift(referenceString[i]);
            }
        }
        referenceMapArray.push(new Map(frequentMap));
        pageInMemArray.push([...pageInMem]);
        pageNotInMemArray.push([...pageNotInMem]);
    }
    return {pageInMemArray, pageFaults, pageNotInMemArray, referenceMapArray};
}