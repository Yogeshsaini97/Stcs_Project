export async function fetchData(url) {


  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIyMDQwMTBiODdmOWVhYTU5YTRmOTc4ODcyNzY5YjAzMzQzNTY5NGY5NGFlNjZlM2Q4YjBjM2VlM2M1OGQ3ZGYiLCJjbGllbnRfaWQiOiJpZC00NWU4NTI3Zi1lYTlkLWQzYzUtNmQzYi0xZDIyZDQ3ZWE0OWUiLCJpYXQiOjE2OTEzOTQ2MjksImV4cCI6MTY5MTM5NTIyOSwic3ViIjoiMjAxMjQiLCJ1c2VybmFtZSI6InRlc3QiLCJpc3MiOiJsb2NhbGhvc3QiLCJzY29wZSI6IkNfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcud3JpdGUgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcucmVhZCBDX01pbGVzdG9uZS5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZyBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcgQ19NaWxlc3RvbmUuZXZlcnl0aGluZy5yZWFkIENfQXBwcm92YWwuZXZlcnl0aGluZyBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcucmVhZCBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcud3JpdGUgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19BcHByb3ZhbC5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy5yZWFkIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLnJlYWQgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcud3JpdGUgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5BZGRyZXNzLmV2ZXJ5dGhpbmcud3JpdGUgQ19NaWxlc3RvbmUuZXZlcnl0aGluZyBDX0ludm9pY2UuZXZlcnl0aGluZy53cml0ZSBDX1Jpc2tzYW5kSXNzdWUuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfU3Rha2Vob2xkZXIuZXZlcnl0aGluZy5yZWFkIENfSW52b2ljZS5ldmVyeXRoaW5nIENfUHJvamVjdHQuZXZlcnl0aGluZyBDX0RvY3VtZW50LmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.lfWPkg73cytyhZY7nP3eXiitGELDKMqJAqhhYg6FPRP1uceHB9bd19YiIO6tDvYWChHWkxHDdUormCp_VC_aPGknsq4j-1fL_wVDNIbC6SZ0OEPKMe45d2_eRRfZ8Q0mKZJuCQiUb8tp92ppK9UvbJYy7nOBgpVW-7A_e5-2G5DvbzDSwd0LzIRAysh2BrsOp8L-UuooAwCEkUnwes3yf1WbGAbzH7X-O2AffzD-940WboOAv-cdfzZ1GO-_MkgQg7IzRkhI8NWP9C6WWvlcraeqpnYBeNDhb5N1G45snEtXIXSCqQeGyODvg_S4uREhvNye682NGByLWaMoTet5gA",
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










