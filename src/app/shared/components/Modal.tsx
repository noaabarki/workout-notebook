import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { onClose, isOpen } = props;

  return (
    <Dialog onClose={() => onClose()} open={isOpen} maxWidth={"lg"} style={dialogStyle}>
      {props.title && (
        <div className="row space-between">
          <DialogTitle>{props.title}</DialogTitle>
          <IconButton onClick={onClose}>
            <IoCloseOutline />
          </IconButton>
        </div>
      )}
      {props.children}
    </Dialog>
  );
}

const dialogStyle: React.CSSProperties = {
  padding: "var(--spacing-1)",
};
