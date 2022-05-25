import { useQuery } from "react-query";
import axios from "axios";

export const useGetImage = () => {
  return useQuery(
    ["search"],
    async () => {
      const { data } = await axios.get(
        `https://api.thecatapi.com/v1/images/search`
      );

      return data;
    },
    { keepPreviousData: true }
  );
};
