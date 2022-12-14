import React from "react"
import "./ErrorBoundary.css"

class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({hasError: false})
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-boundary-wrapper"><h1>Something went wrong!</h1></div>
        }

        return this.props.children
    }
}

export default ErrorBoundary
