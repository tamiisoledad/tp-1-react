import React from "react";

const TableRow = ({title, lenght, rating, genres, awards}) => {
    return(
    <tr>
      <td>{title}</td>
      <td>{lenght}</td>
      <td>{rating}</td>
      <td>
          <ul>
          {genres.map((genre, index) => <li key = {genre + index}> {genre}</li>)}
          </ul>
      </td>
      <td>{awards}</td>
    </tr>
    );
}

export default TableRow;