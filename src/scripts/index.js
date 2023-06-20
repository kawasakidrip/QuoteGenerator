import axios from "axios";
async function quote() {
  const options = {
    method: 'GET',
    url: 'https://quotes15.p.rapidapi.com/quotes/random/', 
    params: {
      language_code: 'ru',
    },
    headers: {
      'X-RapidAPI-Key': '81d549cfaemsh060cff6e4b4677ep1c0aeajsn1ee45e409c7a',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.content);
    console.log(response.data.originator.name);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
export default quote;
