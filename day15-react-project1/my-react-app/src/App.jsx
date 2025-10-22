
// 1. css파일 연결
import "./App.css"

import React from 'react'

export default function App() {
  return (
    <div className="app-body">
      <div className="image-container">
        <img src="data:image/jpeg;base64,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"
             alt="주먹밥쿵야 이미지" />
      </div>
      <div className="main">
        <h1>Hello</h1>
        <h2>I'm <span className="highligh">Dream Coder</span>, Yang</h2>
        <p>A software egggggggggggggggggggggg</p>
      </div>
        <button className="btn">Contact Me</button>
    </div>
  )
}





// // css 파일을 포함해야된다.
// // 현재 내 파일을 기준으로 App.css파일을 포함하겠다.

// import "./App.css";

// function App() {
  
//   return (
//     <>
//     {/* div태그를 이용해서 팝업창 
//       html 에서 css 셀렉터  class="클래스명"
//       리액트는 css 셀럭터  className="클래스명"
//     */}
//     <div className="box">
//       팝업창
//     </div>
//     <div className="box2">
//       두번째 박스
//     </div>

//     {/*  */}

//     </>
//   )
// }

// export default App

// /*
//   <h3>처음 만나는 리액트 프로젝트 구성</h3>
//       <ul>
//         <li>node_modules - 리액트에서 제공하는 라이브러리들의 모음</li>
//         <li>위에 node_modules는 반드시 생성되야된다.</li>
//         <li>핵심 폴더 - src </li>
//         <li> 안에 app.jsx 메인화면이다! (화면 구조 담당)</li>
//         <li> assets 폴더는 이미지,css,폰트등  </li>
//         <li>index.css - 전체 스타일 초기화용! </li>
//         <li>main.jsx - 프로젝트 시작점 </li>
//       </ul>

//       <ol>
//         <li>리액트 실행시 순서</li>
//         <li>cd my-react-app 안으로 이동 해야된다. 
//             이름이 길면 tab키를 누른다.</li>
//         <li>경로 변경된걸 확인 </li>
//         <li> 실행하는 명령어 - npm run dev</li>
        
//       </ol>

//       <div>
//         <h3>Hello world</h3>
//       </div>

// */