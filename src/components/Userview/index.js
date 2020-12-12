import React from 'react'
import API from '../../utils/API';

class Userview extends React.Component{
    state = {
        searchResult: [],
        filterResult: [],
        inputField: ""
    }

    componentDidMount(){
        this.userSearch();
    }

    userSearch = () => {
        API.getRandomUsers()
            .then( res => this.setState({ searchResult: res.data.results}))
            .then( res => this.setState({ filterResult: this.state.searchResult}))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const filtered = this.state.searchResult.filter(query => query.name.first.includes(value));
        this.setState({filterResult: filtered})
    }
    
    render () {
        return(
            <div>
                <input className= "form-control mr-sm-2" onChange={this.handleInputChange} placeholder="Search Employee"></input>
                <table className = "table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.filterResult.map(element => (
                            <tr>
                                <th scope="row">1</th>
                                <th> {element.name.first} </th>
                                <th> {element.name.last} </th>
                                <th> {element.email} </th>
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Userview;
