import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "./Table.module.css";

export default function BasicTable({ rows, setData }) {
  const [editArr, setEditArr] = React.useState([]);

  const editContent = (e, id) => {
    const { name, value } = e.target;
    const editData = rows.map((item) =>
      item.id === id && name ? { ...item, [name]: value } : item
    );
    setData(editData);
  };

  const updateEditArr = (e, id) => {
    if (editArr.includes(id) === false) {
      setEditArr((oldArr) => [...oldArr, id]);
    } else {
      const editArrNew = editArr.filter((a) => a !== id);
      setEditArr(editArrNew);
    }
  };

  const deleteData = (e, id) => {
    const deleteArr = rows.filter((a) => a.id !== id);
    setData(deleteArr);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Progress</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                <input
                  className={
                    editArr.includes(row.id) === true
                      ? styles.edtTextField
                      : styles.textField
                  }
                  type="text"
                  value={row.title}
                  name="title"
                  id={row.id}
                  onChange={(e) => {
                    editArr.includes(row.id) && editContent(e, row.id);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <input
                  className={
                    editArr.includes(row.id) === true
                      ? styles.edtTextField
                      : styles.textField
                  }
                  type="text"
                  value={row.description}
                  name="description"
                  id={row.id}
                  onChange={(e) => {
                    editArr.includes(row.id) && editContent(e, row.id);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <input
                  className={
                    editArr.includes(row.id) === true
                      ? styles.edtTextField
                      : styles.textField
                  }
                  type="text"
                  value={row.progress}
                  name="progress"
                  id={row.id}
                  onChange={(e) => {
                    editArr.includes(row.id) && editContent(e, row.id);
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <Link
                  href="#"
                  id={row.id}
                  className="action"
                  onClick={(e) => {
                    updateEditArr(e, row.id);
                  }}
                >
                  <FaEdit />
                </Link>
              </TableCell>

              <TableCell align="left">
                <Link
                  href="#"
                  id={row.id}
                  className="action"
                  onClick={(e) => {
                    deleteData(e, row.id);
                  }}
                >
                  <BsFillTrashFill />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
