export const covertDateTime = (dateTime: string) => {
  const [year, month, date] = dateTime.split('T')[0].split('-');
  return `${year}.${month}.${date}`;
};

export const removePropertiesFromHtml = (html: string): string => {
  const parser = new DOMParser();
  const content = parser.parseFromString(html, 'text/html');

  content.body.querySelectorAll('*').forEach(element => {
    element.removeAttribute('style');
    element.removeAttribute('class');
  });

  return content.body.innerHTML;
};
