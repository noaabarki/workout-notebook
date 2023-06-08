import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { onClose, isOpen } = props;

  return (
    <Dialog onClose={() => onClose()} open={isOpen} maxWidth={"lg"}>
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      {props.children}
    </Dialog>
  );
}
