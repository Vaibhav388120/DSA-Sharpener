//Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
// Return the quotient after dividing dividend by divisor.


let divide=(dividend,divisor)=>{
    if(dividend<= -2147483648 && divisor== -1) return 2147483647;
    let sign=(dividend>0===divisor>0)?1:-1;
    [dividend,divisor]=[Math.abs(dividend),Math.abs(divisor)];
    if(divisor===1 || divisor===-1){
        return sign*dividend;
    }
    let result=0;
    while(divisor<=dividend){
        let double=divisor,count=1;
        while(double<=(dividend>>1)){
            double<<=1;
            count<<=1;
        }
        result+=count;
        dividend-=double;
    }
    return sign*result;
} 

console.log(divide(10,3));

