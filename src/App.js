import React, { useState, useEffect } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { Route, Switch, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Clock from './Clock';



function App() {

  let [ selectedDate, setSelectedDate ] = useState(null)
  let [ urlisthere, seturlisthere] = useState(false)
  let url = "http://ya7795.danskenet.net/LCR/MOC_BACTH_DASHBOARD_"
  let finalurl = '';
  let local_selecteddate="";

  const urlembed = () => {
    seturlisthere(false)
    if (selectedDate !== null && selectedDate !== "unfined") {
      
      // local_selecteddate = moment(selectedDate).format("YYYY_MM_DD");
      // finalurl = url + local_selecteddate + ".html"
      seturlisthere(true)
      // console.log("from condn", finalurl)
      selectedDate = null;
    }
  }

  useEffect(() => {
    urlembed();
    // setInterval(urlembed, 3000)
  }, [selectedDate]); 
  
 

  const showdate = () => {
    if (selectedDate !== null && selectedDate !== "undefined") {
      console.log(selectedDate)
    }
  }
urlisthere ? finalurl = url + moment(selectedDate).format("YYYY_MM_DD") + ".html": finalurl= null;
  
  return (
    
    <div className='App'>
      
      
      <h1 style={{fontSize:80,color:'white',margin:60,textAlign:'center'}}> Batch Deliveries Statistics for LCR & OPPC </h1>
      <div className='Container'> <h1 style={{margin:'100px'}}> <Clock /></h1></div>
      {/*<h1 style={{fontSize:80}}> Mainframe Batch Operations </h1> 
      <h2 style={{fontSize:70}}> Dashboard Viewer</h2> */}
      
      <label style={{fontSize:50, margin:220, color:'white',textAlign:'right',display:'flex',justifyContent:'center'}}> 
        <div className='Container1'>
          <DatePicker selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='yyyy/MM/dd'
            placeholderText='Choose Date !!'
            isClearable
            popperPlacement='bottom'
            onSelect={showdate} 
            maxDate={new Date()}
            
            
            
            
            
            
            
            
            
            
             
            
            
          />
          {
            urlisthere ? 
            
            <Button href={`${finalurl}`} style={{fontSize:20}} size='lg'
            // target="_blank"
            >Submit</Button> :
            // <Button href=' http://ya7795.danskenet.net/LCR/MOC_BACTH_DASHBOARD_2021_08_16.html'>Submit</Button> :
           
            <Button disabled style={{fontSize:20}} size='lg'>Submit</Button> 
            
          }
          
        </div>
      </label> 
    </div>
  );
}

export default App;
