import React from "react"
import PropTypes from "prop-types"
import Card from "../Card/Card"
import "./DateTime.css"
import { getDateString, getTimeString } from "./util.js"

const DateTime = ({ now }) => (
    <Card content={
        <div className="dateTime">
            <div>{getDateString(now)}</div>
            <div className="time">{getTimeString(now)}</div>
        </div>
    } />
)

DateTime.propTypes = {
    now: PropTypes.number.isRequired
}

export default DateTime
