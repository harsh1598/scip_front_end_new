import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  CardHeader,
} from "reactstrap";
import { useSelector } from "react-redux";
import UploadDocuments from "./Modals/UploadDocuments";
import TeaserModal from "./Modals/TeaserModal";
import TeaserTitle from "./Modals/TeaserTitle";

//Images
import profileBg from "../../../assets/images/profile-bg.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

const Teaser = () => {
  document.title = "SCIP | Teaser";

  // Default Accordion
  const [col1, setcol1] = useState(true);
  const [modelName, setModelName] = useState("");

  // Accordions with Icons
  const [iconCol1, seticonCol1] = useState(true);
  const [iconCol2, seticonCol2] = useState(false);
  const [iconCol3, seticonCol3] = useState(false);

  // Accordions with Plus Icon
  const [plusiconCol1, setplusiconCol1] = useState(true);
  const [plusiconCol2, setplusiconCol2] = useState(false);
  const [plusiconCol3, setplusiconCol3] = useState(false);

  const t_plusiconCol1 = () => {
    setplusiconCol1(!plusiconCol1);
    setplusiconCol2(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol2 = () => {
    setplusiconCol2(!plusiconCol2);
    setplusiconCol1(false);
    setplusiconCol3(false);
  };

  const t_plusiconCol3 = () => {
    setplusiconCol3(!plusiconCol3);
    setplusiconCol1(false);
    setplusiconCol2(false);
  };

  const toggleModel = (name) => {
    setModelName(name);
  };

  const [isTeamMember, setIsTeamMember] = useState(false);
  const toggleTeamMember = () => {
    setIsTeamMember(!isTeamMember);
  };

  const [activeTab, setActiveTab] = useState("1");
  const [activityTab, setActivityTab] = useState("1");

  const { screenType } = useSelector((state) => ({
    screenType: state.Layout.screenType,
  }));

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const toggleActivityTab = (tab) => {
    if (activityTab !== tab) {
      setActivityTab(tab);
    }
  };

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  const SingleOptions = [
    { value: "One", label: "One" },
    { value: "Two", label: "Two" },
    { value: "Three", label: "Three" },
    { value: "Four", label: "Four" },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  return (
    <React.Fragment>

      <Row>
        <Col xxl={12}>
          <Card className="mb-2">
           <CardHeader className="py-3">
           <h5 className="mb-0">Teaser</h5>
           </CardHeader>
           
            <div className="px-3">
            <div className="align-items-center d-flex pt-2 pb-3">
            <h6 class="card-title mb-0 flex-grow-1 fw-normal">
              Please fill the teaser only when advised
                </h6>
            <div class="flex-shrink-0">
              <div class="form-check form-switch form-switch-right form-switch-md">
                <Link to="#" className="text-dark fs-18" id="TeaserTitle"
                  onClick={(e) => toggleModel("TeaserTitle")}><i className="ri-download-2-line aling-bottom"></i></Link>
              </div>
            </div>
          </div>
              <div
              className="align-items-center d-flex"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 fs-15">
                  Your company’s customer pitch
                    </h4>
                <div className="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i
                    className="ri-pencil-line align-bottom ms-2 fs-16 pointer"
                    id="TeaserModal"
                    onClick={(e) => toggleModel("TeaserModal")}
                  ></i>
                </div>
              </div>
              <ul className="UI-list">
                <li>
                  Health Sutra products are positioned as “Desi way to stay
                      fit”.
                    </li>
              </ul>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Traction and other performance metrics
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Health Sutra currently has - 2 SKUs in Ready to Eat (RTE), 4
                    SKUs in the Ready to Cook (RTC), and 10 SKUs in staples
                    category. Types of products include flakes, rawa (Semolina),
                    porridge and pops (equivalent of popcorn with millets). The
                    staples category currently contributes to about 85% of the
                    revenues (with a margin of 40% on revenues) of the company
                    and is projected to remain as the major revenue driver for
                    the company. Currently, the company has production lines set
                    up for flaking, semolina making and popping. The products
                    are manufactured in batches, for eg: the raw material batch
                    size for production of ragi flakes is 150 kgs. Although the
                    total processing capacity is 700 Kg/day, the company
                    currently operates at a capacity utilization of 45% given
                    the limited space for storing finished inventory
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Business Overview
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Founded in 2013 and based out of Hyderabad, Fountainhead
                    Foods Pvt Ltd manufactures and markets healthy food products
                    under the brand Health Sutra. The company currently has a
                    product portfolio of 16 SKUs across Jowar, Bajra, Ragi (made
                    from indigenous grain: millets) and Barley. The Company
                    currently works with 2 super stockists catering to more than
                    500 stores (Spencer’s, Organic and Ayurveda product stores
                    etc.) across A.P & Telangana.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Elevator pitch
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                The company offers naturally healthy food products that are
                    tasty, affordable and help fight lifestyle diseases.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Industry Overview
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                As per Euromonitor International report on “Health and
                    Wellness in India”, health and wellness is one of the
                    fastest growing sectors in India and was estimated at INR
                    72,000 Cr. in 2015. Naturally Healthy Packaged Goods (NHPG)
                    sector is growing at 26% CAGR and is estimated at INR 25000
                    Crores in 2015. This sector is dominated by few regional
                    players and other big FMCG companies, but limited to only a
                    few categories
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Business Model
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Company works closely with premier research institutes such
                    as IIMR, ANGRAU and CFTRI and has access to the technologies
                    currently being developed at these institutes. Health Sutra
                    products are packaged and distributed to the end consumer
                    through a conventional supply chain (Super Stockists,
                    Wholesalers & Retailers) and online super markets (Big
                    Basket). The Company currently works with 2 super stockists
                    catering to more than 500 stores (Spencer’s, Organic and
                    Ayurveda product stores etc.) across A.P & Telangana.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Impact of COVID on demand, near-term & long-term
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">coming soon</p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Services / Products/ Technology
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                The company currently has three product categories and
                    product portfolio of 16 SKUs across Jowar, Bajra, Ragi (made
                    from indigenous grain: millets) and Barley. Health Sutra
                    products are positioned as “Desi way to stay fit”. They are
                    healthier alternatives to mainstream products by virtue of
                    being manufactured from healthier ingredients and are
                    offered at similar or slightly lower price points. Health
                    Sutra products will be targeted category wise. Staples will
                    be targeted to middle income households where brand loyalty
                    is high. RTC products will be targeted to health conscious
                    working class in the age group of 25-35.
                  </p>
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  cellspacing="1"
                  cellpadding="1"
                  border="1"
                >
                  <Col style={{ width: "50%" }} />
                  <Col style={{ width: "50%" }} />
                  <tbody>
                    <tr>
                      <td>Particular</td>
                      <td>X</td>
                    </tr>
                    <tr>
                      <td>No of Products Sold (in Lakhs)</td>
                      <td>7</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Customer pain point
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Lack of naturally healthy food products that are tasty,
                    affordable and help fight lifestyle diseases.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Revenue Model/ Go-to-market strategy
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                The staples category currently contributes to about 85% of
                    the revenues (with a margin of 40% on revenues) of the
                    company and is projected to remain as the major revenue
                    driver for the company.
                  </p>
              <hr />

              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Customer existing in the pipeline
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                The company has established backward linkages with dryland
                    farmers and farmer cooperatives in Ananthapur District,
                    Andhra Pradesh (A.P). Company works closely with premier
                    research institutes such as IIMR, ANGRAU and CFTRI and has
                    access to the technologies currently being developed at
                    these institutes.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Competition/ USP
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Key competitors: Regional Brands, ITC, Britannia & MTR
                    Differentiators: ? Products, Price, Package Size, Options -
                    The Company manufactures innovative products that are
                    similar to mainstream products but made with indigenous
                    grains. - Health Sutra products are affordable when compared
                    to a similar product from a company like Kellogg’s or MTR. -
                    Health Sutra offers multiple options to the consumers within
                    the same category (eg: Flakes: Ragi flakes, Jowar flakes ,
                    Bajra flakes etc.) and across categories (RTC: Jowar
                    porridge, Jowar rawa/idly etc) ? Technology and Category
                    Focus: - The technology used by the company is at par with
                    the technology currently being developed in the large
                    research institutions; Company is an early adopter and has a
                    3-4 year head start before these technologies are picked by
                    larger FMCG players. - FMCG majors in NHPG segment are
                    limited to only a few categories. Eg: Britannia sells only
                    high fiber biscuits (Bakery product). No presence in RTC
                    category.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Team
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Key competitors: Regional Brands, ITC, Britannia & MTR
                    Differentiators: ? Products, Price, Package Size, Options -
                    The Company manufactures innovative products that are
                    similar to mainstream products but made with indigenous
                    grains. - Health Sutra products are affordable when compared
                    to a similar product from a company like Kellogg’s or MTR. -
                    Health Sutra offers multiple options to the consumers within
                    the same category (eg: Flakes: Ragi flakes, Jowar flakes ,
                    Bajra flakes etc.) and across categories (RTC: Jowar
                    porridge, Jowar rawa/idly etc) ? Technology and Category
                    Focus: - The technology used by the company is at par with
                    the technology currently being developed in the large
                    research institutions; Company is an early adopter and has a
                    3-4 year head start before these technologies are picked by
                    larger FMCG players. - FMCG majors in NHPG segment are
                    limited to only a few categories. Eg: Britannia sells only
                    high fiber biscuits (Bakery product). No presence in RTC
                    category.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Team
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Key competitors: Regional Brands, ITC, Britannia & MTR
                    Differentiators: ? Products, Price, Package Size, Options -
                    The Company manufactures innovative products that are
                    similar to mainstream products but made with indigenous
                    grains. - Health Sutra products are affordable when compared
                    to a similar product from a company like Kellogg’s or MTR. -
                    Health Sutra offers multiple options to the consumers within
                    the same category (eg: Flakes: Ragi flakes, Jowar flakes ,
                    Bajra flakes etc.) and across categories (RTC: Jowar
                    porridge, Jowar rawa/idly etc) ? Technology and Category
                    Focus: - The technology used by the company is at par with
                    the technology currently being developed in the large
                    research institutions; Company is an early adopter and has a
                    3-4 year head start before these technologies are picked by
                    larger FMCG players. - FMCG majors in NHPG segment are
                    limited to only a few categories. Eg: Britannia sells only
                    high fiber biscuits (Bakery product). No presence in RTC
                    category.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Advisors
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Maheedhar N V – B.Tech (Civil), IIT Delhi, 2009 - Senior BD
                    & Budgeting engineer at Keller Ground Engineering India Pvt.
                    Ltd. Sravanthi B– Manager – B.Tech (Food Sci & Tech), M.Sc.
                    (Food Tech), ANGRAU, Hyderabad - BD at Millet Processing and
                    Incubation Center, ANGRAU, Hyderabad.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Financials
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <div className="table-responsive mt-2">
                <table
                  className="table table-bordered"
                  cellspacing="1"
                  cellpadding="1"
                  border="1"
                >
                  <Col style={{ width: "50%" }} />
                  <Col style={{ width: "50%" }} />
                  <tbody>
                    <tr>
                      <th>Particular</th>
                      <th>FY19</th>
                      <th>FY 20 (P)</th>
                      <th>FY 21 (P)</th>
                    </tr>
                    <tr>
                      <td>No of Products Sold (in Lakhs)</td>
                      <td>7</td>
                      <td>15</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>No of Stores Placed</td>
                      <td>20</td>
                      <td>40</td>
                      <td>60</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Key Assumptions
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                *The Current (May ’16) gross burn is ~INR 4.3 lakhs and net
                    burn is ~INR 60,000
                    <br />
                ** The projected average gross burn is ~INR 17 lakhs
                    (monthly)
                  </p>
              <hr />

              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Roadmap
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Increase plant capacity form 3,500 to 5,500 sft. Increase
                    Ready to Eat (RTE) SKUs to 10 and Ready to Cook (RTC) SKUs
                    to 15 in staples category.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Shareholding pattern
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  className="table table-bordered mb-0"
                  cellspacing="1"
                  cellpadding="1"
                  border="1"
                >
                  <Col style={{ width: "50%" }} />
                  <Col style={{ width: "50%" }} />
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>% shareholding</th>
                    </tr>
                    <tr>
                      <td>Anand Kumar</td>
                      <td>60</td>
                    </tr>
                    <tr>
                      <td>Sushil</td>
                      <td>31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Funding history
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Bootstraped - Rs 89 Lakhs
                    <br />
                Entrepreneurs have not taken any salary. Investment has been
                    in developing product and taking to market.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Ask & Fund Utilization
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Ask - INR 3 crores. Of the INR 3 crores, Company is looking
                    to raise INR 1 crore through grants. Accordingly, HA has an
                    opportunity to invest INR 2 crores. Company is looking to
                    dilute 10 to 15% for the INR 2 crore fundraise and is open
                    to discussions. Utilization: To be utilized over the next 18
                    months across Manufacturing, Market Development and sales,
                    Cap-Ex, Clinical Studies, Regulatory and registration costs,
                    Human Resources.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Ask & Fund Utilization
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                Ask - INR 3 crores. Of the INR 3 crores, Company is looking
                    to raise INR 1 crore through grants. Accordingly, HA has an
                    opportunity to invest INR 2 crores. Company is looking to
                    dilute 10 to 15% for the INR 2 crore fundraise and is open
                    to discussions. Utilization: To be utilized over the next 18
                    months across Manufacturing, Market Development and sales,
                    Cap-Ex, Clinical Studies, Regulatory and registration costs,
                    Human Resources.
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Exit Strategy
                    </h4>
                <div class="flex-shrink-0" style={{ opacity: "0.5" }}>
                  <i className="ri-information-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-link align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-history-line align-bottom ms-2 fs-16 pointer"></i>
                  <i className="ri-pencil-line align-bottom ms-2 fs-16 pointer"></i>
                </div>
              </div>
              <p className="text-muted">
                The market opportunity is niche. However, within three years
                    the company can be an acquisition opportunity for
                    ...........
                  </p>
              <hr />
              <div
                class="card-header align-items-center d-flex px-0 py-0"
                style={{ borderBottom: "0" }}
              >
                <h4 class="card-title mb-2 flex-grow-1 px-0 py-0 fs-15">
                  Teaser Documents
                    </h4>
              </div>
              <p className="text-muted">
                <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                  <Link to="#" className="me-2">
                    Presentation_template{" "}
                    <i className=" ri-download-2-line align-bottom"></i>
                  </Link>
                  <Link to="#">
                    <i className="ri-link border-left"></i>
                  </Link>
                </span>

                <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                  <Link to="#" className="me-2">
                    Homversity_Pitch_deck{" "}
                    <i className=" ri-download-2-line align-bottom"></i>
                  </Link>
                  <Link to="#">
                    <i className="ri-link border-left"></i>
                  </Link>
                </span>

                <span class="badge rounded-pill border border-info text-info fs-12 fw-normal me-3">
                  <Link to="#" className="me-2">
                    Report from API{" "}
                    <i className=" ri-download-2-line align-bottom"></i>
                  </Link>
                  <Link to="#">
                    <i className="ri-link border-left"></i>
                  </Link>
                </span>
              </p>

              <div
                id="UploadDocuments"
                onClick={(e) => toggleModel("UploadDocuments")}
                class="btn uploadBtn btn-warning waves-effect waves-light mt-2"
                align="center"
              >
                Upload Document
                  </div>
            </div>
            <p></p>
          </Card>
        </Col>
      </Row>


      <UploadDocuments
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "UploadDocuments" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TeaserModal
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserModal" ? true : false}
        onCloseClick={() => setModelName("")}
      />

      <TeaserTitle
        modelName={modelName}
        toggleModel={toggleModel}
        show={modelName === "TeaserTitle" ? true : false}
        onCloseClick={() => setModelName("")}
      />

    </React.Fragment>
  );
};

export default Teaser;
