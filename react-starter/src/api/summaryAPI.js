import axios from "axios";

async function fetchSummary() {
  try {
    const response = await axios.get("/summary?q=proxy");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default fetchSummary;
