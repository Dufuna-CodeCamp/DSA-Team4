let steps = (arr) => {
  // DECLARATION OF VARIABLES
    let step = 0, currentPos = 0, maxPos = 0;
  // step = number of jumps made
  //currentPos = farthest position that can be reached from the previous step
  //maxPos= farthest position that can be reached from the present index position
 
    for (let i = 0; i < arr.length - 1; i++) {
       maxPos = Math.max(i + arr[i], maxPos);
     if (i == currentPos) {
        step++;
        currentPos = maxPos;
        // a break statement to exit the loop if the last item in the array has been reached
        if(maxPos >= arr.length - 1) {
          break;
        }
      }
    }
    return step;
  }
  arr =  [2,3,1,1,4];
  console.log(steps(arr)); 
 