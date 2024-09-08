import jsPDF from "jspdf";
import "jspdf-autotable";
import { Users } from "./Interfaces";

export const ExportPdf = (data: Users[]) => {
  const doc = new jsPDF();
  (doc as any).autoTable({
    head: [["Name", "Username", "Email", "Phone"]],
    body: data.map((user) => [
      user.name,
      user.username,
      user.email,
      user.phone,
    ]),
    margin: { top: 10 },
    styles: {
      cellPadding: 5,
      fontSize: 10,
      halign: "left",
      valign: "middle",
    },
  });

  doc.save("users.pdf");
};
