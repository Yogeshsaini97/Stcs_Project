


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyZWZmYTU2YWU5MjU3YWM1NGE3NGNiYTM4OTU1MjYxNjI0ZmM0Yjk2NTZhNzUyZGVkMzhmN2JhMWI3OGVjZjYiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2ODk0ODY4NzIsImV4cCI6MTY4OTQ4NzQ3Miwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.E2rvOGgQfta-i1ijYj7UYzvfxYpnuUHnOrXg_4PownvyENb1xm2HUHTnRRhT2uLKx0wOA-zK6PBHjQoo5-OWWUz0LGD71N9s8xYq0gHvJhPw94X-hcfr-YJ-Nu-n1-SrHkmHIzKyq_D0kgCxsdwJOzQDzIWbNDLyT6x7n4asNRAOHiclQ9z8Q8GpIatdzSmab-uoLLNG9hT8P2v8tm-KHPE-K3gR14srtqMba7JGbicgTUKW8JuNWqsSHdQWSJr_P5KYg0_ZJazk7rILf1RRKJY4Owkjj7FMGP_Rvw4KE7LDL6YcKMys_Rd9lSoEiZq3dPeUy8JDggmdLLb5tVGWdQ",
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












