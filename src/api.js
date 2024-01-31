import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cplh0m921kCk4rDpWPwQnlbmFow6SVYp3JH4XDqD-IQ",
    },
    params: {
      query: term,
    },
  });

  //   console.log(response);
  return response.data.results;
};

export default searchImages;
