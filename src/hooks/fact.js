import { useQuery } from "react-query";
import axios from "axios";

export const useFact = () => {
  return useQuery(
    ["fact"],
    async () => {
      const { data } = await axios.get(`https://catfact.ninja/fact`);

      return data.fact;
    },
    { keepPreviousData: true }
  );
};
