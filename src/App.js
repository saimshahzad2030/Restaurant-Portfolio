import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Carrousel from './components/Carrousel/Carrousel';
import Heading from './components/Heading/Heading';
import Row from './components/Row/Row';
import ServiceCard from './components/ServicesCard/ServiceCard';
import Column from './components/Column/Column';
import { Input,Button } from '@mui/material';
import Divider from './components/Divider/Divider';
import Footer from './components/Footer/Footer';
import Deals from './components/Deals/Deals';
import Menu from './components/Menu/Menu';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Contact from './components/Contact/Contact';
// import ItemsDiv from './components/ItemsDiv/ItemsDiv';
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/>
             
              <Carrousel />
              <Heading style={{textAlign:'center', margin:'40px'}}>What we Serve?</Heading>
             <Row>
              <ServiceCard imgPath={'quality.png'}>Quality</ServiceCard>
              <ServiceCard imgPath={'taste.png'}>Taste</ServiceCard>
              <ServiceCard imgPath={'customer.png'}>Customer Care</ServiceCard>
             </Row>
             <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
               </>

          }
        />
        <Route
          path="/deals"
          element={
            <>
            <Navbar/>
              <Deals/>
             <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
               </>

          }
        />
        <Route path='/menu' element={
          <>
          <Navbar/> 
          <Menu/>
          <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
          </>
        }/>
        <Route
          path="/login"
          element={<>
          <Navbar/> 
          <Login/>
          <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey',marginTop:'60px'}}/>

          <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
          </>}/>

          <Route
          path="/signin"
          element={<>
          <Navbar/> 
          <Signin/>
          <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey',marginTop:'60px'}}/>

          <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
          </>}/>


          <Route
          path="/contact"
          element={<>
          <Navbar/> 
          <Contact/>
          <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey',marginTop:'60px'}}/>

          <Row styles={{marginTop:'150px'}}>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Contacts</h6>
              <p>+92 3213123412</p>
              <p>+92 3421221312</p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>Careers</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Worker</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Market Place</Link></p>
              </Column>
              <Column>
              <h6 style={{fontWeight:'bold',marginBottom:'20px'}}>About us</h6>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>History</Link></p>
              <p><Link style={{textDecoration:'none',color:'black'}} to={'/'}>Ingredients</Link></p>
              </Column>
              <Column>
              <Input placeholder="Type any Query..." />
              <Button variant="outlined" sx={{margin:'20px'}}>Send</Button>
   
              </Column>
             </Row>
             <Divider styles={{width:'90%', height:'1px',backgroundColor:'grey'}}/>
             <Footer><h4>Copyright @ FoodMania</h4></Footer>
          </>}/>
                  </Routes>
    </Router>
  );
}

export default App;
