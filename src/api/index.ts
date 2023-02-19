import fetch from "./method"

const payload = {
  login_token: "INTERVIEW_SIMPLY2021",
  search_phrase: "",
}

const url = "http://3.141.23.218:5000/interview/keyword_search"

export const fetchSearchData = (search_phrase: string) => fetch(url, { ...payload, search_phrase })
