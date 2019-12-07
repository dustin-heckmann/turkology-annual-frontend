import React, { Component } from 'react'

export class ResultsListItem extends Component {
  render() {
    let citation = this.props.citation
    return (
      <div className="entry" id="entry-{{ match._id }}">
        <table>
          <tbody>
            <tr>
              <td className="entry-nr">
                <a className="nr" href="?sess={{ search_key }}"></a>
              </td>

              <td className="entry-body">
                <span className="title">
                  <a href="/citations/{ citation.id }?sess=" title="">
                    {citation.title || citation.rawText}
                  </a>
                </span>
                <span className="author"></span>
                <span className="location-year">
                  {[citation.location, citation.datePublished]
                    .filter(val => val != null)
                    .join(', ')}
                  <span className="ta-pos">
                    TA {citation.volume}, {citation.number}
                  </span>
                  <span className="keywords">
                    <span className="field-name">
                      Keywords:{' '}
                      {citation.keywords
                        .map(keyword => keyword.nameDE || keyword.raw)
                        .join(' | ')}
                    </span>
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ResultsListItem
