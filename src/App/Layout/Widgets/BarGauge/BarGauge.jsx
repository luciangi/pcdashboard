import React from "react"
import PropTypes from "prop-types"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getColors, getRawData } from "../../../../util"
import "./BarGauge.css"

const BarGauge = ({ data, additionalData, max, title }) => {
    const rawData = getRawData(data)
    const { colorPrimary } = getColors()

    return (
        <div className="bar-gauge-wrapper">
            <div className="bar-gauge-title">{title}</div>
            <div className="bar-gauge-label">{data} {additionalData ? `(${additionalData})`  : ""}</div>

            <div className="bar-gauge-chart">
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        margin={{ top: 0, left: 15, right: 15, bottom: 0 }}
                        barGap={-15}
                        data={[{ rawData, max }]}
                    >
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="title" hide />

                        <Bar dataKey="max" stroke={colorPrimary} isAnimationActive={false} strokeWidth={3}/>
                        <Bar dataKey="rawData" fill={colorPrimary} isAnimationActive={false} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

BarGauge.propTypes = {
    data: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    title: PropTypes.element.isRequired
}

export default BarGauge
