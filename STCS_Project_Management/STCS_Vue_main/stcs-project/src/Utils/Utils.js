


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2MjJlOWM5NWE5MmVmN2YzYjQxZDdhZmY0N2FhMWYzNzI0OWJkZWY5ZmI3ODY1MDkwNDM4N2M3OWQyNGIyIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5MzA0MDI0LCJleHAiOjE2ODkzMDQ2MjQsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.h1dMlDvo-FT5SjUNm1v3-W55-3WzjO0KB3irGvZYk_mNlXb7mmKIZ8aEU72b_pb3SiP0ycetUopJ33c3YTgYdvYkNHNm7PnLRJ3RG3mnqm94RXRUmUm7Rw0phH4KGSc3gmksI3tyVuunG6kpMRTMEvGwzCFsHpySeVmy-dwqTtMkvR2s9id2IOzeAyFcDniX8WoOBZjozxGIqI8xUc5POIdexn0lX2nWxS0X3Px0AqTiQqj9xjh33SZt0WIqnROfhbJPpj8FqTuXJQJxRw7D2lKgDm_CPVCSJBIslBFgmLlmoQrpwPuVGHi_D9qoL-mz5izkFeBDWiqG_95aLlB0Yg",
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












