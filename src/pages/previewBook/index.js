import BookForm from "../../components/bookForm";

const PreviewBook = ({ books, handleBook }) => {
  return <BookForm books={books} preview handleBook={handleBook} />;
};
export default PreviewBook;
