// solve these problems using any method you like!

/* 

Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

*/

/*
Output: 
{
    apple: 3,
    banana: 1,
    'dog food': 5,
    milk: 2,
    cheese: 4
}
*/

export function organizePricesByKey(arr) {
    let newArr = arr.map(({ id, price }) => [id, price]);
    return Object.fromEntries(newArr);
}

/*
Output: 
{
    apple: { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    banana: { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    'dog food': { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    milk: { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
    cheese:    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    }
}
*/

export function makeAHashMap(arr) {
    let newArr = arr.map((currentObj) => [currentObj.id, currentObj]);
    return Object.fromEntries(newArr);
}


/*
Output: 
{
    fruit: 2,
    other: 1,
    dairy: 2
}
*/

export function countByCategory(arr) {
    const categoriesArr = arr.map(({ category }) => category);
    const uniqueCategoriesArr = Array.from(new Set(categoriesArr));
    let objArr = [];
    uniqueCategoriesArr.forEach((currentCategory) => {
        const countArr = arr.filter(({ category }) => category === currentCategory);
        objArr.push([currentCategory, countArr.length]);
    });
    return Object.fromEntries(objArr);
}