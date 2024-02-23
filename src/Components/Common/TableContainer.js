import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
  useRowSelect
} from "react-table";
import { Table, Row, Col, Button, Input, CardBody, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Filter, DefaultColumnFilter } from "./filters";
import {
  ProductsGlobalFilter,
  CustomersGlobalFilter,
  OrderGlobalFilter,
  ContactsGlobalFilter,
  ContactsGlobalFilterButton,
  CompaniesGlobalFilter,
  LeadsGlobalFilter,
  CryptoOrdersGlobalFilter,
  InvoiceListGlobalSearch,
  TicketsListGlobalFilter,
  NFTRankingGlobalFilter,
  TaskListGlobalFilter,
} from "./GlobalSearchFilter";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isContactsFilterButton,
  isCompaniesFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isProductsFilter,
  isLeadsFilter,
  SearchPlaceholder
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <React.Fragment>
      <CardBody className="border border-dashed border-end-0 border-start-0">
        <form>
          <Row className="g-3">
            <Col sm={5}>
              <div className={(isProductsFilter || isContactsFilter || isContactsFilterButton || isCompaniesFilter || isNFTRankingFilter) ? "search-box me-2 mb-2 d-inline-block" : "search-box me-2 mb-2 d-inline-block col-12"}>
                <input
                  onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  id="search-bar-0"
                  type="text"
                  className="form-control search /"
                  placeholder={SearchPlaceholder}
                  value={value || ""}
                />
                <i className="bx bx-search-alt search-icon"></i>
              </div>
            </Col>
            {isProductsFilter && (
              <ProductsGlobalFilter />
            )}
            {isCustomerFilter && (
              <CustomersGlobalFilter />
            )}
            {isOrderFilter && (
              <OrderGlobalFilter />
            )}
            {isContactsFilter && (
              <ContactsGlobalFilter />
            )}
            {isContactsFilterButton && (
              <ContactsGlobalFilterButton />
            )}
            {isCompaniesFilter && (
              <CompaniesGlobalFilter />
            )}
            {isLeadsFilter && (
              <LeadsGlobalFilter />
            )}
            {isCryptoOrdersFilter && (
              <CryptoOrdersGlobalFilter />
            )}
            {isInvoiceListFilter && (
              <InvoiceListGlobalSearch />
            )}
            {isTicketsListFilter && (
              <TicketsListGlobalFilter />
            )}
            {isNFTRankingFilter && (
              <NFTRankingGlobalFilter />
            )}
            {isTaskListFilter && (
              <TaskListGlobalFilter />
            )}
          </Row>
        </form>
      </CardBody>

    </React.Fragment>
  );
}


const TableContainer = ({
  columns,
  data,
  dataCount,
  isGlobalSearch,
  isGlobalFilter,
  isProductsFilter,
  isCustomerFilter,
  isOrderFilter,
  isContactsFilter,
  isContactsFilterButton,
  isCompaniesFilter,
  isLeadsFilter,
  isCryptoOrdersFilter,
  isInvoiceListFilter,
  isTicketsListFilter,
  isNFTRankingFilter,
  isTaskListFilter,
  isAddOptions,
  isAddUserList,
  handleOrderClicks,
  handleUserClick,
  handleCustomerClick,
  isAddCustList,
  customPageSize,
  tableClass,
  theadClass,
  trClass,
  thClass,
  tdClass,
  divClass,
  SearchPlaceholder
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultColumnFilter },
      initialState: {
        pageIndex: 0, pageSize: customPageSize, selectedRowIds: 0, sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect
  );

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " " : "") : "";
  };

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0;
    gotoPage(page);
  };

  // const onChangelast = () => {
  //   const pageCount = Math.ceil(data.length / customPageSize);
  //   gotoPage(pageCount);
  // };

  return (
    <Fragment>
      <Row className="mb-3">
        {isGlobalSearch && (
          <Col md={1}>
            <select
              className="form-select"
              value={pageSize}
              onChange={onChangeInSelect}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </Col>
        )}
        {isGlobalFilter && (
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
            isProductsFilter={isProductsFilter}
            isCustomerFilter={isCustomerFilter}
            isOrderFilter={isOrderFilter}
            // isContactsFilter={isContactsFilter}
            isContactsFilterButton={isContactsFilterButton}
            isCompaniesFilter={isCompaniesFilter}
            isLeadsFilter={isLeadsFilter}
            isCryptoOrdersFilter={isCryptoOrdersFilter}
            isInvoiceListFilter={isInvoiceListFilter}
            isTicketsListFilter={isTicketsListFilter}
            isNFTRankingFilter={isNFTRankingFilter}
            isTaskListFilter={isTaskListFilter}
            SearchPlaceholder={SearchPlaceholder}
          />
        )}
        {isAddOptions && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded  mb-2 me-2"
                onClick={handleOrderClicks}
              >
                <i className="mdi mdi-plus me-1" />
                Add New Order
              </Button>
            </div>
          </Col>
        )}
        {isAddUserList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={handleUserClick}
              >
                <i className="mdi mdi-plus-circle-outline me-1" />
                Create New User
              </Button>
            </div>
          </Col>
        )}
        {isAddCustList && (
          <Col sm="7">
            <div className="text-sm-end">
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                onClick={handleCustomerClick}
              >
                <i className="mdi mdi-plus me-1" />
                New Customers
              </Button>
            </div>
          </Col>
        )}
      </Row>
      {/* <th key={column.id} className={column.Header ==="Action" ||column.Header ==="Action" ?thClass:""} {...column.getSortByToggleProps()}> */}
      <div className={divClass}>
        <Table hover {...getTableProps()} className={tableClass}>
          <thead className={theadClass}>
            {headerGroups.map((headerGroup) => (
              <tr className={trClass} key={headerGroup.id}  {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} className={thClass} {...column.getSortByToggleProps()}>
                    {column.render("Header")}
                    {/* {console.log(column.isFixed)} */}
                    {generateSortingIndicator(column)}
                    {/* <Filter column={column} /> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => {
                      return (
                        <td key={cell.id} {...cell.getCellProps()} className={tdClass}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </Table>
      </div>
      {/* <div className="d-flex justify-content-between">
        <div className="mr-auto"> Total Count : {dataCount} </div>
        <div className="d-flex justify-content-end">
          <Pagination>
            <PaginationItem>P
              <PaginationLink  onClick={() => gotoPage(0)} disabled={!canPreviousPage}
                first
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={previousPage}
                disabled={!canPreviousPage}
                href="#"
                previous
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="active" href="#">
                {pageIndex + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={nextPage} disabled={!canNextPage}
                href="#"
                next
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
                // href="#"
                last
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div> */}
      <div className="gridjs-footer">
        <div className="gridjs-pagination">
          <div className="gridjs-summary" title="Total Count">
            Total Count : {dataCount}
          </div>
          <div className="gridjs-pages" >
            <Pagination>
              <PaginationItem>
                <PaginationLink onClick={() => gotoPage(0)} disabled={!canPreviousPage}
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={previousPage}
                  disabled={!canPreviousPage}
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="active" href="#">
                  {pageIndex + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={nextPage} disabled={!canNextPage}
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
                  last
                  href="#"
                />
              </PaginationItem>
            </Pagination>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

TableContainer.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default TableContainer;