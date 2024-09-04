// UserComponent.tsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectData, selectLoading, selectError } from "../slices/UserReducer";
import { RootState } from "../store";
import { fetchUsersRequest } from "../slices/UserReducer";
import { Loading } from "./Loading";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "primereact/button";

export const Home = () => {
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
      <div className="flex flex-col bg-sky-100 w-full px-10 ">
        <div className="flex py-2 justify-between">
          <div className="flex m-3 ml-0 gap-3">
            <p className="flex justify-center items-center text-md">
              Export file:
            </p>
            <Button
              className="flex pt-1 flex-col text-[8px] gap-1 justify-center w-12 h-12 items-center rounded-full bg-blue-300 hover:bg-blue-400 duration-200"
              type="button"
              icon="pi pi-file"
              data-pr-tooltip="CSV"
            >
              CSV
            </Button>
            <Button
              className="flex flex-col justify-center w-12 h-12 items-center text-[8px] gap-1 pt-1 rounded-full bg-green-300 hover:bg-green-400 duration-200"
              type="button"
              icon="pi pi-file-excel"
              severity="success"
              data-pr-tooltip="XLS"
            >
              XLS
            </Button>

            <Button
              className="flex flex-col justify-center w-12 h-12 items-center text-[8px] gap-1 pt-1 rounded-full bg-orange-300 hover:bg-orange-400 duration-200"
              type="button"
              icon="pi pi-file-pdf"
              severity="warning"
              data-pr-tooltip="PDF"
            >
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
        <div className="bg-sky-100 py-2 w-full">
          <DataTable
            tableStyle={{ minWidth: "50rem" }}
            scrollable
            value={data}
            scrollHeight="700px"
            editMode="cell"
            filters={filters}
            className="text-xs h-full"
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
