// 객체({})에서는 키와 값의 쌍을 프로퍼티라함
// Map 에서는 엔트리
let m = new Map([
  ["key1", 1],
  ["key2", 2],
]);
//Object.entries [[key,value],[key,value]]

m.set("하나", 1);
// 모든 값이 키값으로 사용가능
m.set(true, "참");
m.set(100, "백");
m.set({ name: "licat", age: 20 }, "ceo");
const user = { name: "licat", age: 20 };
m.set(user, "CEO");

console.log(m);

console.log("=== 값 가져오기 ===");
console.log(m.get("하나")); // 1
console.log(m.get(true)); // 참

console.log("=== 값 확인하기 ===");
console.log(m.has(true)); // true
console.log(m.has("Hello")); // false
console.log(true in m);

// 객체 타입을 키 값으로 사용할 때는, 변수에 저장해놓고 쓴다.
console.log(m.get({ name: "licat", age: 20 })); // undefined
console.log(m.get(user)); // CEO

console.log("=== 사이즈 ===");
const obj = { name: "licat", age: 20 };
console.log(Object.keys(obj).length); // 2

console.log(m.size); // 7

console.log("=== 요소 삭제하기 ===");
m.delete(true);
m.delete(user);

// m.clear(); // 한번에 모든요소 제거
console.log(m);

console.log("=== 맵 순회하기 ===");
// 객체 순회 for in, 순서를 보장하지 않음
console.log("1. for of 순회");
for (const data of m) {
  // [key,value]
  //   console.log(data);
  console.log(data[0], data[1]);
}

console.log("2. 구조 분해 할당을 사용한 순회");
for (const [key, value] of m) {
  console.log(key, value);
}

console.log("=== key, value 값 가져오기 ===");
console.log(m.keys());
console.log(m.values());

for (const k of m.keys()) {
  console.log(k);
}

for (const v of m.values()) {
  console.log(v);
}

const iter = m.values();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
// 크기가 커진다면, next보다 for-of순회를 이용하는게 더 빠르다.

console.log("=== Map은 배열과, 객체로 변환 ===");
let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);
console.log(temp);

console.log("1. Map을 객체로 변환");
const mapToObj = Object.fromEntries(temp);
console.log(mapToObj);

console.log("2. Map을 배열로 변환");
const mapToArr = Array.from(temp);
console.log(mapToArr); // 엔트리를 요소로 갖는 배열이 됨

console.log("3. 객체를 Map으로 변환");
const licat = {
  name: "Licat",
  age: 20,
}; // [['name','Licat'],['age',20]]
const objToMap = new Map(Object.entries(licat));
console.log(objToMap);
