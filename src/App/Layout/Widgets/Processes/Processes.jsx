import PropTypes from "prop-types";
import Card from "../Card/Card";
import Table from "../Table/Table";
import { BsMicrosoft } from "react-icons/bs"

const Processes = ({ processes }) => (
    <Card
        title={
            <div><BsMicrosoft /> Processes</div>
        }
        content={
            <Table heading={Object.keys(processes[0])} body={processes} />
        } />
)

Processes.propTypes = {
    processes: PropTypes.array.isRequired
}

export default Processes;
