var reg = /\d/;
console.log(reg.test('你好')) // 查看后边的字符串中有没有满足正则的字符
console.log(reg.test('你好234234'))
console.log(reg.test('你好2'))
console.log(reg.test('0你好'))
console.log(reg.test('你9好'))

var reg2 = /\D/;
console.log(reg2.test('你好'))
console.log(reg2.test('你好reg234reg234'))
console.log(reg2.test('你好reg2'))
console.log(reg2.test('0你好'))
console.log(reg2.test('666'))

var reg3 = /\w/;
console.log(reg3.test('你好'))
console.log(reg3.test('你好reg334reg334'))
console.log(reg3.test('你好reg3'))
console.log(reg3.test('0你好'))
console.log(reg3.test('666'))

var reg4 = /^\d/;
console.log(reg4.test('你好'))
console.log(reg4.test('你好reg434reg434'))
console.log(reg4.test('你好reg4'))
console.log(reg4.test('0你好'))
console.log(reg4.test('666'))

var reg5 = /\d$/;
console.log(reg5.test('你好'))
console.log(reg5.test('你好reg434reg434'))
console.log(reg5.test('你好reg4'))
console.log(reg5.test('0你好'))
console.log(reg5.test('666'))

var reg6 = /^\d$/;
console.log(reg6.test('你好'))
console.log(reg6.test('你好reg634reg634'))
console.log(reg6.test('你好reg6'))
console.log(reg6.test('0你好'))
console.log(reg6.test('666'))

var reg7 = /\./;
console.log(reg7.test('123'))
console.log(reg7.test('123.52'))

var reg8 = /[ab]/;
var reg9 = /[0-9a-zA-Z]/;
var reg10 = /18|19/;
var reg11 = /hello(?=qqq)/;