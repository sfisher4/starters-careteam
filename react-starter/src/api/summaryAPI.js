import axios from "axios";

async function fetchSummary() {
  try {
    const response = await axios.get("/summary?q=proxy");
    return response.data;
  } catch (error) {
    return error;
  }
}

export default fetchSummary;
