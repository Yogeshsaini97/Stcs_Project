export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxMWU0YmMzZTgwOWE2ZmMyODdjNWQ2Yjk4OTNjYWM2YTVmOTBmOTc2MWQ5ZjFiZGQyZDRmYjdjYTVjMjFlNDlmIiwiY2xpZW50X2lkIjoiaWQtM2U0ZWM3ZWQtNGI1Zi0zOGJmLWU0NzAtYTUxMDhiYzM1ZGMwIiwiaWF0IjoxNjkxMzE5MzE5LCJleHAiOjE2OTEzMTk5MTksInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfSW52b2ljZS5ldmVyeXRoaW5nLnJlYWQgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy53cml0ZSBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcud3JpdGUgQ19Bc3NpZ25lZHRvbXlSb2xlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uQWRkcmVzcy5ldmVyeXRoaW5nIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcucmVhZCBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcgQ19BcHByb3ZhbC5ldmVyeXRoaW5nLnJlYWQgQ19EQ0MuZXZlcnl0aGluZy53cml0ZSBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcud3JpdGUgQ19Bc3NpZ25lZHRvbWUuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcucmVhZCBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfQXNzaWduZWR0b21lLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcgQ19BcHByb3ZhbC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcud3JpdGUgQ19NaWxlc3RvbmUuZXZlcnl0aGluZyBDX0Fzc2lnbmVkdG9teVJvbGUuZXZlcnl0aGluZy53cml0ZSBDX0RDQy5ldmVyeXRoaW5nIENfRENDLmV2ZXJ5dGhpbmcucmVhZCBDX0ludm9pY2UuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX0Fzc2lnbmVkdG9tZS5ldmVyeXRoaW5nIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLnJlYWQgQ19Bc3NpZ25lZHRvbXlSb2xlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIENfSW52b2ljZS5ldmVyeXRoaW5nIENfUHJvamVjdHQuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.u-BI0ElCYcQPIKozuoEkt11Isl11iEfHyAkL0oZ8PXlTUe3UWmdvrm6kVBIl3RsVzFsm1MCqwIkAKzpyXhVPPMb5-Utk4KP0VbcMC-JyjtqUTJWLN4ZG1NYyOv6wCrqIUTNyYMCqZaLkWiOgCcQtuS7NTbYwgNdOANrwTgraAlRjTuflnEoNRTgyKORFhI0U6YI5aVfA8iPf7bt_yBug2Ons92N_YEPGej6998GzaCI4n-3rt-9PHS7Mf-wsv3gBrUcAcqBYq9UFSXFO4s3kKaQq9_oqPuEHIjci4EAS6dOgAeVH7sV8h9zAPfXO4TKxwTxYuZ3Q0AZKGRFEzD3hLw",
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










