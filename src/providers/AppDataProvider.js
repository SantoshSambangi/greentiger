import { createContext, useMemo, useState } from "react";

const AppDataContext = createContext();

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

export {AppDataContext, DataProvider};
