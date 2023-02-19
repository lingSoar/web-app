import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SearchIcon from "@mui/icons-material/Search"
import { setSerchKey, setSearchData,setLoading } from "../../store/action"
import IStore from "../../store/store"
import "./index.scss"

const SearchInput = () => {
  const searchkey = useSelector(store => (store as IStore).searchkey)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeSearchKey = (e: any) => {
    dispatch(setSerchKey(e?.target?.value))
  }

  const handleTransition = (e?: any) => {
    const key = searchkey.trim()
    const path = `/search${key && "/"}` + key.replaceAll(/\s+/g, "+")
    if (!e) return getData(key, path)

    if (e.key === "Enter") {
      getData(key, path)
      e.preventDefault()
    }
  }

  const getData = (key: string, path: string) => {
    dispatch(setLoading(true))
    dispatch(setSearchData(key) as any)

    navigate(path)
  }

  return (
    <div className="searchInput">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60vw" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          placeholder="Search for new products in 961K stores"
          value={searchkey}
          onChange={changeSearchKey}
          onKeyDown={(e) => handleTransition(e)}
        />
      </Box>
      <Button
        size="small"
        onClick={() => handleTransition()}
        style={{
          height: "100%",
          border: "1.5px solid #ccc",
          display: "block",
        }}>
        <SearchIcon
          fontSize="medium"
          style={{
            transform: "translateY(15%)"
          }} />
      </Button>
    </div>
  )
}

export default SearchInput