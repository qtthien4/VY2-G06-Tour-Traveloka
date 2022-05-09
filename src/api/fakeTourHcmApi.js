import { FAKE_CITY_TOUR_HCM } from "./Data/fakeDataTourHcm";
const fakeTourHcmApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_CITY_TOUR_HCM);
      }, 0);
    });
  },
};
export default fakeTourHcmApi;
