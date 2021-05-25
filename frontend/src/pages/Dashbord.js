import React,{useEffect, Component} from 'react';
import { Table, ButtonToggle } from 'reactstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StudentTableRow from './data';


class DashBordAdmin extends Component{

  
   
  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }
  // console.log(token)
  componentDidMount() {
    axios.get(`http://localhost:5000/Employe/getemploy`)
    .then((response) => {
    console.log(response.data);
    this.setState({
      students: response.data
    });
  }).catch((err)=>{
    console.log(err.response)
  })
 }

 DataTable() {
  return this.state.students.map((res, i) => {
    return <StudentTableRow obj={res} key={i} />;
  });
}

 render() {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Role</th>
          <th>Vues</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {this.DataTable()}
         
      </tbody>
    </Table>
  );
}
}
export default DashBordAdmin;