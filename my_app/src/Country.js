/*
	Here is a template for your component
		<div className="country">
			<a href={} target="_blank">{country.name.official}</a>
			<img src={} />
			<button onClick={}>Delete</button>
		</div>	

		make sure to pass the handleDelete function into the onClick listener
		img src will hold the .flags.png
		and href will hold .maps.googleMaps 
*/

const Country = () => {
	//Remember to destructure your props here
	//You'll be destructuring country, setCountries, countries


	//Study this function here it will be helpful for you
	//This same delete function will be used in stranger's things
	const handleDelete = () => {
		const newCountries = countries.filter((elem) => elem.name.official !== country.name.official);
		setCountries(newCountries);
	}

	return (
	);
}

export default Country;