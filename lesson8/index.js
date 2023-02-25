// strict mode
// Luon dung o dau "pham vi" co the la pham vi ham, pham vi global...
"use strict";

// Bien fullName, age khong dung const let var de khai bao nhung neu khong dung use strict thi se khong loi
fullName = "Le Nhat Duy"
const func = () => {
    // 'use strict';
    // Co the su dung use strict o trong pham vi ham
    age = 18
}

func();

console.log(fullName)

// Neu khong su dung use strict ti bien age van co the truy cap o ngoai pham vi
// Dangerous
console.log(age)

// Che do nay ta se khong the gan thuoc tinh
const name = Object.freeze({
    fullName: "Le Duy"
})

// Khong co strict mode thi no se khong bao loi
name.fullName = "Karen"

// Bien trung ten hay tham so trung ten no cung khong bao loi
// Mot so tu khoa "nhay cam" nhu private protect public co the xuat hien trong tuong lai thi strict phong truoc dieu do
