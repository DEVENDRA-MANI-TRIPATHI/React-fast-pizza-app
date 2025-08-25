
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

  const error:any = useRouteError()
  const navigate = useNavigate();
  console.log(error);
  return (
    <div>
      <h2>{error.data}</h2>
      <button onClick={()=>navigate(-1)}>
        go back
      </button>
    </div>
  )
}

export default Error