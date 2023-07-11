import axios from 'axios';


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2ZDRjN2QyMjRlYTczZWJlMjZmNGM3YTI2ZWI5MDIxMTEzYmFkNzljOTQyNTYwOWQ2ZTc1OTlhZWI3NmUxNCIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4OTA3MDE1MSwiZXhwIjoxNjg5MDcwNzUxLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.na3D5i_G6CWG_1bY4l9m0aqvx2oo7r5qAWC839zhHYOu0d6nf9I0X6n8Fi1CqsL5MddnKjIza7zJfVLLvq7M4_geOBMDXtNj9vco2gJsucDP3PUqvaJsH1vcqwASjFXPZ3CWugTArkCTibzLwK_uU4Qtl6saJHGgOmOpX__56fXrDOfAW1pWM0QjtaNw42AifGFk1blZCryuHjOmnDqC9K2TkkBg2egQjofO2vpaVfy32vnz9TGQszjpRHWWP5MwnEu3_YOl2Ykz0xqhmpFun5e4I2tl_BiFUS2nzuHCmI-JqrZXqGYmmXwQxPqWPPanHG5hiNCiej5EwtYUsNMtKw",
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












