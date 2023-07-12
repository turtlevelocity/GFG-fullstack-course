const TableHead = (props) => {
  const {header} = props;
  // console.log(header);
  return (
    <thead>
      <tr>
        <th>{header.col1}</th>
        <th>{header.col2}</th>
      </tr>
    </thead>
  );
}

export default TableHead;