// Bài 5
let str = 'Đây là chuỗi ví dụ của bài 5'
document.getElementById('initString').innerHTML = 'Chuỗi gốc:' + ' ' + '"' + str + '"'
document.getElementById('result').innerHTML = 'kết quả:' + ' ' + str.search("chuỗi")


const repeat = str.match(/à/g)
document.getElementById('repeat').innerHTML = 'kết quả trả về 1 mảng có các phần từ là chuỗi được lặp lại từ mảng gốc: => số lần lặp lại = repeat.length =' + ' ' + 'Số lần lặp lại của chuỗi "à" =' + ' ' + repeat.length
console.log(repeat.length)
