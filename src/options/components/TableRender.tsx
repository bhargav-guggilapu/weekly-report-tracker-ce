import React, { useState } from "react";
import "../../popup/components/TaskEntry/TasksField.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import List from "@mui/material/List";
import { sendDayReport } from "../../popup/components/sendDayReportHelper";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableRender(props) {
  const [editing, setEditing] = useState(-1);
  const [hours, setHours] = useState(0);
  const [tasks, setTasks] = useState([""]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (e, i) => {
    const newTasks = [...tasks];
    newTasks[i] = e.target.value;
    setTasks(newTasks);
  };

  const onSave = async (row) => {
    if (
      tasks.filter((entry) => entry.trim().length == 0).length > 0 ||
      hours < 0 ||
      hours > 24
    ) {
      setOpen(true);
    } else {
      props.setIsLoading(true);
      setEditing(-1);
      const res = await sendDayReport(
        props.user,
        tasks,
        hours,
        row.date,
        props.timeline
      );
      if (res.status === 200) {
        props.getData();
      }
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ width: "fit-content", marginBottom: "30px" }}
    >
      <Table
        sx={{ minWidth: 700, maxWidth: 1000 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell
              align="center"
              style={{
                fontWeight: "bold",
              }}
            >
              Date
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                fontWeight: "bold",
              }}
            >
              Tasks
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                fontWeight: "bold",
              }}
            >
              Hours
            </StyledTableCell>
            {props.user && <StyledTableCell align="center" />}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, j) => (
            <StyledTableRow key={j}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.date + " (" + row.day + ")"}
              </StyledTableCell>
              <StyledTableCell align="center">
                {editing == j ? (
                  tasks.map((task, index) => {
                    return (
                      <textarea
                        key={index}
                        rows={2}
                        className="task-input"
                        style={{ width: "100%" }}
                        placeholder={`Task ${index + 1}`}
                        value={task}
                        onChange={(e) => handleChange(e, index)}
                      />
                    );
                  })
                ) : (
                  <List>
                    {row.tasks?.length > 0
                      ? row.tasks.map((task, i) => (
                          <ListItem
                            key={i}
                            style={{
                              paddingLeft: "0px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <span
                                style={{
                                  marginRight: "15px",
                                }}
                              >
                                {i + 1}.)
                              </span>
                              <span>{task}</span>
                            </div>
                          </ListItem>
                        ))
                      : "NOT FILLED"}
                  </List>
                )}
              </StyledTableCell>
              <StyledTableCell align="center">
                {editing == j ? (
                  <input
                    type="number"
                    min={0}
                    className="hours-input"
                    style={{ width: "100%", marginBottom: "0" }}
                    max={24}
                    value={hours}
                    onChange={(e) => setHours(+e.target.value)}
                  ></input>
                ) : (
                  row.hours || 0
                )}
              </StyledTableCell>
              {props.user && (
                <StyledTableCell align="center">
                  {editing == j ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "80px",
                      }}
                    >
                      <CheckCircleOutlineIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => onSave(row)}
                      />
                      <HighlightOffIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setEditing(-1)}
                      />
                      <AddCircleOutlineIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => setTasks((tasks) => [...tasks, ""])}
                      />
                    </div>
                  ) : (
                    <EditIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setHours(row.hours);
                        setTasks(row.tasks);
                        setEditing(j);
                      }}
                    />
                  )}
                </StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar open={open} autoHideDuration={3000}>
        <Alert severity="error">Invalid Entries!</Alert>
      </Snackbar>
    </TableContainer>
  );
}
