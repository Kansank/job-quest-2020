const fibo = (num) =>{
    let arr = [];
    for (i = 1; i <= num; i++) {
       if(i <= 2){
           arr[i] = 1;
       }else{
           arr[i] = arr[i-1] + arr[i-2]; 
       }
    } 
   return arr[num];
 }
 
 const ans = fibo(12);
 
 console.log(ans);