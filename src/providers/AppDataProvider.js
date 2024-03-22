import { createContext, useContext, useMemo, useState } from "react";

const AppDataContext = createContext(null);

const DataProvider = (props) => {
    
    const [sample, setSample] = useState(false);

    const memoizedvalue = useMemo(() => {
            return { sample, setSample };
        }, [sample, setSample])

        console.log(sample)

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
