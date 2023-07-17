


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyZWE2ZDAzY2Y4YWVmYzc3ZTU0YzVhNDUwZGVlZDQ2OGJiODY2ODA0NmE3OTZmY2IxOTNkMTE2MjRjNTIxNGIiLCJjbGllbnRfaWQiOiJpZC0zZTRlYzdlZC00YjVmLTM4YmYtZTQ3MC1hNTEwOGJjMzVkYzAiLCJpYXQiOjE2ODk1OTMzNzQsImV4cCI6MTY4OTU5Mzk3NCwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.g6CAUS27umfYi-jyer60d9wcbwJhPntNYIHFrVOzC3xVT3Br75vhPTDAoZw7viBMXbNf2uQUCMjVHqAIgVmje4n9SLauvjpGzSn5cqzvIMNqXACYe8To_Vs-u2YatZR8riauBOqjHnRL7hW-3Dl4FR6oZLsmEcqfLxdIEm8m-GCYqWt5OsGmagXFtHhLoYAkKgV72QI0GqSlks-29TUyELthxjfuuMJOYj_9GgoIJ6j0LnwkTQFI-WUxeO1KWkBtJjAVQ3B_ivbRK5TEM1Wc-6fe-OMplOYAZWgPeaXh6ZF11ag6xDLX057_MULQlngtqHSKT1jayjqV09Pomt9CgA",
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












