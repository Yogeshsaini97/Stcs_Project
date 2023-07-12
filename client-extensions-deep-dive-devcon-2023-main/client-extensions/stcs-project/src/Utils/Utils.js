import axios from 'axios';


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI5NjI2OTZjYjhmYjUxZDY5ZDQ3YmQ0M2E2Yjg1NTgyMmE4ZjY3OTlkMjkyNjlhYmY1Y2E2NWU4NmIxMzdlYjIyIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5MTQ0OTM0LCJleHAiOjE2ODkxNDU1MzQsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.iH1iMRE_B3N3sQDJf5TiDsfS16a2kCUcOOLX3CJSScM-5F9X2jahEmJyd8DYgtgBG1FjwYsosHgwcoI1aoWxdm47kLi9hyQu2gvLJhR_c89s3BYlnRn4jpIT4N47YzGGJmBuYp0DFiLdaxsj_SJ28HsuSnu1U2IST-C7NJicRE9B0-l_pru_EOwmflHOiQABCXP0ZzmawSrnW_JUXmSBRiNMlOLtgTnm074B9ykepB8JuWL7BuMxYkA0Kb5dLRzTb7nAcXwBnfAPcWxcVTdtlKN80aaR8nvBDfNEP7QiEXoWtzZlCGWMK2kmDoUzcwKdpHXLnQ-h5Ep58vE6z20RMA",
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












