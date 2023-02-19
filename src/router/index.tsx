import React from "react"
import Home from "../pages/home"
import Search from "../pages/search"

const router = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/search/*",
    element: <Search />
  },
]

export default router