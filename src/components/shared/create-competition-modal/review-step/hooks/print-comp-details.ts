import { format } from 'date-fns';

export const usePrintCompDetails = () => {
  const nameMap = new Map<string, string>([
    ["name", "Competition Name"],
    ["type", "Competition Type"],
    ["start_date", "Start Date"],
    ["end_date", "End Date"],
  ]);

  const printCompDetails = (k: string, v: string | Date) => {
    const value = v instanceof Date ? format(v, "MM/dd/yyyy") : v;
    return `${nameMap.get(k)}: ${value}`;
  };

  return { printCompDetails };
};
