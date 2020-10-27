// 'ABAZDC' 'BACBAD' --> 'ABAD'

// 'AGGTAB' 'GXTXAYB' --> 'GTAB'

// aaaa aa --> aa

const string1 = 'AAWXYZ';
const string2 = 'UVAWXYZA';
// let output = '';

let masterArr = [];
    for (i=0; i<string1.length; i++) {
        masterArr.push('[]')
    }
console.log(masterArr);

function longestCommonSub(s1,s2) {

    for (x=0; x<s1.length; x++) {
        console.log('X: ' + x);
        let xString = '';

        let counter = 0;
        let s2Idx = 0;
        for (i=0+x; i<s1.length; i++) {
            let s1Char = s1[i];

            for(j=s2Idx; j<s2.length; j++){
                let s2Char = s2[j];
                if(s1Char === s2Char) {
                    console.log('\thit: ' + s2Char);
                    xString += s2Char;
                    s2Idx = j+1;
                    break;
                }
            
            }
        
        }
    
    console.log('\tcounter: ' + xString.length);
    masterArr[x] = xString;
    console.log(masterArr);

    }
console.log('finished masterArr: ' + masterArr);
let sortedMasterArr = masterArr.sort((a,b) => b.length - a.length);
console.log('sorted masterArr: ' + sortedMasterArr);
console.log(s1 + ' --- ' + s2 + '     ---> ' + sortedMasterArr[0])
}

longestCommonSub(string1,string2);