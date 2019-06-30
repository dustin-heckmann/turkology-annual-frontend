import React, { Component } from 'react'

export class SearchBox extends Component {
    render() {
        return (
            <div id="quicksearch" title="Quick search">
                <form method="get" action="/" name="quicksearch">
                <input className="form-control" type="text" name="q"
                    value="{{ request.args.q or '' }}"
                    id="searchfield" placeholder="Search..." />
                <span id="quicksearch-button"><input type="submit" value="" /></span>
                </form>
            </div>
        )
    }
}

export default SearchBox
