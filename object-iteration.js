// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject).join();
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const newKeysArr = Object.keys(someObject);
    const newValuesArr = Object.values(someObject);
    let newArr = [];
    for(let i = 0; i < newKeysArr.length; i++) {
        newArr.push([newKeysArr[i].toUpperCase(), newValuesArr[i]]);
    }
    return Object.fromEntries(newArr);
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const newKeysArr = Object.keys(someObject);
    const newValuesArr = Object.values(someObject);
    let newArr = [];
    for(let i = 0; i < newKeysArr.length; i++) {
        newArr.push([newKeysArr[i], newValuesArr[i]]);
    }
    return newArr;
}
