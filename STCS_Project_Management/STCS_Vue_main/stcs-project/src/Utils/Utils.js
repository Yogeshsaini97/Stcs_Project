


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2MjZmZTdiYTdmMjUxMGExNDA1YjNhYWVkMjYzODIxNzc3OGNjMzMzNmFjZTJjNTc5MTExNGFlNTM0YTYzIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5NTc1MzI4LCJleHAiOjE2ODk1NzU5MjgsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.Y_OMzWzC3T4h5lgoXfplKoQu_XccaTKJy40ge7TgQ-Nx3aL3_kQPwe68UTrstT1BIpB8UAJR58qrQz0l28-gYaHtUVcr2YIh7s391bVLXbhJ3BCajIItzP05amuteNwl5R760Qz9YL_gxW37tD0xepIXnfy4XrY4VJNnvkc82QHWDAUre3AAyy8p1igLRZWplIyd9YZgb9KesxNxV-gepgROVuqvHeNvrWJZFWT57RaG9NQYqHokV_EgB5zWglg3WiCuNxF7UeZJ51Ix3d_r-pJmL-h2jphsnq5xBmcn89OaG1Q9TJLh_VIhZRaB0QafJSHFvtZ0vKEUz1ohEMO7tw",
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












