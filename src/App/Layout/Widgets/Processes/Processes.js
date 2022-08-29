import PropTypes from "prop-types";
import Table from "../Gauges/Table/Table";
import Card from "../Card/Card";

const Processes = ({ data }) => <Card title="Top processes" content={<Table heading={Object.keys(data[0])} body={data} />} />

Processes.propTypes = {
    data: PropTypes.array.isRequired
}

export default Processes;
