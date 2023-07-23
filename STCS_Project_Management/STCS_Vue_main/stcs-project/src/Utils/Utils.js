


export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJmYjMwODlmYzRkNzJjNjc0ZmEwM2Y1YTNlY2VkMDM5MWI5OGQzZGJhODNhMWUwOTE0MjFlMzZmNjdhYTMxNCIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY5MDA5NzI1MSwiZXhwIjoxNjkwMDk3ODUxLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19TY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfU2NoZWR1bGUuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1NjaGVkdWxlLmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIENfRG9jdW1lbnQuZXZlcnl0aGluZyIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMifQ.UmXJJwe7MzzI84YC2eQv9WqkBDpZbls7tnsRSJRzkr7TDU5nQjJ1488rVGk1ujMbzmU5uZBXI5oJtOmAp4xO2nR52HMddlf7EFvuvAfmFJWhCkoUvh6aBcm71T8MIsJQmN_izMUhh5G_xnoEbqwbOoMYmd7dVb6q41hxmK2Pi5Ah2uv85QrJdGo5uPXQCzfuRYOfD5cB8s-2OIzBm4DodSHagkKjsrpXJ1juxfu-EH9ytfTP4srnkrxpGHQfBFkG2EIl_18F45LGVYpCy7Eg0x4GPYTJnWSyaIhpn08iyYWS3TWQnqKhKZsF3OnDLjQOWknMFH_Kc2wJqpZMg_hMAA",
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









