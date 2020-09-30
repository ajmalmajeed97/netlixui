import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
   
<Nav/>
<Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixoriginals}
     isLargeRow
     />
     <Row title="Trending Now"  fetchUrl={requests.fetchTrending} />
     <Row title="Actions" fetchUrl={requests.fetchActions}/>
     <Row title="Thrillers"  fetchUrl={requests.fetchThrillers} />
     <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
     <Row title="Series"  fetchUrl={requests.fetchSeries} />
     <Row title="Animie" fetchUrl={requests.fetchAnimie}/>
     <Row title="Scifi"  fetchUrl={requests.fetchScifi} />
     <Row title="Regional" fetchUrl={requests.fetchRegional}/>
     <Row title="Horror"  fetchUrl={requests.fetchHorror} />
    </div>
  );
}

export default App;
