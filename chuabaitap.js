// let number=[1231,23,123,1231,31,21,1,2,3,4,5,6,7,8,9,10];
// let tong = 0
// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0){
//         tong += number [i]
//     }
// }
// document.write(tong);


// let count =0
// for (let i = 0; i < number.length; i++) {
//     if (number[i] <100){
//         count ++;
//     }
// }
// document.write("so phan tu lon hon 5 la" + count);
let number=[ 1,2,3,4,5,6,7,8,9,10,123,14,124,3654,7657,324];
// function myFunction(count1) {
//     let count =0
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] >5){
//             count ++;
//         }
//     }
// }
// document.write(`so phan tu nho hon 100 la ${count}`);
function myFunction (number,start,stop){
    let count =0
    for (let i = 0; i < number.length; i++) {
        if (number[i]<stop && number[i]>start){
            count ++;
        }
    }return count;
}
count =myFunction(number,0,100);
document.write(count);
