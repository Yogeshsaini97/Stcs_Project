


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI3NzUxN2FkNWZkZGM5MjQ1YTI4MjVjYjgyYWU0ZjM0ZjY2ZWFkM2E0ZmE1NDczYTNjZmRmZTMwZWQzODY0MzMiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2ODk1NzYxMTUsImV4cCI6MTY4OTU3NjcxNSwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.OOth8ZeVXs3xTGVv9g-SlqY3Wg7tFeTF0xxSQ6mGieu1d1uYztrM_jdYa3lkr0aSevGtmGlznDuwLIlP3CajuHGplbFb0KRZ8BigqfuNCM3goG0hlUoJLmzFd8GccVxgMk3fWLpW4rVa_jmQW6IFbkGZUiO9gf8gpxWvAXf0MRoMUmtxr-54ccCfU2KlKnQ2gI39cryhoveMgVbifaOGDbGk3nq4UVKvfFLK4sL-54RXHd4GOeRRO075XSFzEsEg0HS1cUak59bHFCgIaajGs8yrRHHtTNNTc6DOzJ06T2Wa3qpVBpMBX1DPNVhD65vu_PQqdU4eRytC5VlQoMJE1g",
          'Content-Type': 'application/json'
        }
      })
         
      response=await response.json();
   
  

  return response;    
}


export  function ChangeDateFormat(date)
{
    const originalDate = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    
    const formattedDate = originalDate.toLocaleDateString("en-US", options);
    return formattedDate;
}












