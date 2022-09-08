import PropTypes from "prop-types"
import { BsCpu, BsDisplay, BsLightningCharge, BsPercent, BsThermometerHalf } from "react-icons/bs"
import { GiComputerFan, GiCpu, GiMicrochip } from "react-icons/gi"
import { TbWaveSquare } from "react-icons/tb"
import "./Layout.css"
import { generateSensorsHelpers } from "./util"
import Component from "./Widgets/Component/Component"
import DateTime from "./Widgets/DateTime/DateTime"
import Fps from "./Widgets/Fps/Fps"
import Processes from "./Widgets/Processes/Processes"
import Network from "./Widgets/Network/Network"

const Layout = ({ now, data }) => {
    const { getSensorRawData, getSensorData } = generateSensorsHelpers(data.sensors)
    return (
        <div className="layout-container">
            <div className="layout-column">
                <DateTime now={now} />
                <Processes processes={data.processes} />
                <Network
                    date={data.date}
                    data={{
                        download: getSensorRawData("Current DL rate"),
                        upload: getSensorRawData("Current UP rate")
                    }}
                />
                <Fps
                    date={data.date}
                    data={{
                        fps: getSensorRawData("Framerate")
                    }}
                />
            </div>
            <div className="layout-column">
                <Component
                    title={<div><BsCpu /> CPU</div>}
                    cg1={{
                        name: <div><BsPercent /> Load</div>,
                        value: getSensorData("Total CPU Usage"),
                        max: 100
                    }}
                    cg2={{
                        name: <div><BsThermometerHalf /> Temp</div>,
                        value: getSensorData("CPU Package"),
                        max: 100
                    }}
                    bg={{
                        name: <div><GiMicrochip /> RAM</div>,
                        value: getSensorData("Physical Memory Load"),
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
                                value: getSensorRawData("AIO Pump", false) > 1000 ? "ON" : "OFF"
                            },
                            {
                                name: <div><GiComputerFan /> CPU</div>,
                                value: getSensorData("CPU", false)
                            },
                            {
                                name: <div><GiComputerFan /> CHA</div>,
                                value: getSensorData("Chassis1", false)
                            }
                        ]
                    }} />
                <Component
                    title={<div><BsDisplay /> GPU</div>}
                    cg1={{
                        name: <div><BsPercent /> Load</div>,
                        value: getSensorData("GPU Core Load"),
                        max: 100
                    }}
                    cg2={{
                        name: <div><BsThermometerHalf /> Temp</div>,
                        value: getSensorData("GPU Temperature"),
                        max: 100
                    }}
                    bg={{
                        name: <div><GiMicrochip /> VRAM</div>,
                        value: getSensorData("GPU Memory Usage"),
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
                                name: <div><GiComputerFan /> GPU 1</div>,
                                value: getSensorData("GPU Fan1", false)
                            },
                            {
                                name: <div><GiComputerFan /> GPU 2</div>,
                                value: getSensorData("GPU Fan2", false)
                            }
                        ]
                    }} />
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
