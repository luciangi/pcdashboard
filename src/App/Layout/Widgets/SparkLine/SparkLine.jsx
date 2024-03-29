import React from "react"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"
import { Legend } from "recharts"
import { ReferenceLine } from "recharts"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getColors } from "../../../../util"
import "./SparkLine.css"

const DATE_RETENTION_LIMIT_SECONDS = 5 * 60

const SparkLine = ({ instant, data, reference, max, showLegend = false }) => {
    const lastInstant = instant - DATE_RETENTION_LIMIT_SECONDS

    const { colorPrimary, colorSecondary } = getColors()
    const idxToColor = {
        0: colorPrimary,
        1: colorSecondary
    }

    const [dataHistory, setDataHistory] = useState([])

    useEffect(() => setDataHistory(dh => [...dh.filter(dh => dh.instant >= lastInstant), { instant, data }]), [lastInstant, instant, data])

    return (
        <div className="sparkline-wrapper">
            <ResponsiveContainer>
                <LineChart
                    data={dataHistory}
                    margin={{ top: 10, left: 0, right: 10, bottom: 10 }}
                >
                    <XAxis
                        type="number"
                        domain={[lastInstant, instant]}
                        dataKey="instant"
                        hide
                    />
                    <YAxis
                        type="number"
                        domain={[0, max ? max : "auto"]}
                        dataKey={`data.${Object.keys(data)[0]}`}
                        stroke={colorSecondary}
                    />

                    {showLegend === true && <Legend />}
                    {reference && <ReferenceLine y={reference} stroke={colorSecondary} strokeWidth={5} />}

                    {Object.keys(data).map((k, idx) => (<Line key={`data.${k}`} dataKey={`data.${k}`} stroke={idxToColor[idx]} strokeWidth={5} dot={false} isAnimationActive={false} name={k} />))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

SparkLine.propTypes = {
    instant: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    reference: PropTypes.number,
    max: PropTypes.number,
    showLegend: PropTypes.bool
}

export default SparkLine
