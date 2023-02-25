// Hoisting
// var

{
    console.log(age);

    // Phan "khai bao" var age se duoc dua len dau, tuy nhien phan gan gia tri thi van o do
    var age = 22;
}

// const let function
{
    console.log(name);

    // let voi const van duoc hoist len tren tuy nhien no se khong duoc tao gia tri undefined nhu var
    // No se duoc dua vao temporal dead zone: vung tam thoi khong truy cap duoc cho den khi ta thuc su gan no
    let name = "Le Nhat Duy"
}

// Ve mat co ban hoist sinh ra dung de xac dinh pham vi

{
    var name = 'karen'
    {
        const name = 'rayleigh'
        {
            {
                console.log(name)
                // Voi hoist thi phan khai bao se duoc dua len dau khi do console.log(name) se khong can phai nhay ra cac pham vi khac de tim bien name vi no biet trong pham vi hien tai da co bien name ton tai roi
                let name = "kekei"
            }
        }
    }
}