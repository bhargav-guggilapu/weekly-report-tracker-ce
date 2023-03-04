import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

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
  return (
    <TableContainer component={Paper} style={{ width: "fit-content" }}>
      <Table
        sx={{ minWidth: 700, maxWidth: 1000 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell
              align="justify"
              style={{
                fontWeight: "bold",
              }}
            >
              Date
            </StyledTableCell>
            <StyledTableCell
              align="left"
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
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, j) => (
            <StyledTableRow key={j}>
              <StyledTableCell align="justify" component="th" scope="row">
                {row.date + " (" + row.day + ")"}
              </StyledTableCell>
              <StyledTableCell align="left">
                {
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
                }
              </StyledTableCell>
              <StyledTableCell align="center">{row.hours}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
