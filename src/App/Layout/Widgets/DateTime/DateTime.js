import PropTypes from "prop-types"
import React from "react"
import Card from "../Card/Card"
import "./DateTime.css"
import { getDateString, getTimeString } from "./util.js"

const DateTime = ({ data }) => {
    const currentDate = new Date(data * 1000)

    return <Card content={
        <div className="dateTime">
            <div>{getDateString(currentDate)}</div>
            <div className="time">{getTimeString(currentDate)}</div>
        </div>
    } />
}

DateTime.propTypes = {
    data: PropTypes.number.isRequired
}

export default DateTime
