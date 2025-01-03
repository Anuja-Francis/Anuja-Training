let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`This has run ${count} times`);

  if (count >= 5) {
    clearInterval(intervalId);  
    console.log("Interval stopped");
  }
}, 1000); 