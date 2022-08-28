import PropTypes from "prop-types"
import "./Dashboard.css"
import Card from "./Widgets/Card/Card"
import DateTime from "./Widgets/DateTime/DateTime"
import Table from "./Widgets/Table/Table"

const Dashboard = ({ data }) => (
    <div className="container">
        <div className="item">
        </div>
        <div className="item">
            <Card content={<DateTime date={new Date(data.date * 1000)} />} />
        </div>
        <div className="item">
        </div>
        <div className="item">
            <Card title="Top processes" content={<Table heading={Object.keys(data.processes[0])} body={data.processes} />} />
        </div>
        <div className="item">
        </div>
        <div className="item">
        </div>
        <div className="item">
        </div>
    </div>
)

Dashboard.propTypes = {
    data: PropTypes.shape({
        date: PropTypes.number.isRequired,
        processes: PropTypes.array.isRequired,
        sensor: PropTypes.object.isRequired
    })
}

export default Dashboard
