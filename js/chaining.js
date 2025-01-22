new Promise((resolve) => resolve("First"))
    .then((result) => {
        console.log(result); 
        return "Second"; 
    })
    .then((secondResult) => {
        console.log(secondResult); 
    });

// new Promise((resolve) => resolve("First"))
//     .then((result) => {
//         console.log(result);
//         return new Promise((resolve) => setTimeout(resolve, 1000, "Second"));
//     })
//     .then((secondResult) => {
//         console.log(secondResult); 
//     });
