


export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2YjQ2MWM5ZDYxNWZkMTVlZGRmMTY1YTQ0M2UwY2JjMTI0MzJkNDU5ODYyNGRkZGYzN2U3OTFlMWVjNjAyNCIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY5MDQ0ODExNSwiZXhwIjoxNjkwNDQ4NzE1LCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0LmV2ZXJ5dGhpbmcud3JpdGUgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZyBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgQ19SaXNrc2FuZElzc3VlLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3QuZXZlcnl0aGluZyBDX1Byb2plY3QuZXZlcnl0aGluZy5yZWFkIENfRG9jdW1lbnQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.ECgmHrBsgnIx4wL5s4Bl_mjJ3w4mp8ELFV_0bVe-ATQVO4P7bBVq4CH3t61G9L8yjtblBs5RWSIqF8_P-qJcHvVbZntgCmr7MczuAJS8bTz-gLnlvBCVJjMAcSpNVqykBs9RctjpL2mOJqq3JyK54C_tURXDcEjdvHTpbIEm1aWLIfzgOo4BH2hQevPkcb3pOXa2cjWD_xQ3lKvzhBIIbD1WgKLF9uzC7VCYhgozKGrNZDQ3XrCKqeAbu2JRWx2vfGAymNRutMKvKc28izfQLHa3gppGQDX67IzKGhQN1Pbc0_-7lZJKwPLY4p3vO94pjKNwxI_ofFmWrgy5vzKDgA",
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









