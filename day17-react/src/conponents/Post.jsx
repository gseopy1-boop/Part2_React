
export default function Post({title="제목", userId="작성자", id="번호", body="내용없음"}) {
  return (
    <div>
        <h3>{title}</h3>
        <ul>
            <li>{userId}</li>
            <li>{id}</li>
            <li>{body}</li>
        </ul>
    </div>
  )
}
