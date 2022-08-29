import PropTypes from "prop-types"
import "./Card.css"

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.element.isRequired
}

function Card({ title, content }) {
    return <div className="card">
        {!title && <div className="no-legend">&nbsp;</div>}
        <fieldset>
            {title && <legend className="legend" data-testid="card-title">{title.toUpperCase()}</legend>}
            <span data-testid="card-content">{content}</span>
        </fieldset>
    </div>
}

export default Card
