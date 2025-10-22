

export default function FixedAuthStatus() {

    let isLogin = false

  return (
    <div>
        <button>
            {isLogin ? "로그아웃 진행" : "로그인 필요"}
        </button>
    </div>
  )
}
