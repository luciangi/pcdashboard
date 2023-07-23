import React from "react"
import PropTypes from "prop-types"
import BarGauge from "../BarGauge/BarGauge"
import Card from "../Card/Card"
import CircularGauge from "../CircularGauge/CircularGauge"
import Table from "../Table/Table"
import "./Component.css"

const Component = ({ title, cg1, cg2, bg, additionalData }) => (
    <Card
        title={title}
        content={
            <div>
                <div className="component-row">
                    <div className="component-column-1">
                        <CircularGauge title={cg1.name} data={cg1.value} max={cg1.max} allowValueAboveMax={cg1.allowValueAboveMax} enableAlerts={cg1.enableAlerts}/>
                    </div>
                    <div className="component-column-1">
                        <CircularGauge title={cg2.name} data={cg2.value} max={cg2.max} allowValueAboveMax={cg2.allowValueAboveMax} enableAlerts={cg1.enableAlerts}/>
                    </div>
                    <div className="component-column-2">
                        <Table hideHeading={true} heading={additionalData.heading} body={additionalData.data} />
                    </div>
                </div>
                <div className="component-row">
                    <div className="component-column-1">
                        <BarGauge title={bg.name} data={bg.value} max={bg.max} additionalData={bg.additionalData} />
                    </div>
                </div>
            </div>
        } />
)

const gaugePropType = PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    value: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired
}).isRequired

Component.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    cg1: gaugePropType,
    cg2: gaugePropType,
    bg: gaugePropType,
    additionalData: PropTypes.shape(
        PropTypes.shape({
            heading: PropTypes.array.isRequired,
            data: PropTypes.arrayOf({
                icon: PropTypes.string,
                name: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    ).isRequired
}

export default Component
