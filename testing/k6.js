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
}
  // http.get(`http://localhost:3000/products/1/styles`); //140 //179

  //Creating Error Check
  // let success = check(res, {
  //   "status is 200": r => r.status === 200
  // });
  // if (!success) {
  //   // console.log('error');
  //   ErrorCount.add(1)
  // }

  // sleep(1);
