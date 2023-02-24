import React from "react"
import PropTypes from "prop-types"
import { GiStack } from "react-icons/gi"
import Card from "../Card/Card"
import SparkLine from "../SparkLine/SparkLine"

const Fps = ({ date, data }) => (
    <Card
        title={<div><GiStack /> FPS {data.fps ? data.fps : ""}</div>}
        content={
            <SparkLine
                instant={date}
                data={data}
                reference={60}
                max={120}
            />
        } />
)

Fps.propTypes = {
    date: PropTypes.number.isRequired,
    data: PropTypes.shape({ fps: PropTypes.number.isRequired }).isRequired
}

export default Fps
