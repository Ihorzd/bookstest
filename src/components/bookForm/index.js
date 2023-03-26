import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import * as Yup from "yup";
import { useFormik } from "formik";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputWrapper: {
    display: "flex",
    justifyContent: "start",
  },
  input: {
    width: "40%",
  },
}));

const BookForm = ({ books, preview, handleBook }) => {
  const navigate = useNavigate();
  const paramth = useParams();

  const currentBook = books.find(
    (book) => Number(book.id) === Number(paramth.id)
  );

  const classes = useStyles();
  const { values, handleChange, handleSubmit, isSubmitting, isValid, dirty } =
    useFormik({
      enableReinitialize: true,
      initialValues: currentBook
        ? {
            name: currentBook.name,
            author: currentBook.author,
            publishedYear: currentBook.publishedYear,
            isActive: currentBook.isActive,
            id: currentBook.id,
          }
        : {
            name: "",
            author: "",
            publishedYear: "",
            isActive: false,
          },

      validationSchema: Yup.object().shape({
        name: Yup.string().max(70).required(),
        author: Yup.string().max(120).required(),
        publishedYear: Yup.number()
          .min(1900)
          .max(new Date().getFullYear())
          .required(),
        isActive: Yup.boolean(),
      }),

      onSubmit: async (values, formikHelpers) => {
        handleBook({ ...values });
        navigate("/books");
      },
    });

  return (
    <Grid m="40px" container>
      <Grid item>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/books");
          }}
        >
          Books List
        </Button>
      </Grid>
      <Grid container display="flex" direction="column">
        <form onSubmit={handleSubmit}>
          <Grid item mt="20px" className={classes.inputWrapper}>
            <TextField
              className={classes.input}
              disabled={preview}
              required
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter Name"
              label={"Name"}
            />
          </Grid>
          <Grid item mt="20px" className={classes.inputWrapper}>
            <TextField
              className={classes.input}
              disabled={preview}
              required
              name="author"
              type="text"
              value={values.author}
              onChange={handleChange}
              placeholder="Enter Author Name"
              label={"Author Name"}
            />
          </Grid>
          <Grid item mt="20px" className={classes.inputWrapper}>
            <TextField
              className={classes.input}
              disabled={preview}
              required
              name="publishedYear"
              type="number"
              value={values.publishedYear}
              onChange={handleChange}
              placeholder="Published Year"
              label={"Published Year"}
            />
          </Grid>
          <Grid item mt="20px" className={classes.inputWrapper}>
            <FormControlLabel
              disabled={preview}
              value={values.isActive}
              type="checkbox"
              onChange={handleChange}
              name="isActive"
              control={<Checkbox defaultChecked={values.isActive} />}
              label="Active"
            />
          </Grid>
          <Grid item display="flex" mt="40px" justifyContent="flex-start">
            {preview ? (
              <Button
                type="submit"
                variant="outlined"
                onClick={() => {
                  navigate("edit");
                }}
              >
                Edit
              </Button>
            ) : (
              <Button
                type="submit"
                variant="outlined"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Save
              </Button>
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default BookForm;
