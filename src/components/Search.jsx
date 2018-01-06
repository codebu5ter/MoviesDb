import React, { Component } from 'react';

import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  search(){
    console.log('Search button clicked');
  }

  render() {
    return (
      <div>
        <Form inline className="col-md-12 col-md-offset-4">
          <FormGroup>
            <ControlLabel>Search</ControlLabel>
            { ' ' }
            <FormControl
              type="text"
              placeholder="wonder woman"
              onChange={(event)=>this.setState({query: event.target.value})}
            />
            { ' ' }
            <Button bsStyle="success"
              onClick={()=>this.search()}
            >Submit</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}


export default Search;
