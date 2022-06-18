import * as React from 'react';

export interface IUnitContextValue {
  unit: string,
  setUnit: (unit: string) => void
}

interface UnitProviderProps {
  children: React.ReactNode
}

export const UnitContext = React.createContext<IUnitContextValue>({ unit: '', setUnit: () => { } });

export const UnitProvider = ({ children }: UnitProviderProps) => {
  const [unit, setUnit] = React.useState('C');

  return <UnitContext.Provider value={{ unit, setUnit }}>{children}</UnitContext.Provider>
}
