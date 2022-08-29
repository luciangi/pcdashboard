import Table from "App/Layout/Gauges/Table/Table";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const Processes = ({ data }) => <Card title="Top processes" content={<Table heading={Object.keys(data[0])} body={data} />} />

Processes.propTypes = {
    data: PropTypes.array.isRequired
}

export default Processes;
