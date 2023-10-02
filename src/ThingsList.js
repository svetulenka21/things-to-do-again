import { Component } from "react";
import picThree from "./picThree.png";

export class ThingsList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            thingsList: []
        }
    }

    onChangeEvent(e) {
        this.setState({
            userInput: e
        })
    }

    addList(input) {
        if (input === "") {
            Swal.fire({
                title: 'Please enter text!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
        }
        else {
        let listArray = this.state.thingsList;
        listArray.push(input);
        this.setState({
            thingsList: listArray,
            userInput: ""
        })
    }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.thingsList;
        listArray = [];
        this.setState({
            thingsList: listArray
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div onSubmit={this.onFormSubmit}>
                <form>
            <div className="container">
                <input type="text" placeholder="Type here..." 
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}
                />
            </div>
            <div className="container">
                <button className="add btn" onClick={() => this.addList(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.thingsList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                    <img src={ picThree } alt="Sweet" width="30px" />
                        {item}
                    </li>
                ))
                }
            </ul>
            <div className="container">
            <button className="delete btn" onClick={() => this.deleteItem()}>DELETE</button>
            </div>
            </form>
            </div>
        )
    }
}