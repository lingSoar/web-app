import { combineReducers } from "redux"
import { SET_SEARCH_KEY, SET_SEARCH_DATA, INIT_SEARCH_KEY, SET_LOADING, SEARCH_KEY } from "../constant"
import storage from "../../utils"

interface IActions {
  type: string
  payload: string
}

const initSearchkey = storage.getStorage(SEARCH_KEY) || ""
const searchkey = (state = initSearchkey, { type, payload }: IActions) => {
  switch (type) {
    case SET_SEARCH_KEY:
      storage.setStorage(SEARCH_KEY, payload)
      return payload
    default:
      return state
  }
}

const initSerchData = [1, 2, 3, 4]
const searchData = (state = initSerchData, { type, payload }: IActions) => {
  switch (type) {
    case SET_SEARCH_DATA:
      return payload
    case INIT_SEARCH_KEY:
      return initSerchData
    default:
      return state
  }
}

const isLoading = (state = true, { type, payload }: IActions) => {
  switch (type) {
    case SET_LOADING:
      return payload
    default:
      return state
  }
}

export default combineReducers({
  searchkey,
  searchData,
  isLoading
})