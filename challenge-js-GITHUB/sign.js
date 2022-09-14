const sign = (num) => (num>0) ? 1 : (num<0) ? -1 : 0

const sameSign = (num, num2) => (((num>0) && (num2>0)) || ((num<0) && (num2<0)) ||((num==0) && (num2==0)) ) ? true : false 

