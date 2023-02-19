import React, { useEffect, useRef, useCallback } from "react"
import { Area } from "@antv/g2plot"
import { randomNum } from "../../utils"
import "./index.scss"

interface IData {
  date: string
  sv: number
}
interface IChart {
  data: Array<IData>
}

const ChartComponent: React.FC<IChart> = (props) => {
  const { data } = props
  const chartRef: any = useRef(null)

  const createAreaPlot = useCallback((element: HTMLElement) => {
    const colors = ["#8ab4d8", "#8ac0ab"]
    const start = data[0]?.sv
    const end = data[data?.length - 1]?.sv
    // const min = data?.slice()?.sort((a, b) => a.sv - b.sv)[0]?.sv
    const index = randomNum(0, 1)
    const color = colors[index]

    return new Area(element, {
      data,
      autoFit: true,
      xField: "date",
      yField: "sv",
      xAxis: {
        label: null, // 隐藏x 轴的坐标轴标签
        range: [0, 1], // 展示区范围
      },
      yAxis: {
        label: null, // 隐藏y 轴的坐标轴标签
        grid: null // 隐藏辅助线
      },
      annotations: [
        // 起点、终点一线天
        {
          type: "line",
          start: ["min", start],
          end: ["max", end],
          style: {
            stroke: color,
            lineDash: [1],
            fill: color,
          },
        },
        /* TODO: 交界线着色 */
        // {
        //   type: "regionFilter",
        //   start: ["min", end],
        //   end: ["max", min],
        //   style: {
        //     fill: color,
        //     fillOpacity: 0.3,
        //   },
        //   top: false,
        //   color: color,
        //   apply: ["area"],
        // },
      ],
      color: color
    })
  }, [data])

  useEffect(() => {
    const areaPlot = createAreaPlot(chartRef.current)
    areaPlot.render()

    return () => {
      areaPlot.destroy()
    }
  }, [createAreaPlot])

  return <span className="chart" ref={chartRef}></span>
}

export default ChartComponent




