import { createContext, useContext, useMemo, useState } from "react";

const AppDataContext = createContext(null);

const DataProvider = (props) => {

    const [sample, setSample] = useState(2);
    const memoizedvalue = useMemo(() => {
            return { sample, setSample };
        }, [sample, setSample])

    return (
        <AppDataContext.Provider value={memoizedvalue}>
            {props.children}
        </AppDataContext.Provider>
    )
}

const useContextCustomHook = () => {
    return useContext(AppDataContext)
}

export {AppDataContext, DataProvider, useContextCustomHook};
