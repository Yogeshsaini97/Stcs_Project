


export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2NGU0NDhiYWQyZjViNzFiYTliNGRlZDJlOTViMTZlZDc2NDM2MGZjMTcxZTYzN2M3NGRkM2NhYWE5ODljYyIsImNsaWVudF9pZCI6ImlkLTQ1ZTg1MjdmLWVhOWQtZDNjNS02ZDNiLTFkMjJkNDdlYTQ5ZSIsImlhdCI6MTY5MDIwMDU0MiwiZXhwIjoxNjkwMjAxMTQyLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uQWRkcmVzcy5ldmVyeXRoaW5nLnJlYWQiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.gQKW9BiWmzRwcszcuUSrPNW81oCWL_R5bezZGN02U4YiA28ubNbHrAAcrkE_tG1aJaU4eGCqjKpiDKAo5kAvlxKpn_pUHeunl0gmVUoN8ZFAimrpsfZ3804lJzEphyZOboz-_DZ8Kcbo7JnuqabjqYqCHY_7Q2st0UciZFTyBBiPg3pf3z1VZ8aiOuTcUqA10gURDiNjbkP2YVzit7ABm-p3HRmUK75nk80zFm7ZFbEoaCAV_19j3POypV3JbaeItFCAwTwBoohXyr79NFYa_BZAGD58R8BwAi37V7A9XPPCUA4NUCWuhF0L4AVMsgnfZ3MyiKjD-zI0Rs3JqIkgxQ",
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









