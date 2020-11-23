const express = require('express');
const kafka = require('../kafka/client');

const Router = express.Router();

const upload = require('../Config/s3');

// Get all students
Router.get('/', (request, response) => {
  console.log('\nEndpoint GET: get all students');
  console.log('Req Body: ', request.body);
  kafka.make_request('studentsTopic', 'GETALL', request.body, (err, result) => {
    console.log('Get all students result', result);
    if (err) {
      console.log('Get all students Kafka error');
      response.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      response.end('Get all students Kafka error');
    } else {
      response.writeHead(result.status, {
        'Content-Type': result.header,
      });
      console.log(result.content);
      response.end(result.content);
    }
  });
});

// Get student by ID
Router.get('/:id', (request, response) => {
  console.log('\nEndpoint GET: get student');
  console.log('Req Body: ', request.body);
  const data = { ...request.params };
  kafka.make_request('studentsTopic', 'GETONE', data, (err, result) => {
    console.log('Get student by id result', result);
    if (err) {
      console.log('Get student by id Kafka error');
      response.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      response.end('Get student by id Kafka error');
    } else {
      response.writeHead(result.status, {
        'Content-Type': result.header,
      });
      console.log(result.content);
      response.end(result.content);
    }
  });
});

Router.post('/updateProfile', (request, response) => {
  console.log('\nEndpoint POST: post update student profile');
  console.log('Req Body: ', request.body);
  const data = { ...request.body };
  kafka.make_request('studentsTopic', 'UPDATEPROFILE', data, (err, result) => {
    console.log('Update Student Profile by id result', result);
    if (err) {
      console.log('Update Student Profile by id Kafka error');
      response.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      response.end('Update Student Profile by id Kafka error');
    } else {
      response.writeHead(result.status, {
        'Content-Type': result.header,
      });
      console.log(result.content);
      response.end(result.content);
    }
  });
});

Router.post('/uploadProfilePicture', upload.single('file'), (request, response) => {
  console.log('\nEndpoint POST: post upload student profile picture');
  console.log('Req Body: ', request.body);
  const data = { id: request.body.id, stphoto: request.file.location };
  kafka.make_request('studentsTopic', 'UPLOADPROFILEPICTURE', data, (err, result) => {
    console.log('Upload Student Profile Picture by id result', result);
    if (err) {
      console.log('Upload Student Profile Picture by id Kafka error');
      response.writeHead(401, {
        'Content-Type': 'text/plain',
      });
      response.end('Upload Student Profile Picture by id Kafka error');
    } else {
      response.writeHead(result.status, {
        'Content-Type': result.header,
      });
      console.log(result.content);
      response.end(result.content);
    }
  });
});

// Get count of ratings

module.exports = Router;
