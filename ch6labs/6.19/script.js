// Put your solution here
function compareNumbers(a, b){
    //console.log(a-b);
    return a-b;
}

function divideArray(nums){
    let even = [];
    let odd = [];

    //split array into even/odd
    for(i=0; i<nums.length; i++){
        if(nums[i] % 2 ==0){
            even.push(nums[i]);
        }

        else{
            odd.push(nums[i]);
        }
    }
    even.sort(compareNumbers);
    odd.sort(compareNumbers);
    
    //return arrays
    console.log("Even numbers:");
    if(even.length == 0){
        console.log("None");
    }
    else{
        for(i=0; i<even.length; i++){
            console.log(even[i]);
        }
    }

    console.log("Odd numbers:");
    if(odd.length == 0){
        console.log("None");
    }
    else{
        for(i=0; i<odd.length; i++){
            console.log(odd[i]);
        }
    }
}