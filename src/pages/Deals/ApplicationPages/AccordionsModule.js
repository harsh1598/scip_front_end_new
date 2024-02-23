import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import { Card, CardBody, Accordion, AccordionItem, Collapse } from "reactstrap";

const AccordionsModule = ({ }) => {

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

    return (
        <>
        <Accordion className="custom-accordionwithicon-plus" id="accordionWithplusicon">
        <AccordionItem>
            <h2 className="accordion-header" id="accordionwithouticonExample1">
                <button
                    className={classnames("accordion-button", { collapsed: !plusiconCol1 })} type="button" onClick={t_plusiconCol1} style={{ cursor: "pointer" }} >
                    What is User Interface Design?
                </button>
            </h2>

            <Collapse isOpen={plusiconCol1} className="accordion-collapse" id="accor_plusExamplecollapse1" >
                <div className="accordion-body">
                    Big July earthquakes confound zany experimental vow. My girl wove six dozen plaid jackets before she quit. Six big devils from Japan quickly forgot how to waltz. try again until it looks right, and each assumenda labore aes Homo nostrud organic, assumenda labore aesthetic magna elements, buttons, everything.
                </div>
            </Collapse>
        </AccordionItem>
        <AccordionItem>
            <h2 className="accordion-header" id="accordionwithplusExample2">
                <button
                    className={classnames("accordion-button", { collapsed: !plusiconCol2 })} type="button" onClick={t_plusiconCol2} style={{ cursor: "pointer" }} >
                    What is Digital Marketing?
                </button>
            </h2>

            <Collapse isOpen={plusiconCol2} className="accordion-collapse" id="accor_plusExamplecollapse2" >
                <div className="accordion-body">
                    It makes a statement, it’s impressive graphic design. Increase or decrease the letter spacing depending on the situation and try, try again until it looks right, and each letter has the perfect spot of its own. commodo enim craft beer mlkshk aliquip jean shorts ullamco.
                </div>
            </Collapse>
        </AccordionItem>
        <AccordionItem>
            <h2 className="accordion-header" id="accordionwithplusExample3">
                <button
                    className={classnames("accordion-button", { collapsed: !plusiconCol3 })} type="button" onClick={t_plusiconCol3} style={{ cursor: "pointer" }} >
                    Where does it come from ?
                </button>
            </h2>
            <Collapse isOpen={plusiconCol3} className="accordion-collapse" id="accor_plusExamplecollapse3" >
                <div className="accordion-body">
                    Spacing depending on the situation and try, try again until it looks right, and each. next level wes anderson artisan four loko farm-to-table craft beer twee. commodo enim craft beer mlkshk aliquip jean shorts ullamco. omo nostrud organic, assumenda labore aesthetic magna delectus. pposites attract, and that’s a fact.
                </div>
            </Collapse>
        </AccordionItem>
    </Accordion>
        </>
    );
};

export default memo(AccordionsModule);
