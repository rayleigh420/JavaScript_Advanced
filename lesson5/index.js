// Primitive Type and Non-Primitive Type
// Primitive Type: kieu nguyen thuy -> tham tri
// Non-Premitive Type: kieu tham chieu: chi luu dia chi khong luu noi dung, giong con tro
// Cac kieu tham chieu la:
// Array
// Object
// Function
// Bat cu phep gan nao voi 3 kieu du lieu tren thi no chi thay doi noi dung trong do khong thay doi gia tri ma bien dang giu
// Gia tri ma bien dang giu chinh la dia chi vung nho
// Viec gan hoac tao nguyen mot object, array moi thi vung nho moi va dia chi moi duoc tao ra

// Di vao vi du
const createNew = (obj) => {
    // De tao ra mot object moi ta phai clone object truyen vao thanh mot object moi thi co the tra ra cai moi
    return { ...obj, name: "Karen", age: 22 }
}

let a = {
    name: "Le Nhat Duy",
    age: 20
}

let b = createNew(a)

console.log(a);
console.log(b);

// Tuy nhien viec dung spread chi tao ra dia chi moi cho mot cap object
// Neu object long object thi khong clone duoc

a = {
    ...a, profile: {
        school: "KHTN",
        address: "HCM"
    }
}
console.log("a Before: ", a)


const createNew2 = (obj) => {
    const o1 = { ...obj, name: "Karen", age: 22 };
    // Viec gan vay se thay doi bien a goc
    // Thong thuong ta se khong lam vay, ta se gan cho obj.profile={} mot object moi nhu vay thi mot vung nho moi se duoc tao ra
    o1.profile.school = "RMIT";
    o1.address = "Quang Ngai"

    // Se khong thay doi bien a goc
    const o2 = {
        ...obj, name: "Karen", age: 21, profile: {
            school: "Havard",
            address: "Viet Nam"
        }
    }
    return [o1, o2]
}

const [b1, b2] = createNew2(a)

console.log("a After: ", a)
console.log("Clone by 2 ways: ", b1, b2)

// Luu y cuoi cung khi nao so sanh 2 object, array voi === thi se so sanh dia chi