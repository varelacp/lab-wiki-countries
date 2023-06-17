import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            to={`/country/${country.alpha3Code}`}
            key={country.alpha3Code}
            className="list-group-item"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`flag ${country.alpha3Code}`}
              width={50}
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
