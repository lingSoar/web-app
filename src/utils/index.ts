export const formatDate = (date: string) => {
  if (!date.includes("-")) return date

  const [year, month] = date.split("-")
  const englishMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return [year, englishMonths[+month - 1]]
}

export class Storage {
  private storage: globalThis.Storage

  constructor(type: "localStorage" | "sessionStorage" = "localStorage") {
    this.storage = type === "localStorage" ? window.localStorage : window.sessionStorage
  }

  setStorage(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getStorage(key: string) {
    const value = this.storage.getItem(key)
    try {
      return JSON.parse(this.storage.getItem(key) as string)
    } catch (error) {
      return value
    }
  }

  removeStorage(key: string) {
    this.storage.removeItem(key)
  }

  clearStorage() {
    this.storage.clear()
  }
}

const storage = new Storage("sessionStorage")
export default storage

export const randomNum = (min: number, max: number): number => {
  const num = Math.round(Math.random() * Math.abs(max - min) + Math.min(min, max))

  return num === 0 ? 0 : num
}