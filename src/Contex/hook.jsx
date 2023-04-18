import { useContext } from "react";
import LocationsContext from "./locationContext";

const useHookLocation = () => {
    return useContext(LocationsContext)
}

export default useHookLocation