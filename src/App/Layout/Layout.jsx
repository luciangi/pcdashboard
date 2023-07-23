import React from "react"
import PropTypes from "prop-types"
import { BsCpu, BsDisplay, BsLightningCharge, BsPercent, BsThermometerHalf } from "react-icons/bs"
import { GiComputerFan, GiCpu, GiMicrochip } from "react-icons/gi"
import { TbWaveSquare } from "react-icons/tb"
import "./Layout.css"
import { generateSensorsHelpers } from "./util"
import Component from "./Widgets/Component/Component"
import DateTime from "./Widgets/DateTime/DateTime"
import Fps from "./Widgets/Fps/Fps"
import Network from "./Widgets/Network/Network"
import Processes from "./Widgets/Processes/Processes"

const Layout = ({ now, data }) => {
    const { getSensorRawData, getSensorData } = generateSensorsHelpers(data.sensors)
    return (
        <div className="layout-wrapper">
            <div className="layout-row">
                <div className="layout-column">
                    <DateTime now={now} />
                </div>
            </div>
            {/* <div className="layout-row">
                <div className="layout-column">
                    <Processes processes={data.processes} />
                </div>
            </div> */}
            <div className="layout-row">
                <div className="layout-column">
                    <Network
                        date={data.date}
                        data={{
                            download: getSensorRawData("Current DL rate"),
                            upload: getSensorRawData("Current UP rate")
                        }}
                    />
                </div>
                <div className="layout-column">
                    <Fps
                        date={data.date}
                        data={{
                            fps: getSensorRawData("Framerate")
                        }}
                    />
                </div>
            </div>
            <div className="layout-row">
                <div className="layout-column">
                    <Component
                        title={<div><BsCpu /> CPU</div>}
                        cg1={{
                            name: <div><BsPercent /> Load</div>,
                            value: getSensorData("Total CPU Utility"),
                            max: 100,
                            allowValueAboveMax: false,
                            enableAlerts: false
                        }}
                        cg2={{
                            name: <div><BsThermometerHalf /> Temp</div>,
                            value: getSensorData("CPU Package"),
                            max: 95,
                            allowValueAboveMax: true
                        }}
                        bg={{
                            name: <div><GiMicrochip /> RAM</div>,
                            value: getSensorData("Physical Memory Load", false),
                            additionalData: getSensorData("Memory Clock", false),
                            max: 100
                        }}
                        additionalData={{
                            heading: ["name", "value"],
                            data: [
                                {
                                    name: <div><TbWaveSquare /> Freq</div>,
                                    value: getSensorData("Core Effective Clocks", false)
                                },
                                {
                                    name: <div><BsLightningCharge /> Pow</div>,
                                    value: getSensorData("CPU Package Power", false)
                                },
                                {
                                    name: <div><GiCpu /> AIO</div>,
                                    value: getSensorRawData("AIO Pump", false) > 0 ? "ON" : "OFF"
                                },
                                {
                                    name: <div><GiComputerFan /> Fan</div>,
                                    value: getSensorData("CPU", false)
                                }
                            ]
                        }} />
                </div>
                <div className="layout-column">
                    <Component
                        title={<div><BsDisplay /> GPU</div>}
                        cg1={{
                            name: <div><BsPercent /> Load</div>,
                            value: getSensorData("GPU Core Load"),
                            max: 100,
                            allowValueAboveMax: false,
                            enableAlerts: false
                        }}
                        cg2={{
                            name: <div><BsThermometerHalf /> Temp</div>,
                            value: getSensorData("GPU Temperature"),
                            max: 90,
                            allowValueAboveMax: true
                        }}
                        bg={{
                            name: <div><GiMicrochip /> VRAM</div>,
                            value: getSensorData("GPU Memory Usage", false),
                            max: 100
                        }}
                        additionalData={{
                            heading: ["name", "value"],
                            data: [
                                {
                                    name: <div><TbWaveSquare /> Freq</div>,
                                    value: getSensorData("GPU Effective Clock", false)
                                },
                                {
                                    name: <div><BsLightningCharge /> Pow</div>,
                                    value: getSensorData("GPU Power", false)
                                },
                                {
                                    name: <div><GiComputerFan /> Fan 1</div>,
                                    value: getSensorData("GPU Fan1", false)
                                },
                                {
                                    name: <div><GiComputerFan /> Fan 2</div>,
                                    value: getSensorData("GPU Fan2", false)
                                }
                            ]
                        }} />
                </div>
            </div>
        </div>
    )
}

Layout.propTypes = {
    data: PropTypes.shape({
        date: PropTypes.number.isRequired,
        processes: PropTypes.array.isRequired,
        sensors: PropTypes.array.isRequired
    }),
    now: PropTypes.number.isRequired
}

export default Layout
