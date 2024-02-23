import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../Config/Store";
import { AnyAction } from "redux";

interface ReduxData {
  type: string;
  value: any;
}

export const setDataInRedux =
  (data: ReduxData): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    dispatch({
      type: data.type,
      payload: data.value,
    });
  };

  export const FORM_LAYOUT_HEADING = "FORM_LAYOUT_HEADING";


