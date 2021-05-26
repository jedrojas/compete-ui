import { format } from 'date-fns';

export const usePrintCompDetails = () => {
  const nameMap = new Map<string, string>([
    ["name", "Competition Name"],
    ["type", "Competition Type"],
    ["startDate", "Start Date"],
    ["endDate", "End Date"],
  ]);

  const printCompDetails = (k: string, v: string | Date) => {
    const value = v instanceof Date ? format(v, "MM/dd/yyyy") : v;
    return `${nameMap.get(k)}: ${value}`;
  };

  return { printCompDetails };
};
