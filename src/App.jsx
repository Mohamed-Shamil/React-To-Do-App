import './App.css'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions,comedy,documentaries,horror,romance} from './urls'

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Banner />
     <RowPost url={originals} title="Netflix Originals" />
     <RowPost url={actions} title='Actions' isSmall />
     <RowPost url={comedy} title='Comedy' isSmall />
     <RowPost url={horror} title='Horror' isSmall />
     <RowPost url={romance} title='Romance' isSmall />
     <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
