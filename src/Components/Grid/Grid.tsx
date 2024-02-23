import "./Grid.scss";
import React, { useState, useEffect, useImperativeHandle } from "react";
import { ArrowUp, ArrowDown, BorderBottom } from "react-bootstrap-icons";
import Pagination from "../pagination/Pagination";
// import { PAGINATION, setDataInRedux } from "../../actions/CommonAction";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import Lottie from "react-lottie";
import * as animatedData from "../../assets/test.json";
// import { RootState } from "../../config/Store";
// import { setPagination } from "../../reducers/AuthReducer";
export interface GridColumn {
  value: any;
  type?: string;
  classname?: string;
  originalValue?: any;
}

export interface GridData {
  headers: GridHeader[];
  rows: GridRow[];
  filters?: Filter[];
  ShowLoader?: boolean;
  class2?: boolean;
  errorMessage?: string;
  isColumn?: boolean;
  dateFilter?: FilterOption[];
  onClickRow?: boolean;
  isSelectedRow?: any;
  hoverRow?: any;
  storeKey?: string;
  gridId?: string;
  count?: any;
  onPageChange?: any;
  onSort?: any;
  doubleClick?: any;
  onClickCheckBox?: any;
  checkBoxStauts?: boolean;
  perPageItem?: number;
  unselectRow?: any;
  isShowSearch?: boolean;
  pageName?: string;
}

export interface Filter {
  title: string;
  key: string;
  isShow?: boolean;
  child: FilterOption[];
}

export interface FilterOption {
  title: string;
  value: string;
  isChecked?: boolean;
  key?: string;
}

export interface GridHeader {
  title: string;
  isSorting?: boolean;
  class?: string;
  classTitle?: string;
  isAsc?: boolean;
  isDesc?: boolean;
  style?: string;
  isFilter?: boolean;
  isShow?: boolean;
  isFreeze?: boolean;
  width?: number;
  sortingKey?: string;
  isShowCheckBox?: any;
  isNotAllowClick?: any;
}

export interface GridRow {
  data: GridColumn[];
  isChecked?: boolean;
  style?: string;
  isRed?: boolean;
}

export interface ExpandableData {
  header: string;
  data: GridRow[];
}
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animatedData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Grid = React.forwardRef((props: GridData, ref) => {
  const [headers, setHeaders] = useState(
    props.headers.map((option: GridHeader) => {
      if (option.isShow === undefined) {
        option.isShow = true;
      }
      if (option.isShowCheckBox === undefined) {
        option.isShowCheckBox = false;
      }
      if (option.sortingKey) {
        option.isSorting = true;
      } else {
        option.isSorting = false;
      }

      return { ...option };
    })
  );

  const [checkBoxStauts, setCheckBoxStauts] = useState(props.checkBoxStauts);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    setCheckBoxStauts(props.checkBoxStauts);
  }, [props.checkBoxStauts]);

  const [filters, setFilters] = useState(
    props.filters
      ? props.filters.map((option: Filter) => {
        if (option.isShow === undefined) {
          option.isShow = false;
        }

        option.child.map((child: FilterOption) => {
          if (child.isChecked === undefined) {
            child.isChecked = false;
          }
        });

        return { ...option };
      })
      : []
  );

  useEffect(() => {
    setFilters(
      props.filters
        ? props.filters.map((option: Filter) => {
          if (option.isShow === undefined) {
            option.isShow = false;
          }

          option.child.map((child: FilterOption) => {
            if (child.isChecked === undefined) {
              child.isChecked = false;
            }
          });

          return { ...option };
        })
        : []
    );
  }, [props.filters]);

  const [dateFilter, setDateFilters] = useState(
    props.dateFilter
      ? props.dateFilter.map((child: FilterOption) => {
        if (child.isChecked === undefined) {
          child.isChecked = false;
        }
        return { ...child };
      })
      : []
  );

  const [isFilter, setIsFilter] = useState(false);
  const [isShowColumns, setIsShowColumns] = useState(false);

  const [isShowDateRange, setIsShowDateRange] = useState(false);
  const [rows, setRows] = useState([...props.rows]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageItem, setPerPageItem] = useState(
    props.perPageItem ? props.perPageItem : 10
  );
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [data, setData] = useState<GridRow[]>([]);
  const [isAscending, setIsAscending] = useState(false);
  const [key, setKey] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      getValues: () => {
        return {
          filters: filters,
          dateFilter: dateFilter,
          key: key,
          isAscending: isAscending,
          currentPage: currentPage,
        };
      },
    }),
    [filters, dateFilter, key, isAscending, currentPage]
  );

  useEffect(() => {
    setHeaders(
      props.headers.map((option: GridHeader) => {
        if (option.isShow === undefined) {
          option.isShow = true;
        }

        return { ...option };
      })
    );
  }, [props.headers]);

  // useEffect(() => {
  //   if (props.onPageChange && currentPage > 1) {
  //     props.onPageChange(currentPage, keyword);
  //   }
  // }, [currentPage]);

  useEffect(() => {
    setRows(props.rows);
    setData(props.rows);
  }, [props.rows]);

  useEffect(() => {
    setStyledRow(-1);
  }, [props.unselectRow]);

  const sorting = (index: number, asc: boolean, key: any) => {
    setIsFilter(false);
    setIsShowColumns(false);
    setIsShowDateRange(false);
    setHeaders(
      headers.map((option: GridHeader, i: number) =>
        i === index
          ? {
            ...option,
            isAsc: !option.isAsc,
            isDesc: option.isAsc,
          }
          : {
            ...option,
            isAsc: false,
            isDesc: false,
          }
      )
    );
    setIsAscending(!asc);
    setKey(key);
    props.onSort(
      currentPage,
      !asc,
      key,
      startDate,
      endDate,
      filters,
      dateFilter
    );
  };

  const [styledRow, setStyledRow] = useState<Number>();

  const onSelectRow = (e: any, data: any) => {
    if (props.onClickRow) {
      setStyledRow(e);
      props.isSelectedRow(e, data);
    }
  };

  const onSelectAllRow = () => {
    setCheckBoxStauts(!checkBoxStauts);
    props.onClickCheckBox(!checkBoxStauts);
  };

  return (
    <div className="grid-div" data-testid="comp-sawin-table">
      <div className="w-full max-w-lg lg:max-w-xs mr-3 mb-3 ">
        {props.isShowSearch == true && (
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <input
              id="search"
              name="search"
              className="block w-full table-search-filter"
              placeholder="Search"
              value={keyword}
              type="search"
              onBlur={(e: any) => props.onPageChange(currentPage, e.target.value)}
              onChange={(e: any) => { setKeyword(e.target.value); }}
              onKeyUp={(e: any) => { e.which == 13 && e.target.blur(); }}
            />
          </div>
        )}
      </div>
      <div className={
        props.class2 ? "table-scroll2" : "table-scroll"
      }>
        <div
          className={
            props.ShowLoader === false ? "" : "px-0"
          }
        >
          <table
            className="grid-table table-style-list"
          // id={props.gridId ? props.gridId : "resizable"}
          >
            <thead>
              <tr>
                {headers.map((header: GridHeader, i) =>
                  header.isShow === false ? (
                    ""
                  ) : header.isSorting === false ? (
                    <th
                      className={
                        header.classTitle?.toString() ||
                        "cursor-pointer text-center " +
                        (header.isFreeze == true ? "freeze-column" : "")
                      }
                      style={{ width: header.width ? header.width : "" }}
                      key={i.toString()}
                    >
                      {!header.isShowCheckBox && header.title}
                      {header.isShowCheckBox && (
                        // <Form.Group className="mb-1">
                        //   <Form.Check
                        //     type="checkbox"
                        //     checked={checkBoxStauts}
                        //     onClick={() => onSelectAllRow()}
                        //   />
                        // </Form.Group>
                        <>
                          <div className="form-check"><input type="checkbox" id="checkBoxAll" className="form-check-input" checked={checkBoxStauts}
                            onClick={() => onSelectAllRow()} /></div>
                        </>
                      )}{" "}
                    </th>
                  ) : (
                    <th
                      key={i.toString()}
                      className={
                        header.classTitle?.toString() ||
                        "cursor-pointer text-center " +
                        (header.isFreeze == true ? "freeze-column" : "")
                      }
                      style={{ width: header.width ? header.width : "" }}
                    // onClick={() =>
                    //   sorting(
                    //     i,
                    //     header.isAsc ? header.isAsc : false,
                    //     header.sortingKey
                    //   )
                    // }
                    >
                      {header.title}
                      <span className="sorting">
                        {header.isDesc ? <ArrowUp /> : null}
                        {header.isAsc ? <ArrowDown /> : null}
                      </span>
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {props.ShowLoader === true || data.length == 0 ? (
                <></>
              ) : (
                data.map((row: GridRow, i) => (
                  <tr
                    onDoubleClick={() =>
                      props.doubleClick && props.doubleClick(i, row)
                    }
                    key={"body_data_" + i.toString()}
                    className={
                      (styledRow == i ? "selected-row" : "") ||
                      (row.isRed ? "red-styled-row" : "") ||
                      (props.hoverRow ? "hover-styled-row" : "")
                    }
                  >
                    {headers.map((header: GridHeader, j) =>
                      header.isShow === false ? (
                        ""
                      ) : (
                        <td
                          onClick={() =>
                            header.isNotAllowClick ? "" : onSelectRow(i, row)
                          }
                          key={"row_" + i + "_" + j}
                          className={
                            (header.class?.toString() ||
                              (row.data[j].value == "Active"
                                ? "selected-row-text"
                                : row.data[j].value == "In Active"
                                  ? "selected-row-text-inactve"
                                  : "")) +
                            (header.isFreeze == true ? " freeze-column" : "")
                          }
                        >
                          {row.data[j] ? (
                            row.data[j].type === "HTML" ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: row.data[j].value,
                                }}
                              />
                            ) : (
                              row.data[j].value
                            )
                          ) : (
                            "-"
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
          {rows.length == 0 && props.ShowLoader === false ? (
            <div>
              <div className="error-message">{props.errorMessage}</div>
            </div>
          ) : null}

          {props.ShowLoader === true ? (
            <div className="">
              <div></div>
              <div style={{ textAlign: "center", marginTop: "10%" }}>
                <Lottie options={defaultOptions} height={50} width={50} />
                {/* <img
                style={{ position: "relative", height: 150, width: 150 }}
                src={loader}
                alt="No loader found"
              /> */}
                {/* <div style={{ position: "relative", color: "white" }}>
                Loading...
              </div> */}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {props.count > 0 ? (
        <div className=" pb-3 pagination-row">
          <Pagination
            className=" "
            changePage={(page: number) => {
              setCurrentPage(page);
              setStyledRow(-1);
              props.onPageChange(page, keyword);
            }}
            totalItems={props.count}
            itemsCountPerPage={perPageItem}
            changeCurrentPage={currentPage}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
});

export default Grid;
