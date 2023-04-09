// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

var trap=function(height){
    const max_height_left=new Array(height.length);
    const max_height_right=new Array(height.length);
    max_height_left[0]=height[0];
    for(let i=1;i<height.length;i++){
        max_height_left[i]=Math.max(max_height_left[i-1],height[i]);
    }
    max_height_right[max_height_right.length-1]=height[height.length-1];
    for(let i=height.length-2;i>=0;i--){
        max_height_right[i]=Math.max(max_height_right[i+1],height[i]);
    }
    let volume=0;
    for(let i=0;i<height.length-1;i++){
        volume+=Math.min(max_height_left[i],max_height_right[i])-height[i];
    }
    return volume;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));