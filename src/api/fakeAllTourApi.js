import { FAKE_All_TOUR } from "./Data/fakeAllTour";

const fakeAllTourApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_All_TOUR);
      }, 300);
    });
  },
};
export default fakeAllTourApi;
