let solution = (N, A) => {
    //Generating and array of length <=> "N" , Where element in the array is initialized as 0
    let counters = Array(N).fill(0); 

    // Checks the array and assigns it's maximum number to "maxNumber"
    var maxNumber = Math.max(...counters);
    
    for (i = 0; i < A.length; i++) {
        // Initializing index i for array A.
        //  Since index is 0 based such that A[i]-1 = A.length 
        let index = A[i] - 1;

         if(index !== N ) {
            counters[index]++;
            if (counters[index] > maxNumber){
                maxNumber = counters[index]
            } 
        }else {
            counters = Array(N).fill(maxNumber)
        }
    }
    return counters
 }
 
 test = [3,4,4,6,1,4,4];
 console.log(solution(5, test));
