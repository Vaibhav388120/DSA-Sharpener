let nums=[1,2,3,4,5,6,7],k =3;
let swap=(start,end,nums)=>{
    while(start<=end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
        start++;
        end--;
    }
}
swap(0,nums.length-1,nums);
swap(0,k-1,nums);
swap(k,nums.length-1,nums);

console.log(nums);