


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmODQ2ODk2YTEwMjFjMzc1OThhNTdmY2I1YWUxODBiNDFmYmI2ZWIxNDc1NWJjMjI4YjYyYjRmM2MzNTliIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5NzQ1NTMyLCJleHAiOjE2ODk3NDYxMzIsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.RNx6y_W3ZaSGZX4gUdzQD-7G5iAIaRTQzf6QtjJCW92ksMYzrEVA5RVK-iHHJ-gAok_Oi8i3T-Aedy1IurAUamsEVN-CQs_4B5pwbGXLXXIm39lI-gA6xjriIm_Qu7tdVYp7tHsfp-ZWYoivEbNiIKuODRZCePDrIPGcnEhGClYxc87zF1QRlTtlAZBpEFqKidVwBsCDxiPj75UKjNhDb3fsk3VFE2nNe3DefFpRfR5tFUV6LHrnjPrLw9ckdmql7MBddKdj3hPGhBf_nDPKBAhhmy8IGiwequsRPTTIlNehOwLWxDNIRdo96OWXMu4jWm7m9jQzDPCa5Gy0sbWIuw",
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












