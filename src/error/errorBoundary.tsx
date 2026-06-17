import { Component, type ReactNode } from "react";

type Props = {
    children: ReactNode
}
type State = {
    hasError: boolean

}


class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>someting went wrong</h1>
        }
        return this.props.children
    }


}

export default ErrorBoundary