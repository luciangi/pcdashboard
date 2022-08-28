import PropTypes from "prop-types"
import "./Table.css"
import { truncate } from "./util"

const Table = ({ heading, body }) => (
    <table className="table">
        <thead>
            <tr>
                {heading.map((head, idx) => <th key={idx}>{head}</th>)}
            </tr>
        </thead>
        <tbody>
            {
                body.map(
                    (row, idx) => (
                        <tr key={idx}>
                            {heading.map(head => <td key={`${idx}-${head}`}>{truncate(row[head], 20)}</td>)}
                        </tr>
                    )
                )
            }
        </tbody>
    </table>
)

Table.propTypes = {
    heading: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired
}

export default Table
