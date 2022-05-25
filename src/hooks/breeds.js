import { useQuery } from "react-query";
import axios from "axios";

export const useGetBreeds = (activePage) => {
  return useQuery(
    ["breeds", activePage],
    async () => {
      const { data } = await axios.get(
        `https://catfact.ninja/breeds?page=${activePage}`
      );

      return data.data;
    },
    { keepPreviousData: true }
  );
};
