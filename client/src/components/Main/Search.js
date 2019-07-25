import React, { Component } from 'react'
import './Main.css'

class Search extends Component {
    state = {
        searchField: ""
    }

    handleChange = (event) => {
        this.setState({
            searchField: event.target.value
        })
    }

    onSubmit = (event) => {
        if (event.which === 13) this.props.mainSearch(this.state.searchField)
    }

    render() {
        const { mainSearch } = this.props
        return (

            <div className="container">
                {/* <form>
            <div className="form-group row">
                <label for="mainSearch" className="col-sm-2 col-form-label">Search</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="mainSearch" placeholder="Please enter a city" />
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" for="gridRadios1">
                                First radio
          </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" for="gridRadios2">
                                Second radio
          </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                            <label className="form-check-label" for="gridRadios3">
                                Third disabled radio
          </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1">
                            Example checkbox
        </label>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
        </form> */}
                <div className="input-group mb-3">
                    <input type="text" onChange={this.handleChange} onKeyDown={this.onSubmit} className="form-control" placeholder="Please enter a city" aria-label="City search" aria-describedby="Main city search" />
                    <div className="input-group-append">
                        <button type="button" onClick={() => mainSearch(this.state.searchField)} className="btn btn-outline-secondary" id="mainSearch">Search</button>
                    </div>
                </div>


            </div>

        )
    }
}

export default Search