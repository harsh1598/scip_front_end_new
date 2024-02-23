import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ProjectName } from "../../Components/constants/layout";
import Message from "../Message/index";


const MessagePage = () => {

  document.title = `${ProjectName} | Message`;
  // <BreadCrumb title="Message" pageTitle="Message" location={"location"} />
  return (
    <React.Fragment>
        <Message page={"deal"} />
    </React.Fragment>
  );
};

export default MessagePage;
