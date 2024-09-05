// UserComponent.tsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, selectLoading, selectError } from "../slices/UserReducer";
import { RootState } from "../store";
import { fetchUsersRequest } from "../slices/UserReducer";
import { Loading } from "../states/Loading";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";
import { Docs } from "../img/Docs";

export const Users = () => {
  const [filters, setFilters] = useState({
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
  });
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => selectData(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  console.log(data);

  if (loading) return <Loading />;

  if (error) return <p>ERROR</p>;

  if (data) {
    const tableKeys = Object.keys(data[0]);
    return (
      <div className="flex flex-col bg-[#F0F6FF] w-full px-10 ">
        <div className="flex py-2 justify-between">
          <div className="flex m-3 ml-0 gap-3">
            <p className="flex justify-center items-center text-md">
              Export file:
            </p>
            <Button
              className="button-csv"
              type="button"
              icon="pi pi-file"
              data-pr-tooltip="CSV"
            >
              <Docs />
              CSV
            </Button>
            <Button
              className="button-xls"
              type="button"
              icon="pi pi-file-excel"
              severity="success"
              data-pr-tooltip="XLS"
            >
              <Docs />
              XLS
            </Button>

            <Button
              className="button-pdf"
              type="button"
              icon="pi pi-file-pdf"
              severity="warning"
              data-pr-tooltip="PDF"
            >
              <Docs />
              PDF
            </Button>
          </div>
          <InputText
            className="p-2 m-3 text-xs rounded-xl border w-60 mr-0"
            placeholder="Szukaj..."
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFilters({
                global: {
                  value: e.target.value,
                  matchMode: FilterMatchMode.CONTAINS,
                },
              })
            }
          />
        </div>
        <div className=" py-2 w-full">
          <DataTable
            tableStyle={{ minWidth: "50rem" }}
            scrollable
            value={data}
            scrollHeight="700px"
            editMode="cell"
            filters={filters}
            className="text-xs h-full custom-row"
            removableSort
            paginator
            rows={20}
            totalRecords={6}
            stripedRows
          >
            {tableKeys
              .slice(1, 6)
              .filter((_, index) => index !== 3)
              .map((key) => (
                <Column
                  sortable
                  style={{ width: "25%" }}
                  field={key}
                  header={key.toUpperCase()}
                  key={key}
                />
              ))}
          </DataTable>
        </div>
      </div>
    );
  }
};
