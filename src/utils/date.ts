export const formatLocalDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
export const formatShortDate = (date: string): string => {
  const [year, month, day] = date.split("-");

  return `${day}.${month}.${year.slice(-2)}`;
};
