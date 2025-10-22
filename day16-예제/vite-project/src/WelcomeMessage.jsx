
import './WelcomeMessage.css'


export default function WelcomeMessage() {
    let user = "홍길동"
  return (
    <div className="hello-box">
        <h2>반갑습니다. {user}님</h2>
    </div>
  )
}
