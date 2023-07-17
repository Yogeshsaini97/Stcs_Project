


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI3ZTM2ZmM4ZWFiZDczZGU3MzIzOWQzMTUwOWViNjZhNmRhNGZkMzVjYzY5NWViN2M0ZTdkNGM0MmUyOWNiZCIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4OTU3NjI5MiwiZXhwIjoxNjg5NTc2ODkyLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.OGfA_C0gAtOYVw91Oo_lGkLVfOZ9QGKFB__woZ7xN7SpI2tkfUc2GVMTy3TLc0_-fg0ZzqWQk2s_Q-wROwzIRSq-M7qmlzL7xRBV8ga7KvnMVrN_UoV7lMuJkj_EU5TaeyU6T6lW9oDhYcrxLVa8jXyp_lgdsiM2ooZhcpe5nvnXjrhDCDpzvgY-Jj7lS_vIddq3Y07F_R9BZFZJ24P9IZpZ4r3yGafYXJcVvb5OTQLkxhknVNZcFm78ry1gXoOT_F4sSs0lH6mlGpP6bjLEEhPW0sSDsq5gCe1WSYcdf1OwbaRaa7QmghBoSgCg68vVfAW2VUgcX4FPahYRFjtNNQ",
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












