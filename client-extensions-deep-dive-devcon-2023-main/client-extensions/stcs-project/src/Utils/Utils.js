


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2ODMxZDJlYWI5NDU4ZTMyODllMThmZWU2ZDQzYzg4NDZjYmZmNzU1YTUyOWM2NzBhODMyMzBlY2NkMmM3ZTE4IiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjg5MjM0MDg2LCJleHAiOjE2ODkyMzQ2ODYsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.RMnOTmKhGMpmSUwWYBEmLvgWr4PdmtD60EGjTX7lkwKU3jhzaHaYvdrCwXMC4gzFAXFwZpATTo58X_Z8Xtmn4eEWolQfAynzITxTLLgtvmaH-JCBhlxMyzbMil8nQOv4kg5VHIwoAYCtZYEX31qAUDJqz80RPGNUPTrhLUWfWPiRIiii813fO-_sbJ3hxMKIdwWuzLFV8DluY44lp-mBmi5Mam2FJ1tfxkec374w7VBKuLHvwgl7vlH6ay8DUX9R162RGG3jY8VL-84iRKbFu3w4w8ylaw47_8C7NQULDL-ZTvOJIm1BhakSJaisbWO2CxGbi8FImABSuwEmUsnG9A",
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












