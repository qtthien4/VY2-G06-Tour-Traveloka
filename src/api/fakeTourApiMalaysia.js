import { FAKE_CITY_TOUR_MALAYSIA } from "./Data/fakeDataTourMalaysia";

const fakeTourApiMalaysia = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_CITY_TOUR_MALAYSIA);
      }, 300);
    });
  },
};
export default fakeTourApiMalaysia;
