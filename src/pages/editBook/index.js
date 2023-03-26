import BookForm from "../../components/bookForm";

const EditBook = ({ books, handleBook }) => {
  return <BookForm books={books} handleBook={updateBook} />;
};
export default EditBook;
