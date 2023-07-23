import React from "react"
import PropTypes from "prop-types"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { getColors, getRawData } from "../../../../util"
import "./CircularGauge.css"

const CircularGauge = ({ data, max, allowValueAboveMax, enableAlerts = true, title }) => {
    const rawData = getRawData(data)
    const pieData = Math.min(getRawData(data), max)
    const { colorPrimary, colorSecondary, colorAlert } = getColors()
    const shouldAlert = enableAlerts && pieData >= max

    return (
        <div className="circular-gauge-wrapper">
            <div className="circular-gauge-label" style={{ color: shouldAlert ? colorAlert : colorSecondary }}>{allowValueAboveMax ? rawData : pieData}</div>
            <div className="circular-gauge-title" style={{ color: shouldAlert ? colorAlert : colorPrimary }}>{title}</div>
            <div className="circular-gauge-chart">
                <ResponsiveContainer>
                    <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                        <Pie
                            data={[{ v: pieData }, { v: max - pieData }]}
                            dataKey="v"
                            startAngle={200}
                            endAngle={-20}
                            innerRadius="55%"
                            blendStroke
                            cy="50%"
                            cx="50%"
                            isAnimationActive={false}
                        >
                            <Cell fill={shouldAlert ? colorAlert : colorPrimary} />
                            <Cell fill={colorSecondary} />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

CircularGauge.propTypes = {
    data: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default CircularGauge
