const food = ["🧀", "🥐", "🍖", "🥞"]; // 배열 리터럴로 배열 생성
console.log(food);

// 배열 아이템을 참조(선택)하는 방법
console.log(food[0]); // 치즈
console.log(food[3]); // 팬케이크
console.log(food.length); // 4 // .찍어보면 사용할 수 있는 함수, 속성이 쭉 나옴
console.log("마지막 아이템", food[food.length - 1]);

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

// const food = ["🧀", "🥐", "🍖", "🥞"];
// 인덱스로 추가 - 좋지 않은 방법
food[6] = "🍎"; // 차례대로 들어가는 것이 아니라 중간에 빈 아이템이 있는 상태로 추가
console.log(food);

// 확실하게 제일 마지막에 추가하고 싶을 때 사용
food[food.length] = "🥝";
console.log("키위 추가", food);

// 기존 아이템 업데이트
food[2] = "🍋";
console.log("레몬 추가", food);

// 인덱스로 삭제
delete food[1]
console.log("2번째 아이템 삭제", food);