import axios from 'axios';
import { app, firebaseConfig } from '../firebase/config';
// Define the Firebase URL where your data is stored
const firebaseUrl = firebaseConfig.databaseURL;

// Perform a GET request
axios.get(`${firebaseUrl}/your-resource.json`)
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });

  const data = {
  
      categoria: 'value1',
      contact_id: 'value2',
      contact_name: 'value3',
      contact_number: 'value4',
      img: 'image',
      item:'value',
      price:''
  
};

// Perform a POST request
axios.post(`${firebaseUrl}/your-resource.json`, data)
  .then(response => {
    // Handle the response data (usually contains the ID of the newly created resource)
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });