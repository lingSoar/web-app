import service from "./config"

const fetch = (url: string, payload: Record<string, any> = {}, methos: "GET" | "POST" | undefined = "POST") => {
  return new Promise((resolve, reject) => {
    const promise = methos === "GET" ? service.get(url, { params: payload }) : service.post(url, payload)

    promise.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default fetch