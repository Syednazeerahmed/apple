import Axios from "axios";
import { useQuery} from "@tanstack/react-query";

export const useGetCat = () => {
    const {
      data: catData,
      isLoading,
      isError,
      refetch,
    } = useQuery({
      queryKey: ["cat"],
      queryFn: () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
      },
    });

    const refetchCatData = () => {
        alert("data refetched");
        refetch();
    }
    // if (isLoading) return <h1>loading...</h1>;
    // if (isError) return <h1>sorry, there is an error</h1>;

    return { catData, refetchCatData, isLoading };
}

