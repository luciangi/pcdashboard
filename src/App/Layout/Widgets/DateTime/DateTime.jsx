import PropTypes from "prop-types"
import Card from "../Card/Card"
import "./DateTime.css"
import { getDateString, getTimeString } from "./util.js"

const DateTime = ({ date }) => {
    const currentDate = new Date(date * 1000)

    return (
        <Card content={
            <div className="dateTime">
                <div>{getDateString(currentDate)}</div>
                <div className="time">{getTimeString(currentDate)}</div>
            </div>
        } />
    )
}

DateTime.propTypes = {
    date: PropTypes.number.isRequired
}

export default DateTime
