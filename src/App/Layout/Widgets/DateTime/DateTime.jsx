import { useEffect, useState } from "react"
import Card from "../Card/Card"
import "./DateTime.css"
import { getDateString, getTimeString } from "./util.js"

const DateTime = () => {
    const [currentDate, setCurrentDate] = useState(new Date(Date.now()))

    useEffect(() => { setInterval(() => setCurrentDate(new Date(Date.now())), 1000) })

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
}

export default DateTime
