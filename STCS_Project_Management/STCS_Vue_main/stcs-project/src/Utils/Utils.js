export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2NTcyYjk5NWZhNDkyYzdkYTVkMTRiOGI1YTZhMjNiOTc0ZmU4YzZiMzdhNWE3ZTA4YTI4ZWRiYmQ4YjE4NCIsImNsaWVudF9pZCI6ImlkLTQ1ZTg1MjdmLWVhOWQtZDNjNS02ZDNiLTFkMjJkNDdlYTQ5ZSIsImlhdCI6MTY5MTA0OTM4OSwiZXhwIjoxNjkxMDQ5OTg5LCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy53cml0ZSBDX0ludm9pY2UuZXZlcnl0aGluZy5yZWFkIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZyBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLnJlYWQgQ19BcHByb3ZhbC5ldmVyeXRoaW5nIENfQXBwcm92YWwuZXZlcnl0aGluZy5yZWFkIENfRG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcud3JpdGUgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy53cml0ZSBDX01pbGVzdG9uZS5ldmVyeXRoaW5nIENfSW52b2ljZS5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLnJlYWQgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIENfRG9jdW1lbnQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.NhpRymvSnLSMwlF3oxlkfk8pa-sqnWw9PyqlMej3xUV_KUxQkL3Zg_AYZHFvDHb5mUEiXuxh8Fn_dgcHI-bnFM6_pbF2Qvb4ERyfkOYr3eMU5jJBOZQ-XOn-vRvVD-qX-7up5o-xmSuc3kQPASr0USEOscYkE06ql3tJe1SoQFdWk_tjr3rxq6Rh4THdFKc-EBXAoiBjcar1dm4OytQRHBlww2kzFpjsogPl3nOPokf0NtUcnBQ4_jujsq9SI_KoxOg5mz04o2QD-XehBWIiwtVyxwOanxQJLLhyDMyBp23Xfq-OpUo2TcoVvWi53L-jRrqJlqTSFjaJ8RCrcROe1w",
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










