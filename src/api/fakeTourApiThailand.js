import { FAKE_CITY_TOUR_THAILAND } from "./Data/fakeDataTourThailand";

const fakeTourApiThailand = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_CITY_TOUR_THAILAND);
      }, 0);
    });
  },
};
export default fakeTourApiThailand;
