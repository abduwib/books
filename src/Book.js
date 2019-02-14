import React, { Component } from 'react';

import './App.css';

class Book extends Component {
    state = { hide: "false" }
    hideInfo = () => {
        if (this.state.hide === "false") {
            this.setState({ hide: "hidden" });
        } else {
            this.setState({ hide: "false" });
        }
    }
    render() {

        return (
            <div>
                <h1 onClick={this.hideInfo}>{this.props.book.title}</h1>
                <h2 class={this.state.hide}>{this.props.book.subtitle}</h2>
                <h3 class={this.state.hide}>Author: {this.props.book.author}</h3>
                <h3 class={this.state.hide}>published: {this.props.book.published}</h3>
                <h3 class={this.state.hide}>publisher: {this.props.book.publisher}</h3>
                <h3 class={this.state.hide}>pages: {this.props.book.pages}</h3>
                <p class={this.state.hide}>description: {this.props.book.description}</p>
                <a class={this.state.hide} href={this.props.book.website} > Click here</a>

            </div>
        );
    }

}


export default Book;