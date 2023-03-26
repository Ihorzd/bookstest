import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  border: "none",
  bgcolor: "background.paper",

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const DeleteModal = ({ open, handleClose, currentBook, deleteBook }) => {
  return (
    <Modal open={!!open}>
      <Box sx={{ ...style, width: 400 }}>
        <Typography variant="h5">
          Are you sure you want to delete this book?
        </Typography>
        <Typography variant="h6">Name is: {currentBook?.name}</Typography>
        <Typography variant="h6">Author is: {currentBook?.author}</Typography>
        <Typography variant="h6">
          Year is: {currentBook?.publishedYear}
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "space-around", mt: "20px" }}
        >
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              deleteBook(currentBook.id);
              handleClose();
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
export default DeleteModal;
