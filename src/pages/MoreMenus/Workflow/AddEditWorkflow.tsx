import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Row,
  Col,
} from "reactstrap";
// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import WebService from "../../../utility/WebService";
import FormLayout from "../../../Components/FormLayout/FormLayout";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Components/Config/Store";
import { addFormLayoutHeading } from "../../../Components/Reducer/AuthReducer";

interface propData {
  show: boolean;
  onCloseClick: any;
  formData?: any;
  getlist: any;
}

const AddEditTeam = (props: propData) => {
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [langaugedata, setLanguageData] = useState<any>([]);
  const dispatch: Dispatch<any> = useDispatch();
  const [formName, setFormName] = useState<any>();
  // const FormName: any = useSelector<RootState, addFormLayoutHeading>((state) => state.formLayoutHeading);
  const formNameUpdate = (name: any) => {
    setFormName(name);
  };
  console.log("test",props?.formData)
  return (
    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-xm my-offcanvas-new">
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        {(props.formData && props.formData.workflowId ? "Edit " : "Add ") +
          formName}
      </OffcanvasHeader>
      <OffcanvasBody className="my-offcanvas-body">
        <FormLayout
          formSlug="tblworkflow"
          editUrl="/edit-workflow"
          addUrl="/add-workflow"
          id={props?.formData?.workflowId}
          detailObj={props?.formData}
          formName={formNameUpdate}
          isClose={props.onCloseClick}
          getlist={props.getlist}
        />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default AddEditTeam;
