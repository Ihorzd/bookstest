import { useState } from "react";

import Paper from "@mui/material/Paper";

import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
} from "@mui/material";
import Book from "../../components/book";

import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/deleteModal";

const useStyles = makeStyles((theme) => ({
  action: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Books = ({ booksData, deleteBook }) => {
  const [opendDeleteModal, setOpneDeleteModal] = useState(false);
  const [currentBook, setCurrentBook] = useState();
  const classes = useStyles();
  const navigate = useNavigate();

  const handleOpenDeleteModal = () => {
    setOpneDeleteModal(!opendDeleteModal);
  };
  const handleCurrentBook = (book) => {
    setCurrentBook(book);
  };

  return (
    <Grid container p="40px">
      <Grid
        item
        display="flex"
        mb="40px"
        justifyContent="space-between"
        xs={12}
      >
        <Typography variant="h4" component="h2">
          Books List
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/books/new");
          }}
        >
          Add New Book
        </Button>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ height: "36px" }}>
              <TableCell>
                <Typography>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography>Published year</Typography>
              </TableCell>
              <TableCell>
                <Typography>Author</Typography>
              </TableCell>
              <TableCell>
                <Typography className={classes.action}>Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ border: "none" }}>
            {booksData.map((book, index) => (
              <Book
                key={index}
                book={book}
                handleOpenDeleteModal={handleOpenDeleteModal}
                handleCurrentBook={handleCurrentBook}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        open={opendDeleteModal}
        handleClose={handleOpenDeleteModal}
        currentBook={currentBook}
        deleteBook={deleteBook}
      />
    </Grid>
  );
};
export default Books;
