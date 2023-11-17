import axios from "axios";

export async function TestimonialItems() {
  let res = await axios.get("/database/testimonialData.json");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
