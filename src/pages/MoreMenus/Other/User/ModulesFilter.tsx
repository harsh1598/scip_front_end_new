import { useEffect, useState } from "react";
import {
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Label,
    Row,
    Col,
} from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import CustomDropdown from "../../../../Components/Select/CustomDropdown";
import WebService from "../../../../utility/WebService";

interface propData {
    show: boolean;
    onCloseClick: any;
    setFilterData: any;
}

const ModulesFilter = (props: propData) => {
    const [moduleType, setModuleType] = useState<any>([]);
    const [typeList, setTypeList] = useState<any>([]);

    useEffect(() => {
        getTypeList();
    }, []);

    const {
        control,
        handleSubmit,
    } = useForm();

    const onSave = (data: any) => {
        if (data) {
            props.setFilterData(data);
            props.onCloseClick();
        }
    }

    const getTypeList = () => {
        var obj: any = {}
        obj.table = "tblmodulelistviewcolumnlist"
        obj.field = "module_type"
        WebService.postAPI({
            action: `/common/type-list`,
            body: obj,
        })
            .then((res: any) => {
                var array: any = [];
                for (var i in res.list) {
                    array.push({ id: res.list[i].id, value: res.list[i].value });
                }
                setTypeList(array);
            })
            .catch((e) => { });
    };

    const onClickBlade = () => {
        props.onCloseClick()
    }

    return (
        <Offcanvas
            direction="end"
            isOpen={props.show}
            id="offcanvasExample"
            toggle={props.onCloseClick}
            className="size-sm"
        >
            <OffcanvasHeader className="bg-light" toggle={props.onCloseClick}>
                Filters
            </OffcanvasHeader>
            <form onSubmit={handleSubmit(onSave)} className="d-flex flex-column justify-content-end h-100">
                <OffcanvasBody >
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-3">
                                    <Label htmlFor="name-field" className="form-label"> Module Page </Label>
                                    <Controller
                                        control={control}
                                        name="module_type"
                                        render={({ field }) => (
                                            <CustomDropdown
                                                options={typeList}
                                                selected={moduleType}
                                                isSearchable={true}
                                                placeholder="Select Module Page"
                                                onChange={(data: any) => {
                                                    field.onChange(data.id);
                                                    setModuleType(data);
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </OffcanvasBody>
                <div className="offcanvas-footer border-top p-3 text-center hstack gap-2 justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-brand-theme"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => {
                            onClickBlade()
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Offcanvas>
    );
};
export default ModulesFilter;
