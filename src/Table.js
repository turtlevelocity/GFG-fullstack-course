import react, {Component} from 'react';
import "./Table.css";
import TableHead from './TableHead';


const TableBody = (props) => {
  console.log(props.bodyData);
  const rowElements = props.bodyData.map((row, index) => {
    return(
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
    </tr>
    );
  });



  return (<tbody>{rowElements}</tbody>)

}


class Table extends Component {
  
  render(){
    // const {tableData} = this.props;
    const tableData = this.props.tableData;

    return(
      <table>
        <TableHead />
        <TableBody bodyData={tableData}/>
      </table>
    )
  }
}

export default Table;