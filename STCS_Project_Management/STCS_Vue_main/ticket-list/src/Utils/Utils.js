
function hearderToken(){
  return "Bearer eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiIxNTUyZTdkYjk2ZGVkZGQ4ZWMxMDk1YTcyZGMwMTdlYWU3YmRiMGYwYTdmMTczMjc3NjU2ZTMyY2RkOWY5MSIsImNsaWVudF9pZCI6ImlkLTQ1ZTg1MjdmLWVhOWQtZDNjNS02ZDNiLTFkMjJkNDdlYTQ5ZSIsImlhdCI6MTY5Mjc3OTg4NCwiZXhwIjoxNjkyNzgwNDg0LCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19TdXBwb3J0VGlja2V0LmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0U2NoZWR1bGUuZXZlcnl0aGluZy53cml0ZSBDX0ludm9pY2UuZXZlcnl0aGluZy5yZWFkIENfU3VwcG9ydFRpY2tldC5ldmVyeXRoaW5nLndyaXRlIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nIENfTWlsZXN0b25lLmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZyBDX1N0YWtlaG9sZGVyLmV2ZXJ5dGhpbmcgQ19BcHByb3ZhbC5ldmVyeXRoaW5nIENfU3VwcG9ydFRpY2tldERvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBDX0FwcHJvdmFsLmV2ZXJ5dGhpbmcucmVhZCBDX1N1cHBvcnRUaWNrZXRGZWVkQmFjay5ldmVyeXRoaW5nLndyaXRlIENfRG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3RTY2hlZHVsZS5ldmVyeXRoaW5nLnJlYWQgQ19TdXBwb3J0VGlja2V0RmVlZEJhY2suZXZlcnl0aGluZy5yZWFkIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLnJlYWQgQ19TdXBwb3J0VGlja2V0Q29tbWVudC5ldmVyeXRoaW5nIENfU3VwcG9ydFRpY2tldENvbW1lbnQuZXZlcnl0aGluZy5yZWFkIENfQXBwcm92YWwuZXZlcnl0aGluZy53cml0ZSBDX0RvY3VtZW50LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZy5yZWFkIENfU3VwcG9ydFRpY2tldENvbW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLlVzZXIuZXZlcnl0aGluZyBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy5yZWFkIENfUHJvamVjdHQuZXZlcnl0aGluZy53cml0ZSBMaWZlcmF5LkhlYWRsZXNzLkFkbWluLkFkZHJlc3MuZXZlcnl0aGluZy53cml0ZSBDX01pbGVzdG9uZS5ldmVyeXRoaW5nIENfSW52b2ljZS5ldmVyeXRoaW5nLndyaXRlIENfUmlza3NhbmRJc3N1ZS5ldmVyeXRoaW5nLndyaXRlIENfU3VwcG9ydFRpY2tldC5ldmVyeXRoaW5nLnJlYWQgQ19TdXBwb3J0VGlja2V0RG9jdW1lbnQuZXZlcnl0aGluZy53cml0ZSBDX1N1cHBvcnRUaWNrZXRGZWVkQmFjay5ldmVyeXRoaW5nIENfUHJvamVjdFNjaGVkdWxlLmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcud3JpdGUgQ19TdGFrZWhvbGRlci5ldmVyeXRoaW5nLnJlYWQgQ19JbnZvaWNlLmV2ZXJ5dGhpbmcgQ19Qcm9qZWN0dC5ldmVyeXRoaW5nIENfU3VwcG9ydFRpY2tldERvY3VtZW50LmV2ZXJ5dGhpbmcgQ19Eb2N1bWVudC5ldmVyeXRoaW5nIiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyJ9.raACbHidrmYgM-K2noAzBQ3sWB6tCCvSht1TVaXii7T2v8cBocW6-KBQywuNfotxGBxXeBmU7VXDHJsoDC02BHXqChjiUu8YkHT_oqm--8yKqjQbZxMtsO7yukL2VIihI8se3mPSATWR6ffEw-jjCLMcPYL1-jB757lLxm4FKJV0HdTyh-b6A1r17jPAP5b_v4rdhzJjJLdkukGhwlshHjaKuvXiMalEpfr8xO7nt7QkO35TLNhkWh48ggmtA40Z3oJw-9TTvItK39U_WQ-gnjdhsCZFD0ta0PooyqIehg_mCMiL-U3ms6c8688yswOog8U9VvExv-8tAG_yIUJ9NA" 
}
export async function fetchData(url) {

  const token = hearderToken();
  let response = await fetch(url, {
      method: 'GET'
      ,
      headers: {
        Authorization: token,
        'Content-Type': 'application/json'
      }
    })
       
    response=await response.json();
 


return response;    
}

export async function updateData(url, dataToUpdate) {
  const token = hearderToken();
  const response = await fetch(url, {
      method: 'PUT', // Use the PATCH method
      headers: {
          Authorization: token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToUpdate) // Provide the data you want to update
  });

  const jsonResponse = await response.json();
  return jsonResponse;
}

export async function AddDataPost(url, dataToUpdate) {
  const token = hearderToken();
  const response = await fetch(url, {
      method: 'POST', // Use the PATCH method
      headers: {
          Authorization: token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToUpdate) // Provide the data you want to update
  });

  const jsonResponse = await response.json();
  return jsonResponse;
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


export function formatDate() {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');

 return `${year}-${month}-${day}`;
}






