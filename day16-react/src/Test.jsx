// 1. 내가 집접 태그를 만들려면 먼저 자바스크립트 함수를 가져온다
// 단축키 rfc

import React from 'react'

export default function Test() {

    const name = '경섭'
  return (
    <div>
        {/* 2. 내가 원하는 태그들을 작성 */}
        <h1>안녕! {name}</h1>
    </div>
  )
}
// 3. 위에서 만든 태그들을 App 메인화면에 추가하기!