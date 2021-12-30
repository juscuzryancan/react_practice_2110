/*
	Here is a template for your component
		<div className="country">
			<a href={} target="_blank">{country.name.official}</a>
			<img src={} />
			<button onClick={}>Delete</button>
		</div>	
*/

const Country = (props) => {
	//Remember to destructure your props here
	//You'll be destructuring country, setCountries, countries
	const {
		country, 
		setCountries, 
		countries
	} = props


	//Study this function here it will be helpful for you
	//This same delete function will be used in stranger's things
	const handleDelete = () => {
		const newCountries = countries.filter((elem) => elem.name.official !== country.name.official);
		setCountries(newCountries);
	}

	return (
		<div className="country">
			<a href={country.maps.googleMaps} target="_blank">{country.name.official}
			</a>
			<img src={country.flags.png} />
			<button onClick={handleDelete} >Delete</button>
		</div>	
	);
}

export default Country;