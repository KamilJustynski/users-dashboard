import { ColumnEvent } from "primereact/column";

export const OnCellEditComplete = (e: ColumnEvent) => {
  let { rowData, newValue, field, originalEvent: event } = e;
  switch (field) {
    default:
      if (newValue.trim().length > 0) rowData[field] = newValue;
      if (newValue.trim().length === 0) rowData[field] = "NULL";
      else event.preventDefault();
      break;
  }
};
