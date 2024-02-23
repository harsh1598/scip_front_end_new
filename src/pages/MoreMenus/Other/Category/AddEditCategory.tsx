import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useState } from "react";
import FormLayout from "../../../../Components/FormLayout/FormLayout";

interface propData {
  show: boolean;
  onCloseClick: any;
  formData: any;
  getlist: any;
  parentId?: any;
}

const AddEditCategory = (props: propData) => {
  const [formName, setFormName] = useState<any>();
  const formNameUpdate = (name: any) => {
    setFormName(name);
  };
  return (
    <Offcanvas
      direction="end"
      isOpen={props.show}
      id="offcanvasExample"
      toggle={props.onCloseClick}
      className="size-xm my-offcanvas-new">
      <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
        {(props.formData && props.formData.categoryId ? "Edit " : "Add ") +
          (props.parentId ? "Sub Category" : formName)}
      </OffcanvasHeader>
      <OffcanvasBody className="my-offcanvas-body">
        <FormLayout
          formSlug="tblcategory"
          editUrl="/edit-category"
          addUrl="/add-category"
          id={props?.formData?.categoryId}
          detailObj={props?.formData}
          subId={props?.parentId}
          formName={formNameUpdate}
          isClose={props.onCloseClick}
          getlist={props.getlist}
        />
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default AddEditCategory;
