// Closure: mot ham duoc tao ra ghi nho pham vi no duoc tao va co the tham chieu den bien nam ben ngoai no
// Khai niem nay kha hien nhien. Viec su dung closure ra ly thuyet hoa no thoi

const count = () => {
    // c se tro thanh private
    // Co the mo phong OOP
    let c = 0

    // Tham chieu bien c o ben ngoai
    const increase = () => {
        return ++c
    }
    return increase
}

// Viec goi nhu vay thi ham increase nhu vay thi no se nho pham vi no duoc tao ra
// Khi goi thi nos se tham chieu truc tiep den pham vi do
const countFunction = count();
console.log(countFunction())

// Bien duoc tham chieu trong closure thi se khong bi xoa khi ham cha thuc thi xong

//Ex:

// const log = () => {
//     let a = 0;

//     const logA = () => {
//         console.log(a)
//     }

//     const increse = () => {
//         a++;
//     }

//     return [logA, increse];
// }

// const [logger, increase] = log();
// logger();
// increase()
// logger();
// increase();
// logger();