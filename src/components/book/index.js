import { TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Action from "../action";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  actionsWrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
  book: {
    "&:hover": {
      backgroundColor: "#d3d3d3",
      cursor: "pointer",
    },
  },
}));

const Book = ({ book, handleOpenDeleteModal, handleCurrentBook }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <TableRow
      className={classes.book}
      onClick={(event) => {
        event.stopPropagation();
        navigate(`/books/${book.id}`);
      }}
    >
      <TableCell>{book.name}</TableCell>
      <TableCell>{book.publishedYear}</TableCell>
      <TableCell>{book.author}</TableCell>
      <TableCell>
        <Box className={classes.actionsWrapper}>
          <Action
            action={"Delete"}
            book={book}
            handleOpenDeleteModal={handleOpenDeleteModal}
            handleCurrentBook={handleCurrentBook}
          />
          <Action action={"Edit"} book={book} />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default Book;
