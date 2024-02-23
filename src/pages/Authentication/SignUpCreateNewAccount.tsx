import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WebService from "../../utility/WebService";

interface propData {
    show: boolean;
    onCloseClick: any;
};

const SignUpCreateNewAccount = (props: propData) => {
    const [loading, setLoading] = useState<any>(false);

    let history = useNavigate();

    useEffect(() => {
        getbaseUrl();
    }, [])

    const onCloseBlade = () => {
        props.onCloseClick()
    }

    const getbaseUrl = () => {
        localStorage.removeItem("api_base_url");
        localStorage.removeItem("tenantId");
        localStorage.removeItem("token");
        localStorage.removeItem("UserData");
        localStorage.setItem("IsSuperAdmin", "N");
        var obj: any = {};
        obj.subdomain = window.location.hostname;
        WebService.postAPI({
            action: "/check-subdomain",
            body: obj,
        })
            .then((res: any) => {
                if (res && res.api_base_url && res.tenant_id) {
                    localStorage.setItem("api_base_url", res.api_base_url);
                    localStorage.setItem("tenantId", res.tenant_id);
                    localStorage.setItem("IsSuperAdmin", "N");
                    setLoading(false);
                } else {
                    localStorage.setItem("IsSuperAdmin", "Y");
                }
            })
            .catch((error: any) => {
                setLoading(false);
            });
    };


    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <form className="d-flex flex-column justify-content-end h-100">
                <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                    Create New Account
                </OffcanvasHeader>
                <OffcanvasBody >
                    <div>
                        <p className="text-center signUp">Please select the role that best describes you</p>
                    </div>
                    <div className="text-center mt-3">
                        <button type="button" className="signUpEntrepreneur" onClick={() => history(`/entrepreneur/signup/entrepreneur/MQ==`)}  >
                            I'M AN STARTUP ENTREPRENEUR
                        </button>
                        <button type="button" className="signUpInvestor" onClick={() => history(`/investor/signup/investor/Mg==`)} >
                            I'M AN INVESTOR
                        </button>
                        <button type="button" className="signUpSmeAdvisor" onClick={() => history(`/thirdparty/signup/thirdparty/Mw==`)} >
                            I'M SME ADVISOR
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="mb-0">Already have an account? <Link to="" className="fw-semibold text-brand text-decoration-underline" onClick={() => onCloseBlade()}> Log In!</Link> </p>
                    </div>
                </OffcanvasBody>
            </form>
        </Offcanvas>
    );
};

export default SignUpCreateNewAccount;
