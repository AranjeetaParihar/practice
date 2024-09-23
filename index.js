// array methods

// let arr = [1,2,3,4,5]
// console.log(arr.length);
// // 5
// console.log(arr.join(","));
// // 1,2,3,4,5
// console.log(arr.slice(3));
// // [4,5]
// console.log(arr.indexOf(3));
// // 2
// console.log(arr.push(7));
// // count : 6
// arr.splice(4,0,7)
// console.log(arr);
// // [1,2,3,4,7,5,7]
// console.log(Object.keys(arr));

// event loop

// console.log("start");
// setTimeout(()=>{
// console.log("Inside timeout");
// },0)
// console.log("end");

// variable scopes
// {
//     var x = 10;
//     let y = 20;
// }

// console.log(x);//10
// // console.log(y);//error

// function printValue(){
//     var x = 1;
//     let y = 2;
//     console.log(x,y);   
// }
// printValue();
// console.log(x); //10
// console.log(y); //error


// callback

// function printName(name) {
//     console.log(`Name: ${name}`);
// }
// function Outer(printName) {
//     let name = "Neo";
//     printName(name);
// }

// Outer(printName);

// this
// const obj1 = {
//     name: "Neo", age: 20,
//     printName: function () {
//         console.log(this);//point to its object obj1
//         console.log(this.name);

//     }
// }
// obj1.printName();

// try catch
// try {
//     let x = 10;
//     console.log(y);

// } catch (error) {
//     if(error instanceof ReferenceError) console.log("Reference error",error);
//     else{console.log("error",error);} 
// }



// flatten

// {
//     "input": {
//         "flatJSON": false,
//         "i": {
//             "am": {
//                 "not": {
//                     "so": {
//                         "flat": true,
//                         "unflat": false
//                     }
//                 },
//                 "a": "tree"
//             }
//         },
//         "dates": [
//             {
//                 "day": 1
//             },
//             {
//                 "day": 8947
//             }
//         ]
//     },
//     "output": {
//         "flatJSON": false,
//         "i.am.not.so.flat": true,
//         "i.am.not.so.unflat": false,
//         "i.am.a": "tree",
//         "dates.0.day": 1,
//         "dates.1.day": 8947
//     }
// }

// var result = {}
// function traverseObject(obj,k="") {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             let newKey = k.length ? k+"."+key : key;
//             if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//                 // console.log(`Key: ${key}, Value: ${obj[key]}`);
//                 traverseObject(obj[key],newKey);
//             } else if (Array.isArray(obj[key])) {
//                 // console.log(`Key: ${key}, Value: (Array)`);
//                 obj[key].forEach((element, index) => {
//                     // console.log(`Index ${index} in Array:`);
//                     let arrayKey = `${newKey}.${index}`;
//                     traverseObject(element,arrayKey); 
//                 });
//             } else {
//                 console.log(`newKey: ${newKey}, value: ${obj[key]}`);
//                 result[newKey] = obj[key]; 
//             }
//         }
//     }
// }

// // Call the function
// traverseObject(input);
// console.log(result);

let input = {
    "flatJSON": false,
    "i.am.not.so.flat": true,
    "i.am.not.so.unflat": false,
    "i.am.a": "tree",
    "dates.0.day": 1,
    "dates.1.day": 8947
}

function unflatten(flatObject) {
    var result = {}, temp, arr, property, i;
    for (property in flatObject) {
        arr = property.split('.');   // Split the key into its parts
        // arr = [i,am,not,so,flat]
        temp = result;               // Start from the root of the result object
        for (i = 0; i < arr.length-1 ; i++) { 
            // Iterate through all but the last key part because last is assignment value
            // If the current part is not in temp
            if (!(arr[i] in temp)) {            
                // Check if the next key is a number (for array)
                if (isFinite(arr[i + 1])) { 
                    // Create an empty array if the next key is a number
                    temp[arr[i]] = [];           
                } else {
                    // Otherwise, create an object
                    // result : {{}}
                    temp[arr[i]] = {};          
                }
            }
            // keep adding keys to the object
            // result : {{i : {so on...}}}
            temp = temp[arr[i]];  
            console.log("temp",temp);
        }
        // Assign the final value to the deepest key part (property = false,true,1)
        // arr.length-1 = "flat" index
        temp[arr[arr.length-1]] = flatObject[property];
    }
    return result;
}


let result = unflatten(input);
console.log(result);
