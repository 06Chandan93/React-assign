import React ,{Component} from "react";
import {Table} from 'react-bootstrap';


class RestauranstList extends Component{

  constructor(){
    super();
    this.state={
      list:null,
    }
  }
  componentDidMount(){
    fetch("http://localhost:3000/restaurant").then((response)=>{
      response.json().then((result)=>{

      this.setState({
        list:result
      })
      })
    })

  }


  render(){
    return(
      <div className="mt-5">

      {
        this.state.list?
        <div>
        <Table striped bordered hover>
        <thead>
    <tr>
       <th>#</th>
      <th>Name</th>
      <th>Address</th>
      <th>Rating</th>

    </tr>
  </thead>
        {
          this.state.list.map((item,i)=>{
            return(
          <>
          <tbody>
    <tr>
    <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.address}</td>
      <td>{item.rating}</td>

          </tr>
          </tbody>
          </>
        )
        })
      }
      </Table>
        </div>
        :<p>Please Wait ...</p>
      }
      </div>
    )
  }
}

export default RestauranstList;
