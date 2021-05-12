const API_URL = "https://api.themes.levpopov.dev";

export default async function makeAPIRequest(endpoint: string, requestOptions = {}): Promise<any> {

  if(Object.keys(requestOptions).length === 0){
    requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  }

  try {
    let response = await fetch(API_URL + endpoint, requestOptions);
    if (!response.ok) {
      throw new Error(`API request error. Status: ${response.status} - ${response.statusText}`);
    }
    let data = await response.json();
    return {error: null, message: null, data: data}
  } 
  catch (error) {
    return {error: true, message: error.message, data: null}
  }

}