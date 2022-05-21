export const formatterDate = (date) => {
  return new Intl.DateTimeFormat("vi-VI").format(date);
};
