export const covertDateTime = (dateTime: string) => {
  const [year, month, date] = dateTime.split('T')[0].split('-');
  return `${year}.${month}.${date}`;
};
