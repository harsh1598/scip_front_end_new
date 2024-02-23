import { all, fork } from "redux-saga/effects";
import LayoutSaga from "./layouts/saga";

//Enterpreneur
// import Enterpreneur from "./enterpreneur/index";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    // fork(AccountSaga),
    // fork(AuthSaga),
    // fork(ForgetSaga),
    // fork(ProfileSaga),
    // fork(chatSaga),
    // fork(projectSaga),
    // fork(taskSaga),
    // fork(cryptoSaga),
    // fork(ticketsSaga),
    // fork(calendarSaga),
    // fork(ecommerceSaga),
    // fork(crmSaga),
    // fork(invoiceSaga),
    // fork(mailboxSaga),
    // fork(dashboardAnalyticsSaga),
    // fork(dashboardCrmSaga),
    // fork(dashboardEcommerceSaga),
    // fork(dashboardCryptoSaga),
    // fork(dashboardProjectSaga),
    // fork(dashboardNFTSaga),
    // fork(teamSaga),
    // fork(fileManager),
    // fork(todos),
    // fork(jobSaga),
    // fork(APIKeysaga),
    // // fork(Enterpreneur)
  ]);
}
