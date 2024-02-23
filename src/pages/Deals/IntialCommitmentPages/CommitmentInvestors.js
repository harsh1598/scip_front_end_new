import React from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Button,
} from "reactstrap";
import SimpleBar from "simplebar-react";

const CommitmentInvestors = ({ show, onCloseClick }) => {

    return (
        <Offcanvas
            isOpen={show}
            direction="end"
            toggle={onCloseClick}
            id="offcanvasAllRubric"
            className="border-bottom"
        >
            <OffcanvasHeader
                className="bg-light"
                toggle={onCloseClick}
                id="offcanvasRightLabel"
            >
                Commitment by Other Investors/Angel Networks Note
            </OffcanvasHeader>
            <OffcanvasBody className="px-0 overflow-hidden">
                <SimpleBar style={{ height: "100vh" }}>
                    <p className="px-3 text-muted">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </SimpleBar>
            </OffcanvasBody>
            <div className="offcanvas-foorter border p-3 text-center">
                <div className="hstack gap-2 justify-content-end">
                    {/* <button type="button" className="btn btn-brand-theme">
                        Submit
                    </button> */}
                    <Button
                        onClick={onCloseClick}
                        className="btn btn-light"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Offcanvas>
    );

};

export default CommitmentInvestors;
