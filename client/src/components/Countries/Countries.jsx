import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterCountriesByContinent, filterCountriesByActivity, orderByName, orderByPopulation, getActivities} from "../../actions/index";
import { LESS_POPULATION, HIGHER_POPULATION, ALL, AFRICA, NORTH_AMERICA, SOUTH_AMERICA, ANTARCTICA, ASIA, EUROPE, OCEANIA, ASCENDENTE, DESCENDENTE} from "../../const/const";
import Card from "../Country/Country";
import Paginado from "../Paginate/Paginate"
import "./Countries.css";

export default function Home() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  
  const countries = useSelector((state) => state.countries);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const lastCountry = currentPage * countriesPerPage;
  const firstCountry = lastCountry - countriesPerPage;
  const currentCountry = countries.slice(firstCountry, lastCountry);
  const [, setOrden] = useState("");

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function reloadButton(e){
    e.preventDefault()
    dispatch(getCountries())
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterActivity(e) {
    dispatch(filterCountriesByActivity(e.target.value));
    setCurrentPage(1);
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  }

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="countriesContainer">
      <div className="filterContainer">
      <button id='b1' className='filter-and-order' onClick={(e)=>reloadButton(e)}>Reload</button>
        <select className='filter-and-order'
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option>Filter by Alphabetical Order</option>
          <option value={ASCENDENTE}> A-Z </option>
          <option value={DESCENDENTE}> Z-A </option>
        </select>

        <select className='filter-and-order'
          onChange={(e) => {
            handleSort2(e);
          }}
        >
          <option>Filter by population</option>
          <option value={HIGHER_POPULATION}>Higher Population</option>
          <option value={LESS_POPULATION}>Less Population</option>
        </select>

        <select className='filter-and-order' onChange={(e) => handleFilterActivity(e)}>
          <option value="todos"> Activities </option>
          {activities.map((v) => (
            <option value={v.name}>{v.name}</option>
          ))} 
        </select>

        <select className='filter-and-order' onChange={(e) => handleFilterContinent(e)}>
          <option value="continent">continents</option>
          <option value={ALL}>All</option>
          <option value={AFRICA}>Africa</option>
          <option value={ANTARCTICA}>Antarctica</option>
          <option value={NORTH_AMERICA}>North America</option>
          <option value={SOUTH_AMERICA}>South America</option>
          <option value={ASIA}>Asia</option>
          <option value={EUROPE}>Europe</option>
          <option value={OCEANIA}>Oceania</option>
        </select>
      </div>

      <Paginado
        countriesPerPage={countriesPerPage}
        countries={countries.length}
        paginado={paginado}
      />

      <div className='countriesBox'>
        {currentCountry?.map((country) => {
          return (
            <div key={country.id}>
              <Link to={"/home/" + country.id}>
                <Card
                  name={country.name}
                  flag={country.flag}
                  continent={country.continent}
                  capital={country.capital}
                  population={country.population}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}