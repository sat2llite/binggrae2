const fruits = ["🍇", "🍎", "🍋", "🍒"]; //배열 리터럴로 배열 생성
console.log(fruits);

// 특정한 오브젝트가 배열인지 아닌지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({})); // 빈 오브젝트 - false ([]는 true)
console.log("");

// 배열 안에 특정한 아이템의 위치(인덱스)를 찾을 때
// 배열명.indexOf(item)
console.log("🍋의 인덱스는?", fruits.indexOf("🍋"));
console.log("");

// 배열 안에 특정한 아이템이 있는지 체크
console.log("🍎 존재 여부 ? : ", fruits.includes("🍎")); // true
console.log("🍤 존재 여부 ? : ", fruits.includes("🍤")); // false
console.log("");

// 아이템 추가 - 맨 뒤쪽
fruits.push("🥝", "🥝"); // 여러 개 추가도 가능. 배열 자체를 수정 (업데이트)
console.log("🥝 추가", fruits);
console.log("아이템 갯수는?", fruits.length);
console.log("");

// 아이템 추가 - 맨 앞쪽
fruits.unshift("🦪", "🦪"); // 여러 개 추가도 가능. 배열 자체를 수정 (업데이트)
console.log("🦪 추가", fruits);
console.log("아이템 갯수는?", fruits.length);
console.log("");

// 아이템 제거 - 맨 뒤쪽
let lastItem = fruits.pop();
console.log("맨 뒤 index 제거", fruits); // 배열 자체를 수정 (업데이트)
console.log("제거된 아이템은?", lastItem);
console.log("");

// 아이템 제거 - 맨 앞쪽
lastItem = fruits.shift();
console.log("맨 앞 index 제거", fruits); // 배열 자체를 수정 (업데이트)
console.log("제거된 아이템은?", lastItem);
console.log("");

// 중간 아이템을 추가 또는 삭제
// 삭제할 갯수가 생략되면 해당 인덱스 뒤의 인덱스 전부 삭제
// 배열.splice(시작 인덱스, 삭제될 갯수)
let deleted = fruits.splice(1, 2); // 1번 인덱스(2번째)부터 2개 삭제
console.log("중간 제거", fruits);
console.log("제거된 아이템은?", deleted);
fruits.splice(1);
console.log(fruits);
