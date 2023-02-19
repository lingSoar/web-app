import { SET_SEARCH_KEY, SET_SEARCH_DATA, INIT_SEARCH_KEY, SET_LOADING } from "../constant"
import { fetchSearchData } from "../../api"

export const setSerchKey = (payload: string) => ({ type: SET_SEARCH_KEY, payload })

export const setSearchData = (searchKey: string) => {
  return async (dispatch: any) => {
    const res: any = await fetchSearchData(searchKey)

    dispatch({ type: SET_SEARCH_DATA, payload: res?.product_trends })
    dispatch({ type: SET_LOADING, payload: false })
  }
}

export const initSerchData = () => ({ type: INIT_SEARCH_KEY })
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload })


