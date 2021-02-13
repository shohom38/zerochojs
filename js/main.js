document.write("Hello World");

5 == 5

console.log(5 === 5);
console.log(5 !== '5');
console.log('5' === '5');

console.log(7 !== "7");

console.log(1645 * 3425);

console.log(3 * 5);

var 결과 = 15;
//variable

console.log(결과);

var 이름 = "홍길동";
var 나이 = 15;
var 사는곳 = "서울특별시";
var 키 = 176;
var 운동 = ["농구", '배구', '야구', '축구'];

let first = 운동[0];

//배열 접근

console.log("홍길동");
console.log(이름, 결과);

console.log(이름, 나이, first, 키, 사는곳);

// 변수 숫자는 첫 글자로는 안됨, $ 나 _ 는 변수로 선언 가능

var $ = "dollor";

console.log($);

console.log($ === 결과);

var 결과 = 7 * 3;

console.log(15 === 결과);
console.log(21 === 결과);

var 나누기 = 43221 / 43;

console.log(나누기);

var 빈값

빈값 = "hoho";

console.log(빈값);

빈값 = undefined;

console.log(빈값);

빈값 = "Wow";

console.log(빈값);

빈값 = 'drunken';

console.log(`안녕하세유`);

console.log(null == undefined);

console.log(null === undefined);

// == 와 === 의 차이는 뭘까.


var 길동 = {
    name: "홍길동",
    age: 19,
    nation: 'South Korea',
    favorite: 'exercise'
};

console.log(길동);

console.log(길동.name);

console.log(결과);

//반복문 while , for

console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');


var 값 = 0;

값 < 100;

while (값 < 100) {
    console.log('안녕하시오')
    값 = 값 + 1 
}

var 내배고픔 = 0;

console.log(내배고픔 === 10);

while (내배고픔 < 50) {
    console.log('아~~배고파')
    내배고픔 = 내배고픔 + 2
};

var brainstorm = 0;

while (brainstorm < 5) {
    console.log('wowwow!!')
    brainstorm = brainstorm + 1
};

var scorn = 30;

while (scorn < 60) {
    console.log('squirrel!!!')
    scorn = scorn + 3
};

var buynotebook = 0;

while (buynotebook < 10) {
    console.log('yeah! buybuybuy!')
    buynotebook = buynotebook + 1
};

var nono = 150;

while (nono > 1) {
    console.log('whywhy!')
    nono = nono - 1
};

/*
자료형 숫자 불린 문자 undefined null

변수(var)

연산자 < > >= <== === !== + * / -  ** << 제곱 연산자 (== 와 !+ )는 아직은 사용 x

연산자의 우선순위 = 이 제일 마지막 실행
----------
조건문 if 
if (조건) {

} else {

};
----------

반복문 while 
while (조건) {

};

*/