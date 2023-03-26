import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  action: {
    display: "flex",
    justifyContent: "content",
    width: "32px",
    cursor: "pointer",
  },
}));

const Action = ({ action, book, handleOpenDeleteModal, handleCurrentBook }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleAction = (event) => {
    event.stopPropagation();

    if (action.toLowerCase() === "delete") {
      handleOpenDeleteModal();
      handleCurrentBook(book);
    } else {
      navigate(`/books/${book.id}/edit`);
    }
  };
  return (
    <Tooltip title={action}>
      <Box className={classes.action} onClick={handleAction}>
        {action.toLowerCase() === "delete" ? (
          <DeleteOutlineOutlinedIcon sx={{ color: "red" }} />
        ) : (
          <ModeEditOutlineOutlinedIcon sx={{ color: "blue" }} />
        )}
      </Box>
    </Tooltip>
  );
};
export default Action;
