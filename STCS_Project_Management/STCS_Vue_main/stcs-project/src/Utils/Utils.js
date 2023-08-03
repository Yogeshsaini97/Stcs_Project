export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI4NmMwOTg4NmNmYThiN2IzNmM2OGE0NTY3Njk0ZDg1MmIyYTJlYzczMWUzMGVjMjYzZWExM2RlOWMwODUyMmEyIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjkwODk3MDk4LCJleHAiOjE2OTA4OTc2OTgsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfSW52b2ljZS5ldmVyeXRoaW5nLnJlYWQgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3QuZXZlcnl0aGluZy53cml0ZSBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy5yZWFkIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcgQ19BcHByb3ZhbC5ldmVyeXRoaW5nLnJlYWQgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcucmVhZCBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nIENfQXBwcm92YWwuZXZlcnl0aGluZy53cml0ZSBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgQ19NaWxlc3RvbmUuZXZlcnl0aGluZyBDX0ludm9pY2UuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIENfRG9jdW1lbnQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.UYt9tQRT7Bwy28x1jWKjpfwpKbx7xMPk5lVuNihjfkWPPbl61WMyr7z_W14QnwbUk4K4wE0k9V-7ouWTiEFOtdwqTUn6KF9x3SLT1LbQADYTXcVRTbJT3AB3Uzbj9I_Hw27bdWGcTw0ay3mVXh_6WL-_XVoHIGRIeUrm9FMYUHOHNgowJN4XW3y1CbwIGUyuHdJHZcm9_O5sZds2bL4ACIsVI4s8VrDnSLs7keQcs7BNfYurlhUUsDpg98j8mSvHLGvYo8jFysT1FibcovfFUNvs74zdEt52qph-ehnZoo57kTC0akOOswyG_0Gl69YRMG899We6VAMydoTGPG_Nhw",
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


export function formatTimeTo12HourFormat(dateString) {
const date = new Date(dateString);
const hours = date.getHours();
const minutes = date.getMinutes();
const amOrPm = hours >= 12 ? "PM" : "AM";
const formattedHours = hours % 12 || 12;
const formattedMinutes = minutes.toString().padStart(2, "0");
const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
return formattedTime;
}


export function GiveDayandmonthseperate(inputDate) {
// Convert the input date string to a Date object
const dateObj = new Date(inputDate);

// Get the day of the month in the format "dd"
const day = String(dateObj.getDate()).padStart(2, '0');

// Get the month abbreviation (e.g., "Jul") and the year in 2-digit format (e.g., "'23")
const monthAbbreviation = new Intl.DateTimeFormat('en', { month: 'short' }).format(dateObj);
const yearTwoDigits = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(dateObj);

// Construct the formatted date string
const formattedDate = `${monthAbbreviation} '${yearTwoDigits}`;

return {day, formattedDate};
}


export function find_num_of_risksnissues(apiGot){
  no_of_Risks=0;
  no_of_Issues=0;

  console.log(apiGot)
  apiGot.items.forEach(element => {

    if (element.type == "Issue") {
      no_of_Issues++;
    }
    else if (element.type == "Risk") {
      no_of_Risks++;
    }


  });
}










