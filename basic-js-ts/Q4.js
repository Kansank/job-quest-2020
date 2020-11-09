const FizzBuzz = (num) => {
    
    let ans_mod3 = num % 3; 
    let ans_mod5 = num % 5; 
    
    
    let ans = ans_mod3 + ans_mod5;
    switch(ans){
        case 0: return "FizzBuzz";
            
    }
    
    switch(ans_mod3){
        case 0: return "Fizz";
            
    }
    
    switch(ans_mod5){
        case 0: return "Buzz";
           
    }
    
}

const ans = FizzBuzz(45);
console.log(ans);