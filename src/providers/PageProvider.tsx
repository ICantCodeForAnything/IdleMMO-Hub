
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const PageContext = createContext<
  | {
      activeIndex: number;
      setIndex: (index: number) => void;
    }
  | undefined
>(undefined);

export const PageProvider = ( props: {children : React.ReactNode} ) => {
  const { children } = props;
  const [activeIndex, setIndex] = useState<number>(0);

  return (
    <PageContext.Provider
      value={{
        activeIndex,
        setIndex,
      }}>
      {children}
    </PageContext.Provider>
  );
};

export function usePage() {
  const ctx = useContext(PageContext);
  if (ctx === undefined) throw new Error('usePage must be used within a PageProvider');
  return ctx;
}