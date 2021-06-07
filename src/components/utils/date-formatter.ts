import format from 'date-fns/format';

export const formatDate = (date: Date) => format(new Date(date), "PPp");
// export const formatDate = (date: Date) => format(new Date(date), "MM/dd/yyyy");
