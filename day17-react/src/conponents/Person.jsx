
export default function Person({name, age, gender}) {
  //자바스크립트 파일처럼 동작
    // typeof 변수명
    console.log(typeof name)
  console.log(typeof age)
  console.log(typeof gender)
    return (
    <div>
        <h3>이름은:{name}</h3>
        <p>현재 나이:{age}</p>
        <p>내년 나이:{age + 1}</p>
        <p>성별:{gender ? "여성" : "남성"}</p>
    </div>
  )
}
