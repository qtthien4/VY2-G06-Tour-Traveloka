import { FAKE_CITY_TOUR_SINGAPORE } from "./Data/fakeDataTourSingapore";

const fakeTourApiSingapore = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_CITY_TOUR_SINGAPORE);
      }, 300);
    });
  },
};
export default fakeTourApiSingapore;
