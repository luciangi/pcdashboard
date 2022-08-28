import PropTypes from "prop-types"
import "./DateTime.css"
import { getDateString, getTimeString } from "./util.js"

const DateTime = ({ date }) => (
    <div className="dateTime">
        <div>{getDateString(date)}</div>
        <div className="time">{getTimeString(date)}</div>
    </div>
)

DateTime.propTypes = {
    data: PropTypes.instanceOf(Date).isRequired
}

export default DateTime
