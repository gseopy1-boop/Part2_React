// Product.jsx
import React from 'react'

export default function Product(props) {
  return (
        /*
    props === {title : "아메리카노"}
    props === {title : "카페라떼",price : 3000}

    props를 쓰면 코드가 조금 길어지니깐 짧게 
    변경하기 위해서 매개변수 자리에 {}중괄호를 
    달아서 가독성도 좋아지고 짧게 변수명만 쓸 수
    있게 해준다.
    */
    
    <div>
        <h3>{props.title}</h3>
        <p>{props.price}</p>
    </div>
  )
}