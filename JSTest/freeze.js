// freeze()를 쓰면 객체를 수정 불가하게 만듦. 
// 엄밀히 말하면 프로퍼티의 값을 수정불가
// 하지만 값이 객체(의 주소)라면 그 객체의 프로퍼티를 수정하는 건 막지 못한다.
// freeze를 푸는 방법은 제공되지 않는다. 복제해서 사용해야 함
var a = {val:10, score:[1, 2]}
a.name = "kim"
Object.freeze(a)
a.val = 5
//nested object는 수정 가능?
a.score.push(3) //가능! 주의!
// score도 바꾸지 못하게 하고 싶으면 걔도 얼려놓자
Object.freeze(a.score)
// a.score.push(4) //에러 발생 - object is not extensible
console.log(a)

// const와 freeze()의 차이점
const o1 = {name:'lee'}
Object.freeze(o1)
//여기서 const는 o1이 가리키는 객체를 고정한 것이고
//freeze()는 o1이 가리키는 객체의 프로퍼티를 고정한 것  
//const와 freeze()를 병행해 사용하면 object의 immutability를 강력히 규제할 수 있음

const o2 = o1
o2.name = "park"
console.log(o1, o2)  

var data = [{name:"Sam1"}, {name:"Sam2"},]
var data2 = [{name:"Sam3"}]
var newData = data.concat(data2)
console.log(data)
console.log(data2)
console.log(newData)
