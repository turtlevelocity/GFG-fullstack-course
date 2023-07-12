import { useEffect, useState} from 'react';
import "./Table.css";
import TableHead from './TableHead';
import { Route, Router, useNavigate } from 'react-router-dom';


const TableBody = (props) => {
  // console.log(props.bodyData);
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
//

// class Table extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       counter: 1,
//       headers: {col1: "Name", col2:"job"},
//       date: new Date()
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     console.log("Mounting component")
//     this.timerId = setInterval(()=> {
//       this.setState({
//         date: new Date()
//       })
//     }, 1000)
//     // iniside here make api calls or databse call
//   }

//   componentDidUpdate() {
//     console.log("Component did update")
//     // if it is required by change in state then only add api/ database call here
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId)
//   }

//   handleClick() {
//     const newCounter = this.state.counter+1;
//     this.setState({
//       counter: newCounter
//       }
//     )
//   }

//   render(){
//     // const {tableData} = this.props;
//     const tableData = this.props.tableData;

//     return(
//       <>
//         <h2>This is the time: {this.state.date.toLocaleTimeString()}</h2>
//         <div>Counter: {this.state.counter}</div>
//         <button onClick={this.handleClick}>Click me</button>
//         <table>
//           <TableHead header={this.state.headers}/>
//           <TableBody bodyData={tableData}/>
//         </table>
//       </>

      
//     )
//   }
// }

const Table = (props) => {


  const [counter, setCounter] = useState(1);
  const [date, setDate] = useState(new Date());
  const [headers, setHeaders] = useState({col1: "Name", col2:"job"})
  const navigate = useNavigate();

  // useEffect()
  useEffect(()=>{
    console.log(" calling use effect only in change of counter variable")
  }, [counter])

  useEffect(() => {
    setInterval(()=> setDate(new Date()), 1000)
  })

  const handleClick = () => {
    
    navigate("/contact")
  }

  const conditionalRender = () => {
    if(counter>5){
      return(<h2>Hurray!!!</h2>)
    }
    else
      return null
  }

  return(
    <>
      <h2>This is the time: {date.toLocaleTimeString()}</h2>
      <div>Counter: {counter}</div>
      {conditionalRender()}
      <button onClick={handleClick} >Click me</button>
      <table>
        <TableHead header={headers}/>
        <TableBody bodyData={props.tableData}/>
      </table>
    </>
  )
}

export default Table;