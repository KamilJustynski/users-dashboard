import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Users } from "./Interfaces";

export const ExportExcelFile = (data: Users[]) => {
  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const EXCEL_EXTENSION = ".xlsx";

  const saveAsExcelFile = (buffer: any, filename: string) => {
    const data = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${filename}${EXCEL_EXTENSION}`);
  };

  if (data) {
    const filteredData = data.map(({ company, website, ...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    saveAsExcelFile(excelBuffer, "Users");
  } else {
    console.error("No data to export.");
  }
};
