import React from "react"
import PropTypes from "prop-types"
import "./Layout.css"
import DateTime from "./Widgets/DateTime/DateTime"
import Processes from "./Widgets/Processes/Processes"

const Layout = ({ data }) => (
    <div className="container">
        <div className="item">
        </div>
        <div className="item">
            <DateTime data={data.date} />
        </div>
        <div className="item">
        </div>
        <div className="item">
            <Processes data={data.processes} />
        </div>
        <div className="item">
        </div>
        <div className="item">
        </div>
        <div className="item">
        </div>
    </div>
)

Layout.propTypes = {
    data: PropTypes.shape({
        date: PropTypes.number.isRequired,
        processes: PropTypes.array.isRequired,
        sensors: PropTypes.object.isRequired
    })
}

export default Layout
