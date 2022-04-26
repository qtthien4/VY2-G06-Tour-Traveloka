import { Box, Modal, Typography } from "@material-ui/core";
import ListImage from "components/common/ListImage";
import Slide from "components/Slide";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
  // transition: "width 2s linear 1s",
};

export default function ModalImage({ tour, listImage, handleClose, open }) {
  let slideNumber = 1;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ListImage
            tour={tour}
            listImage={listImage}
            // slideNumber={slideNumber}
            // handleOnclickListTour
          />
        </Box>
      </Modal>
    </div>
  );
}
