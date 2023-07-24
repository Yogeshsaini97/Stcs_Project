


export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI4NmE3N2E1YWQ0MzhmNGYwYjRlOGQ3NWVhMzdmZTM3ZDNjMTJhZWQ1Nzc4YzY1ZmZkOTM5ODRmY2FlNGUxIiwiY2xpZW50X2lkIjoiaWQtNDVlODUyN2YtZWE5ZC1kM2M1LTZkM2ItMWQyMmQ0N2VhNDllIiwiaWF0IjoxNjkwMjA3MjEwLCJleHAiOjE2OTAyMDc4MTAsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZyBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfRG9jdW1lbnQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcucmVhZCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.N1h_QUogq7hqa6mJ4tYrXJsm2ZaPWZW8Ul2W64MFjRtoXzMcIpbWVm0do8yiYeCYdt8bd9zSHiOWHNmJKIAmEoYLw96tavcwvdByTGTlWLk-w4eMskILyI1nw-_NVQRAYQOq9gzFKKdsYyJjrjyPfonIIvsGKuF-A_PLGq369BVzLNpA1HB_DH0rAu8pPqZUl-UBjEXNqwM_gepCUu_QUmzdSRamFUU_9hGHmvToHMb_Z92frvCbV_F4L_oAz9gboSeRr8OmNufu5uB2VVQpQacMyIuW_DGPocVvidlmMx5-lt33wizBIr8IqhJdpKRwIFijB6JcgkDomggi0ww9tQ",
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









