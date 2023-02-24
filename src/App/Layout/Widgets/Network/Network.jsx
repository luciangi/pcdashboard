import PropTypes from "prop-types"
import { GiNetworkBars } from "react-icons/gi"
import Card from "../Card/Card"
import SparkLine from "../SparkLine/SparkLine"

const Network = ({ date, data }) => (
    <Card
        title={<div><GiNetworkBars /> Network</div>}
        content={
            <SparkLine
                showLegend={true}
                instant={date}
                data={data}
            />
        } />
)

Network.propTypes = {
    date: PropTypes.number.isRequired,
    data: PropTypes.shape({
        download: PropTypes.number.isRequired,
        upload: PropTypes.number.isRequired
    })
}

export default Network
