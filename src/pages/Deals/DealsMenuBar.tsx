import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectName } from "../../Components/constants/layout";
import {
    Card,
    CardBody,
    Accordion,
    AccordionItem,
    Collapse,
} from "reactstrap";
import classnames from "classnames";
import WebService from "../../utility/WebService";
import HelperService from "../../utility/HelperService";
import Loader from "../../Components/Loader/Loader";

interface propdata {
    col3: any;
}

//import Components

const DealsMenuBar = (props: propdata) => {
    document.title = `${ProjectName} | Deals`;
    const [fillCol4, setfillCol4] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [applicationData, setApplicationData] = useState([])
    useEffect(() => {
        getDealPageLayout();
    }, [])
    const t_fillCol4 = () => {
        setfillCol4(!fillCol4);
    };
    const getDealPageLayout = () => {
        var obj: any = {}
        obj.page = 'DEAL'
        WebService.getAPI({
            action: `/deal-page-layout`,
            body: obj,
        })
            .then((res: any) => {
                setApplicationData(res.result)
            })
            .catch((e) => {
            });
    }
    const toggleClick = () => {

    };
    return (
        <>
            <Loader show={showLoader} />
            <React.Fragment>
                <CardBody className="d-none d-sm-block" >
                    <div className="live-preview" >
                        <div>
                            <Card className="deal-left-bar" style={{overflow: "auto"}}>
                                <CardBody className="px-2">
                                    {applicationData &&
                                        applicationData.length > 0 &&
                                        applicationData.map(
                                            (res: any, i: any) => {
                                                return (
                                                    <>
                                                        {/* {res.is_show == 1 && */}
                                                        <ul className="deals-left-menu nav nav-sm flex-column">
                                                            {res && res.sub_section &&
                                                                // 
                                                                // "" 
                                                                res.sub_section.length == 0 && <li className="nav-item">
                                                                    <Link to={res.url} className="nav-link" data-key="t-analytics">
                                                                        <i className={props.col3 ? res.icon : res.icon + '  col-lg-12'}></i>
                                                                        {props.col3 ? "" : HelperService.getTitleCase(res.section.replaceAll('_', ' '))}&nbsp;
                                                                        {!props.col3 && <><i className={res.icon2}></i></>}
                                                                    </Link>
                                                                </li>}

                                                            {res && res.sub_section &&
                                                                res.sub_section.length > 0 && <li className="nav-item">
                                                                    <Accordion className="custom-accordionwithicon accordion-flush accordion-fill-secondary" id="accordionFill2" toggle={toggleClick} open={""}>
                                                                        <AccordionItem>
                                                                            <h2 className="accordion-header" id="accordionFill2Example1" >
                                                                                <button style={{ color: "#6d7080", cursor: "pointer" }} className={classnames("accordion-button", { collapsed: !fillCol4, })} type="button" onClick={t_fillCol4} >
                                                                                    {/* ri-file-edit-line sub-icons */}
                                                                                    <i className={res.icon} ></i>
                                                                                    {props.col3 ? "" : HelperService.getTitleCase(res.section.replaceAll('_', ' '))}
                                                                                </button>
                                                                            </h2>

                                                                            <Collapse
                                                                                isOpen={fillCol4}
                                                                                className="accordion-collapse"
                                                                                id="accor_fill21"
                                                                            >
                                                                                {res && res.sub_section &&
                                                                                    res.sub_section.length > 0 &&
                                                                                    res.sub_section.map(
                                                                                        (item: any, i: any) => {
                                                                                            return (
                                                                                                <>
                                                                                                    {item.is_show == 1 && <div className="accordion-body p-0 pb-3">

                                                                                                        <Link to={item.url}>
                                                                                                            <i className={item.icon}></i>
                                                                                                            {props.col3 ? "" : HelperService.getTitleCase(item.section.replaceAll('_', ' '))}
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                    }
                                                                                                </>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                            </Collapse>
                                                                        </AccordionItem>
                                                                    </Accordion>
                                                                </li>
                                                            }
                                                        </ul>
                                                        {/* } */}
                                                    </>
                                                );
                                            }
                                        )}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </CardBody>
            </React.Fragment>
        </>
    );
};
export default DealsMenuBar;
