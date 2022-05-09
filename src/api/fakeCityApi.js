import { FAKE_DATA_CITY } from "./Data/fakeDataCity";

const fakeCityApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_DATA_CITY);
      }, 0);
    });
  },
};
export default fakeCityApi;
