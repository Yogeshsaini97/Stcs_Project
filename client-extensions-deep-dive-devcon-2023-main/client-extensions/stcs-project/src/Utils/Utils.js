import axios from 'axios';


export async function fetchData(url) {


    let response = await fetch(url, {
        method: 'GET'
        ,
        headers: {
          Authorization: 'Bearer ' + "eyJ0eXAiOiJhdCtqd3QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiJhZTI4MWIzNjljZjdjNjc2YWVjMmMzYTQ5NTM2NTcyNjQ5YzhjODRhMTVhNzg5ODQzNjk5NDQ5ZWM0ZmQyYiIsImNsaWVudF9pZCI6ImlkLTNlNGVjN2VkLTRiNWYtMzhiZi1lNDcwLWE1MTA4YmMzNWRjMCIsImlhdCI6MTY4OTA0OTE3MSwiZXhwIjoxNjg5MDQ5NzcxLCJzdWIiOiIyMDEyNCIsInVzZXJuYW1lIjoidGVzdCIsImlzcyI6ImxvY2FsaG9zdCIsInNjb3BlIjoiQ19Qcm9qZWN0dC5ldmVyeXRoaW5nLndyaXRlIExpZmVyYXkuSGVhZGxlc3MuQWRtaW4uVXNlci5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nIENfUHJvamVjdC5ldmVyeXRoaW5nLndyaXRlIENfUHJvamVjdC5ldmVyeXRoaW5nLnJlYWQgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcucmVhZCBDX1Byb2plY3R0LmV2ZXJ5dGhpbmcgTGlmZXJheS5IZWFkbGVzcy5BZG1pbi5Vc2VyLmV2ZXJ5dGhpbmciLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIn0.Zrl7cyuyYu7T-cSU7IDeSoVkXhctrb2UB0kv4RLYtvNXkE6U7-MCxStEz-uvQn5nnZnO8cSZ2uUM2bnblhRB8qaf_8uWgBZv3tMYRbqALXD3r2J-BkqTNunDCqxj_JxuVQ3OMnDihCi9lM_RekY6zE5dVQuHK-YEU_am95dDv00oaGQVzK6s2n9yBP9VoOxrBIPAslR-vknZc1AK2TSPcnOqzYkXyM79jGNUJp2M7susQAO_gDNQu7K6-1b4sVfFrVjynZOTm2-HyIBI-I4o9GIk0ogGMessf5cIvZv8sF1WWoAX4TMFTSt9SEsIsGggjudF_fL5srNu5DmcLI1_lQ",
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












