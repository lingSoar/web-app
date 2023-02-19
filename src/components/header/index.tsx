import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSerchKey, initSerchData, setLoading } from "../../store/action"
import "./index.scss"

const Header = (props: any) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const goHome = () => {
    dispatch(setSerchKey(""))
    dispatch(initSerchData())
    dispatch(setLoading(true))
    navigate("/")
  }

  return (
    <header>
      <div className="title" onClick={goHome}></div>
      <div className="search">
        {props?.children}
      </div>
    </header>
  )
}

export default Header