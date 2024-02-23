
import { Offcanvas, OffcanvasHeader, OffcanvasBody, Label, Col} from "reactstrap";

interface propData {
    show: boolean;
    onCloseClick: any;
};

const Approve = (props: propData) => {

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Approve Users
            </OffcanvasHeader>
            <form action="" className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody>
                    <div>
                    <Col lg={12}>
                        <div className="mb-3 pb-2">
                            <Label htmlFor="note"
                            className="form-label">Comment</Label>
                            <textarea className="form-control"
                            id="note"
                            defaultValue=""></textarea>
                            {/*  rows="3" */}
                        </div>
                    </Col>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button type="submit" className="btn btn-brand-theme"onClick={props.onCloseClick}>
                        Apply
                    </button>
                    <button className="btn btn-light" onClick={props.onCloseClick} >
                        Clear Filter
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};

export default Approve;
