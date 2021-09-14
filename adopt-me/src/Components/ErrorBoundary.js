//error boundaries work with class components only 
//mostly got this from the react docs
import {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

export class ErrorBoundary extends Component {

    state = { hasError: false, redirect: false}

    static getDerivedStateFromError() {
        return { hasError: true}
    }

    componentDidCatch(error, info) {
        //log this to Sentry, Azure Monitor, NewRelic, Trackjs
        console.error("ErrorBoundary caught an error", error, info)
        setTimeout(() => this.setState({
            redirect:true
        }), 5000);
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to="/"/>
        }
        if(this.state.hasError) {
            return (
                <h2>
                    This List has an error. <Link to="/">Click Here</Link> to go back to the homepage or wait 5 seconds.
                </h2>
            )
        }
        //be invisible in case there is no error
        return this.props.children;
    }
}

export default ErrorBoundary
