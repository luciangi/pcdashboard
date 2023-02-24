import React from "react"
import PropTypes from "prop-types"
import "./Card.css"

const Card = ({ title, content }) => {
    return <div className="card">
        {!title && <div className="no-legend">&nbsp;</div>}
        <fieldset>
            {title && <legend className="legend">{title}</legend>}
            <div className="card-content">
                {content}
            </div>
        </fieldset>
    </div>
}

Card.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    content: PropTypes.element.isRequired
}

export default Card
