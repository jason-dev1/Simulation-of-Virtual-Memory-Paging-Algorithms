import {floor} from "lodash";

export function firstInFirstOut(referenceString, frameNumber) {
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    for (let i = 0; i < referenceString.length; i++) {
            if (pageInMem.includes(referenceString[i])) {
                pageFaults.push('');                                //No page faults
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);                           //keep no changes
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            } else {
                pageFaults.push('F');                               //Page faults occurs
                if (pageInMem.length < frameNumber) {
                    pageInMem.unshift(referenceString[i]);          //add to the top of the array
                    const pageInMemClone = [...pageInMem];
                    pageInMemArray.push(pageInMemClone);
                    const pageNotInMemClone = [...pageNotInMem];
                    pageNotInMemArray.push(pageNotInMemClone);
                } else {
                    //page replacement algorithm here
                    if (pageNotInMem.length >= frameNumber)
                        pageNotInMem.pop();
                    pageNotInMem.unshift(pageInMem.pop());          //remove the last(oldest) page}
                    pageInMem.unshift(referenceString[i]);           //insert the new page into the top of the array
                    const pageInMemClone = [...pageInMem];
                    pageInMemArray.push(pageInMemClone);                        //insert output into 2d array
                    const pageNotInMemClone = [...pageNotInMem];
                    pageNotInMemArray.push(pageNotInMemClone);
                }
            }
    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}

export function leastRecentlyUsed(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            pageInMem.splice(pageInMem.indexOf(referenceString[i]),1);
            pageInMem.unshift(referenceString[i]);
            const pageInMemClone = [...pageInMem];
            pageInMemArray.push(pageInMemClone);
            const pageNotInMemClone = [...pageNotInMem];
            pageNotInMemArray.push(pageNotInMemClone);
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
            else{
                //page replacement algorithm here
                if (pageNotInMem.length >= frameNumber)
                    pageNotInMem.pop();
                pageNotInMem.unshift(pageInMem.pop());
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
        }
    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}

export function notRecentlyUsed(referenceString, frameNumber, resetTurns){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let referenceMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    referenceString.forEach( (e) => referenceMap.set(e,false));
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (i%resetTurns === 0){
            referenceString.forEach( (e) => referenceMap.set(e,false));
        }
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            const pageInMemClone = [...pageInMem];
            pageInMemArray.push(pageInMemClone);
            const pageNotInMemClone = [...pageNotInMem];
            pageNotInMemArray.push(pageNotInMemClone);
            referenceMap.set(referenceString[i], true);  //set reference bit to 1
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
            else{
                //page replacement algorithm here
                for (let j = frameNumber-1; j >=0 ; j--){
                    if (referenceMap.get(pageInMem[j])===true){
                        referenceMap.set(pageInMem[j], false);    //set reference bit to 0 (second chance)
                    }
                    else
                    {
                        if (pageNotInMem.length >= frameNumber)
                            pageNotInMem.pop();
                        pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(pageInMem[j]),1)[0]);
                        pageInMem.unshift(referenceString[i]);
                        break;
                    }
                }
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
        }
    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}

export function secondChance(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let referenceMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    referenceString.forEach( (e) => referenceMap.set(e,false));
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            const pageInMemClone = [...pageInMem];
            pageInMemArray.push(pageInMemClone);
            const pageNotInMemClone = [...pageNotInMem];
            pageNotInMemArray.push(pageNotInMemClone);
            referenceMap.set(referenceString[i], true);  //set reference bit to 1
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
            else{
                //page replacement algorithm here
                for (let j = frameNumber-1; j >=0 ; j--){
                    if (referenceMap.get(pageInMem[j])===true){
                        referenceMap.set(pageInMem[j], false);    //set reference bit to 0 (second chance)
                    }
                    else
                    {
                        if (pageNotInMem.length >= frameNumber)
                            pageNotInMem.pop();
                        pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(pageInMem[j]),1)[0]);
                        pageInMem.unshift(referenceString[i]);
                        break;
                    }
                }
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
        }
    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}

export function notFrequentlyUsed(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let frequentMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    referenceString.forEach( (e) => frequentMap.set(e,0));
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            const pageInMemClone = [...pageInMem];
            pageInMemArray.push(pageInMemClone);;
            const pageNotInMemClone = [...pageNotInMem];
            pageNotInMemArray.push(pageNotInMemClone);
            frequentMap.set(referenceString[i], frequentMap.get(referenceString[i]) + 1);  //add counter
        }
        else{
            pageFaults.push('F');
            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
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
                if (pageNotInMem.length >= frameNumber)
                    pageNotInMem.pop();
                pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(lowestCountHolder),1)[0]);
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
        }

    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}

export function aging(referenceString, frameNumber){
    let pageInMem = [];
    let pageFaults = [];
    let pageInMemArray = [];
    let frequentMap = new Map();
    let pageNotInMem = [];
    let pageNotInMemArray = [];
    referenceString.forEach( (e) => frequentMap.set(e,0));
    for (let i = 0; i < referenceString.length ; i++)
    {
        if (pageInMem.includes(referenceString[i])){
            pageFaults.push('');
            const pageInMemClone = [...pageInMem];
            pageInMemArray.push(pageInMemClone);
            const pageNotInMemClone = [...pageNotInMem];
            pageNotInMemArray.push(pageNotInMemClone);
            frequentMap.forEach( (v,k,map) => frequentMap.set(k, floor(v/2) ));
            frequentMap.set(referenceString[i], frequentMap.get(referenceString[i]) + 256);
        }
        else{
            pageFaults.push('F');
            frequentMap.forEach( (v,k,map) => frequentMap.set(k, floor(v/2) ));

            if (pageInMem.length < frameNumber){
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
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
                if (pageNotInMem.length >= frameNumber)
                    pageNotInMem.pop();
                pageNotInMem.unshift(pageInMem.splice(pageInMem.indexOf(lowestCountHolder),1)[0]);
                pageInMem.unshift(referenceString[i]);
                const pageInMemClone = [...pageInMem];
                pageInMemArray.push(pageInMemClone);
                const pageNotInMemClone = [...pageNotInMem];
                pageNotInMemArray.push(pageNotInMemClone);
            }
        }
    }
    console.log(pageNotInMemArray);
    return {pageInMemArray, pageFaults, pageNotInMemArray};
}