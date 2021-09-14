import { Component } from "react"
import { withRouter } from "react-router"
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal"

export class Details extends Component {
    
    state = {loading: true, showModal: false};
    
    async componentDidMount (){
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        )
        const json = await res.json();
        this.setState(
            Object.assign(
                {
                    loading: false,
                },
                json.pets[0]
            )
        );
    }

    toggleModal = () => this.setState({ showModal: !this.state.showModal })

    // toggleModal = () => this.setState({ showModal: !this.setState.showModal })

    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render() {
        if(this.state.loading){
            return <h2>loading...</h2>
        }
        const { animal, breed, city, state, description, name, images, showModal} = this.state;

        return (
            <div className="details">
                <Carousel images={images}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{animal} - {breed} - {city}, {state}</h2>
                    <ThemeContext.Consumer>
                        {([theme]) => (
                            <button style={{ backgroundColor: theme }} onClick={this.toggleModal}>Adopt {name}</button>
                        )}
                    </ThemeContext.Consumer>
                    <p>{description}</p>
                    {
                        showModal ? (
                            <Modal>
                                <div>
                                    <h1>would you like to adopt {name} ?</h1>
                                    <div className="buttons">
                                        <button onClick={this.adopt}>Yes.</button>
                                        <button onClick={this.toggleModal}>No, i'm a monster.</button>
                                    </div>
                                </div>
                            </Modal>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailswithErrorBoundary() {
    return(
        <ErrorBoundary>
            <DetailsWithRouter/>
        </ErrorBoundary>
    );
};
