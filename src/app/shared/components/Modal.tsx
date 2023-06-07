import * as React from "react";

import Dialog from "@mui/material/Dialog";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export function Modal(props: React.PropsWithChildren<ModalProps>) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={"lg"}>
      {props.children}
    </Dialog>
  );
}
