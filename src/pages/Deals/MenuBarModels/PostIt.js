import React from "react";
import {
    Col,
    Label,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
} from "reactstrap";

const PostIt = ({ show, onCloseClick }) => {

    return (
        <Offcanvas direction="end" isOpen={show} id="offcanvasExample" toggle={onCloseClick}
            className="size-sm">
            <OffcanvasHeader className="bg-light" toggle={onCloseClick}>
                Post It
            </OffcanvasHeader>
            <OffcanvasBody >
            <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Label htmlFor="note"
                  className="form-label">Next Action</Label>
                    <textarea className="form-control"
                    id="note"
                    placeholder="Next Action"
                    rows="3" defaultValue=""></textarea>
              </div>
            </Col>
            <Col lg={12}>
              <div className="mb-3 ">
                <Label htmlFor="note"
                  className="form-label">Information Awaited</Label>
                    <textarea className="form-control"
                    id="note"
                    placeholder="Information Awaited"
                    rows="3" defaultValue=""></textarea>
              </div>
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
        </Offcanvas>
    );
};

export default PostIt;
