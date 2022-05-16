import { FAKE_API_TYPE_EXPERENCE } from "api/Data/fakeDataTypeApi";

const fakeTypeApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(FAKE_API_TYPE_EXPERENCE);
      }, 200);
    });
  },
};
export default fakeTypeApi;
