function solution(A, B) {
    let fishStack=[];
     let C = B.length;
     for(let j=0; j<B.length; j++){
       if(B[j] === 1){
         fishStack.push(A[j]);
       }
       else if(B[j] === 0){
        while(fishStack.length > 0){
            if(fishStack[fishStack.length-1] > A[j]){
               C= C-1;
              break;
            }else if(fishStack[fishStack.length-1] < A[j]){
                C= C-1;
             fishStack.pop();
            }
        }
       }
     }
     return C;
}
    
var A = [4, 3, 2, 1, 5];
var B = [0, 1, 0, 0, 0];
console.log(solution(A, B))