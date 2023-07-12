import axios from 'axios';


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxNGUxM2MxM2YxZmExMTM0OWY2YjI3MWRhYzg0MjNhYjVkNzk2ZmIyOTg1NGQ4MTIwYmNiZjIyZTM2ZWVkZGEiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2ODkxNTY3MDgsImV4cCI6MTY4OTE1NzMwOCwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.S7ONBjAtTm_2BixLnI64X6ijlyVdqyvrNkFjnXmUwsve3HNf0Qyacx162ZoCbJAXfuedsdH_Y9iE4xBszgXtvQzZBN9aaQsnI7fqiWuIibaxirZf33ncstJHtdjCAtszPn2IR6HZvr2S6rVJ2OnjkYffy56Frw3jOS9E3-ewtVg28-95lGJbKVMQlDJ3y1hD8Y9vN9DQeeXXj-Zcw9fMmy8dzMACyEBX7BGNB2zVhMSv2dp2uaAp4RjXPVPtddNv7ozCpS9mRgzP3mpQYaYg1GyIRE5rds9z3Yida0R4sZf70O0_t1BscPgAao9I2v6oB3co2tdCG6mAFjcNNM6cAQ",
          'Content-Type': 'application/json'
        }
      })
         
      response=await response.json();
      console.log(response)
  

  return response;    
}


export  function ChangeDateFormat(date)
{
    const originalDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
}












