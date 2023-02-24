import React from "react"
import PropTypes from "prop-types"
import "./Table.css"
import { generateCell } from "./util"

const Table = ({ hideHeading = false, heading, body }) => (
    <table className="table">
        {hideHeading !== true && (
            <thead>
                <tr>
                    {heading.map((head, idx) => <th key={idx}>{head}</th>)}
                </tr>
            </thead>
        )}
        <tbody>
            {
                body.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                        {
                            heading.map((head, colIdx) => (
                                <td className={hideHeading === true && (colIdx % 2 === 0) ? "table-highlight" : ""} key={`${rowIdx}-${head}`}>
                                    {generateCell(row[head])}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
)

Table.propTypes = {
    hideHeading: PropTypes.bool,
    heading: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired
}

export default Table
