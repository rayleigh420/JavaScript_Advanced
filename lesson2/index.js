// Scope
// Global > Local = Code Block. Bien o scope nho co the truy cap vao scope lon. Nguoc lai thi khong duoc

// Global
const message = "Javascript Advanced";
let mess = message;
var msg = mess;

// Code Block
{
    const age = 20;
    var name = "Le Nhat Duy"        // Nhay ra pham vi gan nhat o ben ngoai
}

// Se khong truy cap duoc
// console.log(age)
console.log(name)

// Local 
const logger = () => {
    var fullName = "Le Nhat Duy"
}
// Khong truy xuat duoc
// console.log(fullName)

// Khi ham duoc khai bao thi no thuoc pham vi global hay trong pham vi hien tai
// Nhung khi "ham duoc goi" thi phan than ham duoc goi thi se tao pham vi moi (dia chi,...)
// Cac ham co the truy cap vao bien duoc khai bao trong pham vi cua no va ngoai pham vi cua no (scope nho co the truy cap vao scope lon bao no)

const year = 2020
// Chi loi khi dat cung ten o cung mot pham vi
// Tim o pham vi hien tai sau do di ra dan
{
    const year = 2021;
    {
        const year = 2022;
        {
            const year = 2023;
            {
                // Lay bien o pham vi gan nhat
                console.log(year)

                // Neu khai bao o day
                // Thi se tim o pham vi hien tai va thay age co khai bao trong block nay thi no la
                // Tuy nhien no thay bien nay khai bao sau khi su dung
                // Nen se loi
                // const year = 2024
            }
        }
    }
}

// Khi thoat goi code block (let, const) hay ham thi bien trong do se bi xoa khoi bo nho
// Voi truong hop closure hay tham chieu tuc la mot ham nhung se return ra bien cua mot ham khac hay mot bien khac o scope khac thi bien do se duoc su dung mai trong bo nho
// Tuc la van giu duoc gia tri cua no 