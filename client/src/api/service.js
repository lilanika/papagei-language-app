
import axios from 'axios';


const service = axios.create({
  baseURL: 'http://localhost:5005/api'
  // withCredentials: true // => you might need this when having the users in the app
});

const errorHandler = err => {
  // console.error(err);
  throw err;
};

const handleUpload = (theFile, userId) => {
  // console.log('file in service: ', theFile)
  return service
    .post(`/upload/${userId}`, theFile)
    .then(res => res.data)
    .catch(errorHandler);
}

const saveNewThing= (picture) => {
  // console.log('new thing is: ', newThing)
  return service
    .post('/picture/create', picture)
    .then(res => res.data)
    .catch(errorHandler);
}




export default {
  service,
  handleUpload,
  saveNewThing,
};


