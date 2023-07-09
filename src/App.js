import logo from './logo.svg';
import './App.css';
import Table from './Table';


function App() {
  const data = [
    {
      name: "row1 name",
      job: "row1 job"
    },
    {
      name: "row2 name",
      job: "row2 job"
    },
    {
      name: "row3 name",
      job: "row3 job"
    },
    {
      name: "row4 name",
      job: "row4 job"
    },
    {
      name: "row5 name",
      job: "row5 job"
    },
    
  ]

  return (
    <div className="App">
      <h1>My React Application</h1>
      <Table tableData={data}/>
    </div>
  );
}


export default App;
