String(10);

var div = 3 ** 3;

console.log(div);

var myFunction = function(x, y) {
    return x + y + 35;
}

console.log(myFunction(10,7));


var yourFunction = function(x, z) {
    return x ** z + 1203;
}

console.log(yourFunction(3, 19));

var myweight = function(height, weight) {
    return "my height is " + height + " and my weight is " + weight
}

console.log(myweight(176, 88));

var introduce = function(name, age,  gender) {
    return "Hi my name is " + name + " i'm " + age + " years old. and i am a " + gender + "."
}

console.log(introduce("gilsoon", 20, "female"));


// 문자열 

var 단어 = "함수야놀자";

console.log(단어[3]);

var 동물 = ["원숭이", "코끼리", "토끼", "호랑이", "개"];

console.log(동물[2]);

var 문자길이 = "dksfanklwnekflakfkalgjkalg;afkcvnzlckfdsafdsfalzsdfkankg";

 console.log(문자길이.length);

 var 문자길이2 = "dksffdsafhjewrjkafhiashfiahganklwnekflakfkalgjkalg;afkcvnzlckfdsafdsfalzsdfkankg";

 console.log(문자길이2.length);

 console.log(단어.length);

 //else if


if (1 * 5 === 5) {
    console.log('맞아')
} else {
    console.log('틀려')
};

if (5 * 5 === 27) {
    console.log('맞아')
} else {
    console.log('틀려')
};

if (1 * 5 === 5) {
    console.log('맞아')
} else {
    console.log('틀려')
};

//

var 변수 = false;

//다른 코드

var 변수 = true;

if (변수) {
     console.log('안녕')
} else {
    console.log('잘가')
};

var 변수 = '펑';

var 변수 = '암호';

if (변수 === '펑') {
    console.log('콰광')
} else {
    console.log('해제되었습니다.')
}

var 변수 = '포도';

if (변수 === '사과') {
    console.log('사과 조아')
} else if (변수 === '오렌지') {
    console.log('오렌지 조아')
} else if (변수 === '수박') {
    console.log('수박조아')
} else {
    console.log('채소 조아')
};
//

var 내점수 = 97;

if (내점수 >= 95) {
    console.log('A' + '+')
} else if (내점수 >= 90) {
    console.log('A')
} else if (내점수 >= 85) {
    console.log('B' + '+')
} else if (내점수 >= 80) {
    console.log('B')
} else if (내점수 >= 75) {
    console.log('C' + '+')
} else if (내점수 >= 70) {
    console.log('C')
} else if (내점수 >= 65) {
    console.log('D' + '+')
} else if (내점수 >= 60) {
    console.log('D')
} else if (내점수 <= 59) {
    console.log('F')
};

//while 반복문 

var 변수 = '딸기';

while ('수박' === 변수) {
    console.log('수박 좋아')
};


//var 조건이 0 이기ㅣ 때문에  '수박 조아'가 무한 반복 

while (조건 < 5) {
    console.log('수박 조아')
    조건 = 조건 + 10;
}

//var 조건을 조건문 안에 수정 시켜줌 >> 변수 '조건'이 0에서 0 + 10이기 때문에 변수 '조건'은 10이 되고 반복문 while의 조건은 5보다 작으면 반복이 안되는 false가 되기 때문에 반복이 안됨.

var 조건 = 0; //1

if (조건 < 5) { //2
    console.log('수박 조아') //3
    조건 = 조건 + 3;
} if (조건 < 5) {
    console.log('수박 조아')
    조건 = 조건 + 3;
} if (조건 < 5) {
    console.log('수박 조아')
    조건 = 조건 + 3;
} else {
    console.log('과일 조아')
};

var 조건 = 0;

while (조건 < 5 ) {
    console.log('딸기 조아')
    조건 = 조건 + 3;
};

for (var 조건 = 0; 조건 < 5; 조건 = 조건 + 3) {
    console.log('과일 조아')
};

for (var 인사 = 0; 인사 < 10; 인사 = 인사 + 4) {
    console.log('안녕하세요.')
};

for (var 작별인사 = 0; 작별인사 < 15; 작별인사 = 작별인사 + 3) {
    console.log('안녕히 계세요.')
};

// 끝말 잇기 

/*var word = '인력거';
while (true) {
    var answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        word = answer;// 맞을 때
        alert('맞았어요!')
    } else {
        //틀렸을 때
        alert('틀렸어요!')
    }
};*/

var newword = '자전거';

for (var newword = '자전거'; true;) {
    var newanswer = prompt(newword)
    if (newword[newword.length - 1] === newanswer[0]) {
        newword = newanswer;
        alert('딩동댕')
    } else {
        alert('땡')
    }
};