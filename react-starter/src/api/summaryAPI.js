import axios from "axios";

async function fetchSummary() {
  try {
    const response = await axios.get("https://api.sampleapis.com/coffee/hot");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchSummary;
