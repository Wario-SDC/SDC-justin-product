import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1500,
      timeUnit: '1s',
      duration: '60s',
      preAllocatedVUs: 100,
      maxVUs: 100
    }
  }
}

export default function () {
  http.get(`http://localhost:3000/products/1`); //197 //83 //184
};

//Aim to test the entirety of the database (not just product #1) because the system will cache that products information. K6 has a tool to randomize the number value with a range I can set