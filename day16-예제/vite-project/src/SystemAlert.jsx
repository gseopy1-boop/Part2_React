

export default function SystemAlert() {
    let isSystemDown = true 

  return (
    <div>
        {
            isSystemDown ? <div className='error-alert'>메시지</div> : null
        }
    </div>
  )
}
