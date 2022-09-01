import PropTypes from "prop-types";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getColors, getRawData } from "../../../../util";
import "./BarGauge.css";

const BarGauge = ({ data, max, title }) => {
    const rawData = getRawData(data)
    const { colorPrimary, colorSecondary } = getColors()

    return (
        <div className="bar-gauge-wrapper">
            <div className="bar-gauge-title">{title}</div>
            <div className="bar-gauge-label">{data}</div>

            <div className="bar-gauge-chart">
                <ResponsiveContainer>
                    <BarChart
                        layout="vertical"
                        margin={{ top: 0, left: 15, right: 15, bottom: 0 }}
                        barGap={-32}
                        data={[{ rawData, max }]}
                    >
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="title" hide />

                        <Bar dataKey="max" fill={colorPrimary} />
                        <Bar dataKey="rawData" fill={colorSecondary} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

BarGauge.propTypes = {
    data: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    title: PropTypes.element.isRequired
}

export default BarGauge
