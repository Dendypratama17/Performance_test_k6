import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://run.mocky.io/v3/1b6d9480-44c4-49ae-a095-27e780edf0eb');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// k6 run test_k6.js