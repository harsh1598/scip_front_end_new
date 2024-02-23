import React, {useState } from "react";
import { useParams } from "react-router-dom";
//Import Breadcrumb
import ParticlesAuth from "../../AuthenticationInner/ParticlesAuth";
import "react-circular-progressbar/dist/styles.css";
import Logo from "../../../assets/images/scip-logo.svg";
import {
  Container,
  Row,
} from "reactstrap";
import PreviewModal from "./Modals/PreviewModal";
import SignupFormLayout from "../../../Components/SignupFormLayout/SignupFormLayout";

const ProfileInfo = () => {
  const [modelName, setModelName] = useState("");
  let { type, encodedId } = useParams();

  const toggleModel = (name: any) => {
    setModelName(name);
  };

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <div className="text-center  mb-4 text-white-50 heading">
            <div className="heading2">
              <img src={Logo} alt="" height="40" className="mt-3" />
            </div>
          </div>
          <div className="page-content p-0">
            <Container fluid>
              <Row style={{ marginTop: "80px" }}>
                <SignupFormLayout
                  type={type}
                  encodedId={encodedId}
                />
              </Row>
            </Container>
          </div>
        </div>

      </ParticlesAuth>

      <PreviewModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "PreviewModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />
    </React.Fragment>
  );
};

export default ProfileInfo;
