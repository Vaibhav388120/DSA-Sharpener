// You are maintaining a register of students roll numbers which is a array the roll numbers can be in sorted or unsorted manner .
// The task is to arrange all the roll numbers in ascending order , Find the number of changes required to do so
// that number should be minimum

var total_swaps=function(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        let min=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        if(min!==i){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
            count++;
        }
    }
    return count;
}
console.log(total_swaps([2,8,5,4]));