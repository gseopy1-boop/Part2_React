import './App.css'
import Fruits from './conponents/fruits.jsx'
import Test1 from './conponents/Test1.jsx';

function App() {

  // let product = {name : "컴퓨터",
  //               price : 1000000};


  // // // 배열을 props로 넘기기
  // // let fruits = ["🍎 사과", "🍌 바나나", "🍇 포도"];


  // // let fruitsInfo = {
  // //   name : "🍎",
  // //   price : 2000
  // // };
  // // let fruitsInfo2 = {
  // //   name : "🍌",
  // //   color : "yellow"
  // // };

  //   // 객체는 여러 정보를 묶어서 한번에 보낼때
  // // Object 


  // let student = {
  //   name1 : "이서희",
  //   age : 20,
  //   shcool : "동탄고등학교"
  // }

  

  return (
    <>
      
      <Test1 items1={student} />    
      





      {/* <Fruits items={fruitsInfo} />
      <Fruits items={fruitsInfo2} /> */}
    </>
  )
}

export default App

{/* 객체 형태 
      <FruitList itmes={fruitInfo}/>*/}
{/* 배열 형태 
  <Fruits items={fruits} /> */}