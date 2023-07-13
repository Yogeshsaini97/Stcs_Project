


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhZWNiNDBiNDFkYWI1YWRkNzk5MGY1MWM4MDQ1N2YzN2U2ZGZjNDBhYjFhMjllNmYzYzJhZGIxM2Y2Y2NmYiIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4OTI0MTk0OCwiZXhwIjoxNjg5MjQyNTQ4LCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.WEu8tgXrkCX9dXm2ej-oh8Wepj_fLGcNn_CfKl5hLGTDrvz1BkuTfLpRva-nInX9FETCrbs5zGbfFVWTm1YzohY6N3Q6L7sO1MxgAQ3r9yLTSUrqfCQLq56WSt2ZfhSeuDkuRjlg01XrPEHREHhP99skU43aSSYVtPKuThsc2fWJuHFzu4o4YESWZ3Rsjbg4XDi_7HJ0vLamrBvXWJiXBtGUnqrD5zxH1FlNipt1brtS9-uZCnGaR5mGjKaLztfZudEVXK6lg7RPdsjzMATqARuvT8qZPGIGee_jW2TNkVGaDuNsZwFZG64-biJx7lEtgQdCbT-mHNG7w5kLXIcAGg",
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












