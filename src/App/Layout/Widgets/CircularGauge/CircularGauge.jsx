import PropTypes from "prop-types";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { getColors, getRawData } from "../../../../util";
import "./CircularGauge.css";

const CircularGauge = ({ data, max, title }) => {
    const rawData = getRawData(data)
    const { colorPrimary, colorSecondary } = getColors()

    return (
        <div className="circular-gauge-wrapper">
            <div className="circular-gauge-label">{data}</div>
            <div className="circular-gauge-title">{title}</div>
            <ResponsiveContainer>
                <PieChart margin={{ top: -10, right: 0, bottom: -10, left: 0 }}>
                    <Pie
                        data={[{ v: rawData }, { v: max - rawData }]}
                        dataKey="v"
                        startAngle={200}
                        endAngle={-20}
                        innerRadius="55%"
                        blendStroke
                        cy="50%"
                        cx="50%"
                    >
                        <Cell fill={colorSecondary} />
                        <Cell fill={colorPrimary} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

CircularGauge.propTypes = {
    data: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
}

export default CircularGauge
