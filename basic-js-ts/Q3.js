const secondMax = (arr) => {
    let max = 0;
    let ans = 0;
    let secondMax = 0;
    switch(arr.length){
      case 1: 
      secondMax = arr[0];
      return secondMax;
      
  
      case 0: return "Error!";
      
  
      default : 
        max = arr[0];
        secondMax = arr[0];
        for( i = 0; i< arr.length; i++){
          if(i != (arr.length-1) ){
            let j = i;
            
            if( max < arr[j+1]){
             
              max = arr[j+1];
  
            }
        
          }
        }
  
        for(i = 0; i< arr.length; i++){
          if(i != (arr.length-1) ){
            j = i;
            
            if( (secondMax < arr[j+1]) && (arr[j+1] != max) ){
             
              secondMax = arr[j+1];
  
            }
        
          }
        }
        return secondMax;
     
   
  }
  }
  let arr = [];
  const ans = secondMax(arr);
  console.log(ans);