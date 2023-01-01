export const formatDate = date => {
  const objectDate = new Date(date);

  const day = objectDate.getDate();
  const month = objectDate.toLocaleString('default', { month: 'short' });
  const year = objectDate.getFullYear();

  return `${day} ${month} ${year}`;
};
