import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, UncontrolledCollapse, } from "reactstrap";
import SimpleBar from "simplebar-react";

const MoveItem = ({ show, onCloseClick }) => {

    const folderlist = [
        {
            id:1,
            name:"Documents"
        },
        {
            id:2,
            name:"test"
        }
    ]

    return (
        <Offcanvas
            direction="end"
            isOpen={show}
            id="offcanvasExample"
            toggle={onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                <i className="ri-file-transfer-line align-bottom me-1"></i>{" "} Move Item Into
            </OffcanvasHeader>
            {/*  h-100 */}
            <OffcanvasBody>
                <SimpleBar className="px-4 mx-n4" style={{ height: "calc(100vh - 468px)" }}>
                    <ul className="to-do-menu list-unstyled" id="projectlist-data">
                            <li>
                                <Link to="#" className="nav-link fs-14" >Document Repository</Link>
                                <>
                                    <ul className="mb-0 sub-menu list-unstyled ps-3 vstack gap-2 mb-2">
                                        {
                                            folderlist.map((item , index) => {
                                                return(
                                                    <Fragment key={index}>
                                                        <li>
                                                        <Link to="#"><i className="ri-stop-mini-fill align-middle fs-15 text-"></i> {item.name}</Link>
                                                        </li>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </ul>
                                </>
                            </li>
                    </ul>
                </SimpleBar>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default MoveItem;
