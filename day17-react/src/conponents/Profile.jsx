// <Profile name="에리나" dept="풀스택 개발자" years="5년차"/>
export default function Profile({name, dept, years}) {
  return (
    <div>
        <h3>개발자 이름 : {name}</h3>
        <p>부서 : {dept}</p>
        <p>입사 : {years}</p>
    </div>
  )
}
    