export const SortTour = (state,priority) => {
  const lists = [...state];
  if (priority === "1") {
    return lists.sort(function (a, b) {
      return Number(b.Price) - Number(a.Price);
    });
  } else {
    return lists.sort(function (a, b) {
      return Number(a.Price) - Number(b.Price);
    });
  }
};
