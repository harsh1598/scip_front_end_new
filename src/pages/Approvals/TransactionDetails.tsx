import React from "react";
import Select from "react-select";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import SimpleBar from "simplebar-react";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Label,
  Input,
  Row,
  Col,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
const TransactionDetails  = ({ show, onCloseClick }:any) => {

  return (
    <Offcanvas
      direction="end"
      isOpen={show}
      id="offcanvasExample"
      toggle={onCloseClick}
      className="size-sm"
    >
      <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
        Transaction Details
      </OffcanvasHeader>
      <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <Row>
                        <Col lg={12}>
                            <Table borderless striped  >
                                <tbody>
                                    <tr>
                                        <td> Company Name :  </td>
                                        <td> Jaggi@19 </td>
                                    </tr>
                                    <tr>
                                        <td> Campaign Name : </td>
                                        <td>  Jaggi@19 Idea 1  </td>
                                    </tr>
                                    <tr>
                                        <td>  Investor's Name: </td>
                                        <td> zim sha  </td>
                                    </tr>
                                    <tr>
                                        <td>  Transaction Amount: </td>
                                        <td> 1,15,00,000 INR   </td>
                                    </tr>
                                    <tr>
                                        <td>  Transaction Id :  </td>
                                        <td> 657567575675  </td>
                                    </tr>
                                    <tr>
                                        <td>  Funding Status :  </td>
                                        <td>  37,87,56,770 INR   </td>
                                    </tr>
                                    <tr>
                                        <td>  Deal Page:  </td>
                                        <td> <Link to="#">View</Link> </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <p className="p-2"> Please <Link to="/enterpreneur/more">click</Link>  here to close the campaign. </p>
                        </Col>
                    </Row>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                        onClick={onCloseClick}
                    >
                        Submit
                    </button>
                    <button
                        className="btn btn-light"
                        onClick={onCloseClick}
                    >
                        Cancel
                    </button>

                </div>
            </form>
    </Offcanvas>
  );
};

export default TransactionDetails;
