import './index.css';
//Make sure to import useState, useEffect

/*
How does my json look like? ༼ つ ◕_◕ ༽つ
^ In other words what is the shape of my JSON? Or what properties are contained within my json?

We will specifically use the name.official, maps.googleMaps, and flags.png properties
so it may look something like this within your code country.flags.png

You can specifically go to the given link on line 28 in your browser to see the whole entire JSON that we will fetch
However, it'll look a little funky so here's a chrome extension to make it easier for you to read
Chrome Extension:
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=en-US
*/

const App = () => {
  //Create a state variable to contain all of the countries

  /*
  This will be our fetching function for the different countries
  usually we'll see this within a different file such as ./api/index.js
  but for simplicity's sake we'll create it here
  use this url for your fetch function => https://restcountries.com/v3.1/all
  */
  const fetchCountries = async () => {
    //Fetch for the data

    //parse the data with the .json() function

    //call setCountries and place the data within the arguments;
   
  }

  useEffect(() => {
    //Call your fetchCountries function
   
  }, [])

  console.log(countries);

  return (
    <div className="App">
      {/*Here we will apply our mapping to map through the different countries */}
      {/** In this app we will be deleting different countries off 
       * of our state so we shouldn't use index as our key 
       * Let's use the countries name as the key instead, this way we apply some good practices in our code
       * If you console.log one of the elements within the fetched countries they should have a name property with a nested object with a property of official
       * So we'll go ahead and use that ... key = country.name.official*/}
    </div>
  );
}

export default App;