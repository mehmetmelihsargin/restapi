import Navbar from '../src/Navbar';
import './App.css';


function App() {
  // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer 00D8d000004KV9a!AQkAQL8KjFpUpPhQfiFYwmP4R7qoMODr0aNhJSpVwCxGqlFV3Lreic_PDMZ_Ojbv6FE7w40uMH.FtEQqox28nu64ICoMgVlq'},
        
       
    };
    fetch('https://mms-b-dev-ed.my.salesforce.com/services/apexrest/Account/0018d00000B23e4AAB', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(data => this.setState({ postId: data.id }));


  return (
    <div className="App">
  <Navbar/>
  
    </div>
  );
}

export default App;
 