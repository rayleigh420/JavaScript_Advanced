// IIFE - Imediately Invoked Function Expression - Seft-Invoking Function
// Bieu thuc tao ra mot ham va ham do duoc goi ngay lap tuc

(() => {
    console.log("Hello Javascript Adavanced")
})();           // Phai co dau cham phay

// Nen dung dau cham phay phia truoc
; ((mssg) => {
    console.log("Message: ", mssg)
})("Karen")

// Ham ben trong () nam trong mot scope khac hoan toan "Private"
// Thuong duoc su dung de chay ngay lap tuc. Duoc su dung de tranh truong hop dung bien toan cuc vi no private tao ra scope moi
// Dung de viet thu vien library

// Co the dua dau () o ngoai vao trong
// De lam duoc thi de nhung operator nhu + - .. de ep function tra ra mot function va goi
!function () {
    console.log("Imediately")
}()

// Khong cho nguoi dung truy cap vao thuoc tinh khong cho phep (tinh dong goi cua OOP)