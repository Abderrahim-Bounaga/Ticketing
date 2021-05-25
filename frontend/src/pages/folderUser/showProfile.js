import React,{useEffect,useState} from 'react';
import { Badge , Container, Jumbotron} from 'reactstrap';
import axios from 'axios';

const ShowProfile = () => {

    const [data,setData]= useState([])

    // const [date,setDate] = useState('')
    const getData =async ()=>{
      const {data} = await axios.get('http://localhost:5000/Employe/getOneemploy');
      if(data) setData(data)
    }
    useEffect(()=>{
      getData()
    },[])
    console.log(data)
  return (
    <div>
      <h1>Profil <Badge color="danger">New</Badge></h1>
      <Jumbotron>
 
      <Container  style={{marginLeft: 700 }} className="themed-container"><Badge color="danger" >FirstName</Badge> {data.firstName} </Container>
      <Container style={{marginLeft: 700}} className="themed-container" ><Badge color="danger">LastName</Badge> {data.lastName}</Container>
      <Container style={{marginLeft: 700}} className="themed-container" ><Badge color="danger">Email</Badge>  {data.email}</Container>
      <Container style={{marginLeft: 700}} className="themed-container" ><Badge color="danger">Role</Badge>  {data.role}</Container>
      <Container style={{marginLeft: 700}} className="themed-container" ><Badge color="danger">Date</Badge>  {data.dateAmbouche}</Container>
      {/* <Container style={{marginLeft: 700}} className="themed-container" fluid={true}>.container-fluid</Container> */}
    </Jumbotron>
    </div>
  );
}

export default ShowProfile;