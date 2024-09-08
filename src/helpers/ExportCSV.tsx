import { MutableRefObject } from "react";

export const ExportCSV = (
  selectOnly: boolean,
  dt: MutableRefObject<any>
): void => {
  dt.current.exportCSV({ selectOnly });
};
