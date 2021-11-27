import React from "react";

const TableRow = ({title, lenght, rating, genre, awards}) => {
    return(
    <tr>
      <td>{title}</td>
      <td>{lenght}</td>
      <td>{rating}</td>
      {
        genre ? <td>{genre.name}</td> : <td className="text-danger">Sin genero</td>
      }
      
      <td>{awards}</td>
    </tr>
    );
}
TableRow.defaultProps = {
  genre : "Sin genero"
}

export default TableRow;