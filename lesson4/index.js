// Arrow function
// When retun or not return ??

// Return khi dat trong block {}
const sum_1 = (a, b) => {
    return a + b
}

// Khong can neu bo di {}
const sum_2 = (a, b) => a + b

// Neu return ra object thi sao
// Boc lai bang ()
const returnObject = item => ({ name: item })

// Arrow function khong co key "this"

// Ex: trong map hay trong filter,... co the su dung vay
let arr = [1, 2, 3, 4, 5, 6]
arr = arr.map(item => ++item)
console.log(arr)