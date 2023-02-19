import React, { useMemo, useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Skeleton from "@mui/material/Skeleton"
import Header from "../../components/header"
import SearchInput from "../../components/searchInput"
import Chart from "../../components/charts"
import { setSearchData } from "../../store/action"
import IStore from "../../store/store"
import { formatDate } from "../../utils"
import "./index.scss"

const Search = () => {
  const dispatch = useDispatch()
  const { searchData, isLoading, searchkey } = useSelector((store: IStore) => store)

  useEffect(() => {
    dispatch(setSearchData(searchkey) as any)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderCard = useCallback((i: Record<string, any>) => {
    const { search_msv: data, name, growth } = i || {}
    const [startYear, startMonth] = formatDate(data[0]?.date)
    const [endYear, endMonth] = formatDate(data.at(-1)?.date)

    return (
      <div className="card-box">
        <div>
          <h2>{name}</h2>
          <h3>Growth {growth}%</h3>
        </div>
        <div>
          <div className="chart-content">
            <Chart data={data} />
          </div>
          <h3>{startMonth} {startYear} - {endMonth} {endYear}</h3>
        </div>
      </div>
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchData])

  const skeleton = useMemo(() => (
    <div className="skeleton" >
      <Skeleton width="75%" height="1.1rem" />
      <Skeleton width="35%" height="1.1rem" style={{ margin: "6px 0 8px" }} />
      <Skeleton variant="rectangular" className="skeleton-rectangular" />
    </div>
  ), [])

  return (
    <div className="search">
      <Header>
        <SearchInput />
      </Header>
      <section>
        <div className="content">
          <h2>Related product trends</h2>
          <div className="card-content">
            {
              searchData.map((i: any, index: number) => (
                <div className="item" key={index}>
                  {isLoading ? skeleton : renderCard(i)}
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Search