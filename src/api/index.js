// implement your own methods in here, if your data is coming from A rest API

import * as User from "./user";
import * as Chart from "./chart";
export default {
  getUser: User.getUser,
  getUserById: User.getUserById,
  getMonthVisit: Chart.monthVisitData,
  getPenyakit: Chart.Penyakit
};
