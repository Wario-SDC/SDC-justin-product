import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

let ErrorCount = new Counter("errors");

export const options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    errors: ["count<10"]
  }
};


export default function () {
  let res = http.get(`http://localhost:3000/products/1`);

  //Creating Error Check
  let success = check(res, {
    "status is 200": r => r.status === 200
  });
  if (!success) {
    // console.log('error');
    ErrorCount.add(1)
  }

  sleep(1);
}
