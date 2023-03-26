import BookForm from "../../components/bookForm";

const AddBook = ({ books, handleBook }) => {
  return <BookForm books={books} handleBook={handleBook} />;
};
export default AddBook;
