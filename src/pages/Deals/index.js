import React, { useState } from "react";
import ProfileBar from "./ProfileBar";
import DealsMenuBar from "./DealsMenuBar";
import { Outlet } from "react-router-dom";
import { ProjectName } from "../../Components/constants/layout";
import { Button, Collapse, Container } from "reactstrap";
import { useSelector } from "react-redux";

const Index = () => {

    document.title = `${ProjectName} | Index`;
    const [col3, setcol3] = useState(true);

    const t_col3 = () => {
      setcol3(!col3);
    };
    const { screenType } = useSelector(state => ({
        screenType: state.Layout.screenType
    }));

    return (

        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <ProfileBar />
                    <Button onClick={t_col3} color="light" className={screenType === "sm" ? "inner-humburger" : "inner-humburger_size"}>
                        <i className="ri-menu-2-line"></i>
                    </Button>
                    <div className="d-flex gap-2"> {/* d-flex  */}
                        <div className="inner-left-panel">
                            <Collapse isOpen={true} id="collapseWidthExample" horizontal
                                className={col3 ? "col-md-1" : "col-md-3"} >
                                <DealsMenuBar col3={col3} />
                            </Collapse>
                        </div>
                        <div className="w-100">
                            <Outlet />
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Index;
