onmessage = function(event) {
    if (event.data === "start") {
        let sum = 0;
        
        for (let i = 0; i < 1000000; i++) {
            sum = sum + i;
        }
        
        postMessage("Sum of numbers: " + sum);
    }
};
