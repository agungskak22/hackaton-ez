import * as User from "./user";
import * as Chart from "./chart";
export default {
  getUser: User.getUser,
  getUserById: User.getUserById,
  getMonthVisit: Chart.monthVisitData,
  getPenyakit: Chart.Penyakit
};
