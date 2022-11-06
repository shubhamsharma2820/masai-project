arry = [1,2,3,4,5];

function calculateAverage(array) {
    if(array.length ===0){
        return 0;
    }else{
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
}

console.log(calculateAverage(arry));