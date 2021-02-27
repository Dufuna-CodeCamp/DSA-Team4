let steps = (arr) => {
    let step = 0, currentPos = 0, maxPos = 0;
 
    for (let i = 0; i < arr.length - 1; i++) {
       maxPos = Math.max(i + arr[i], maxPos);
     if (i == currentPos) {
        step++;
        currentPos = maxPos;
      }
    }
    return step;
  }
  arr =  [2,3,1,1,4];
  console.log(steps(arr)); 
 