//error boundaries work with class components only 
//mostly got this from the react docs
import {Component} from 'react';
import {Link} from 'react-router-dom';

export class ErrorBoundary extends Component {

    state = { hasError: false}

    static getDerivedStateFromError() {
        return { hasError: true}
    }

    componentDidCatch(error, info) {
        //log this to Sentry, Azure Monitor, NewRelic, Trackjs
        console.error("ErrorBoundary caught an error", error, info)
    }
    render() {
        if(this.state.hasError) {
            return (
                <h2>
                    This List has an error. <Link to="/">Click Here</Link> to go back to the homepage.
                </h2>
            )
        }
        //be invisible in case there is no error
        return this.props.children;
    }
}

export default ErrorBoundary
