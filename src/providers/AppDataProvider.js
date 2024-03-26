import { createContext, useContext, useMemo, useState } from "react";

const AppDataContext = createContext(null);

const DataProvider = (props) => {
  const [sample, setSample] = useState(2);
  const [result, setResult] = useState(["santosh"]);

  const memoizedvalue = useMemo(() => {
    return { result, setResult, sample, setSample };
  }, [sample, setSample.result, setResult]);

  return (
    <AppDataContext.Provider value={memoizedvalue}>
      {props.children}
    </AppDataContext.Provider>
  );
};

const useContextCustomHook = () => {
  return useContext(AppDataContext);
};

export { AppDataContext, DataProvider, useContextCustomHook };
