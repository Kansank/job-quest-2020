const array_shift = (arr,direction,number_shift) => {
    let arr_check = [];
    let i = 0;
    let j = 0;

    let count = (arr.length - number_shift);

    switch(direction){
        case 'right':
             if( count < 0){ 
               count = count * -1;
               count = (arr.length - count);
               
            }
           
           for(i = count ; i < arr.length; i++){
                arr_check.push( arr[i] );
    
            }
            
            for(j = 0; j < count; j++){
                arr_check.push( arr[j] );
            }
            
            return arr_check;
            
        case 'left' :
            
            if(number_shift > arr.length){
               number_shift = number_shift-arr.length;
         
            }
            
                 for(i = number_shift ; i < arr.length; i++){
                 arr_check.push( arr[i] );
                 }
                  for(j = 0 ; j < number_shift ; j++){
                    arr_check.push( arr[j] );
                    
                  }

            
            return arr_check;
           
        default : return "wrong";    
        
    }

    return arr;
}
//let arr = [1, 2, 3, 4 ,5];
let arr = ['john', 'jane', 'sarah', 'alex'];
//let direction = 'right';
let direction = 'left';
let number_shift = 0;

const ans = array_shift(arr,direction,number_shift);
console.log(ans);