import axios from "axios";

export async function fetchNavItems() {
  let res = await axios.get("/public/database/navData.json");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function TestimonialItems() {
  let res = await axios.get("/public/database/testimonialData.json");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
