import { ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import React from "react";

export const TextEditor = (options: ColumnEditorOptions) => {
  return (
    <InputText
      className={`w-full`}
      type="text"
      value={options.value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (options.editorCallback) {
          options.editorCallback(e.target.value);
        }
      }}
      onKeyDown={(e) => e.stopPropagation()}
    />
  );
};
