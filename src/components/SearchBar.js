import React, { Component } from 'react';
export class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        //this.setState({value: event.target.value});
        this.props.onSubmit(this.state.value);
        event.preventDefault();
      }
    
    render() {
        return (<div id="quicksearch" title="Quick search">
            <form
            name="quicksearch"
            onSubmit={this.handleSubmit}
            >
                
                <input 
                className="form-control"
                 type="text" 
                 name="q" value={this.state.value} 
                 id="searchfield" 
                 placeholder="Search..." 
                 onChange={this.handleChange}
                 
                 />
                <span id="quicksearch-button"><input type="submit" value="Submit" /></span>
            </form>
        </div>);
    }

}

export default SearchBar
