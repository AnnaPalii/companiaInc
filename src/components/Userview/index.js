import React from 'react'
import API from '../../utils/API';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';


class Userview extends React.Component{
    state = {
        searchResult: [],
        filterResult: [],
        inputField: "",
        sortedResult:[]
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

    userSort = () => {
      const sort = this.state.filterResult.sort((a, b) => a.name.first.localeCompare(b.name.first));
      console.log(sort);
      this.setState({sortedResult: sort})
    }
    citySort = () => {
        const citySort = this.state.filterResult.sort((a, b) => a.location.city.localeCompare(b.name.first));
        console.log(citySort);
        this.setState({sortedResult: citySort})
      }



    render () {
        return(
            <div>
                <Form inline  >
                <input className= "form-control mr-sm-2" style={{width: "50%"}} onChange={this.handleInputChange} placeholder="Search Employee"></input>
                <button type="button" class="btn bg-dark-gray" style={{margin: "0.5%"}} onClick={this.userSort} >Sort by First Name</button>
                <button type="button" class="btn bg-dark-gray" onClick={this.citySort} >Sort by city</button>
                </Form>
                


            
                

                <Table striped bordered hover variant="dark" id = "table ">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Country</th>
                            <th scope="col">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.filterResult.map(element => (
                            <tr>
                                <th> {element.name.first} </th>
                                <th> {element.name.last} </th>
                                <th> {element.email} </th>
                                <th> {element.location.city} </th>
                                <th scope="row"><img src = {element.picture.medium} /></th>
                            </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Userview;