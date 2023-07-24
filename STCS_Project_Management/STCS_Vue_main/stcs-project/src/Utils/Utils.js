


export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJiNjliZDgxZDczNDRkMGM4NmUzMDcwYTU3ZWY0NWQxMzYwNWI0MDcwNDlkZTI2YTE5NGNlZjRkNjk1NzMzZmViIiwiY2xpZW50X2lkIjoiaWQtNDVlODUyN2YtZWE5ZC1kM2M1LTZkM2ItMWQyMmQ0N2VhNDllIiwiaWF0IjoxNjkwMTkwNTcxLCJleHAiOjE2OTAxOTExNzEsInN1YiI6IjIwMTI0IiwidXNlcm5hbWUiOiJ0ZXN0IiwiaXNzIjoibG9jYWxob3N0Iiwic2NvcGUiOiJDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrLmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrLmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfUmlzay5ldmVyeXRoaW5nIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy5yZWFkIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.IZKgm6zeftgCnwgxTnKI4fRbhMI656moo1tJKV5bVvdGYlKvIbbR3bRd1D2QTHrDHPAExS0lnhjJxQ9fCcMk0VUyohdhd7C3q1KsxK_OPTp2J84OO59LPSBoy_Io54QhPNkIYbC1hIV4K3M6wWwRvEc_UnVXRI0Myeb4zaSD8Ycf2L9pxLclbQplltBYm0ZBatF1cuCO4sfemvSokcXi12Ro1dmzpct0oZrmaF7XlHN7YlDEB0e1js78PLfF2rjWzdt4xOGD2IgOinVH3kBxjrGV51qeFRMG9f-DIMmvi2v_hwa1Xzc1pnM3mrxSAkA4hHhmIxd8v_7ECAfdY2fULA",
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









