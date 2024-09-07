import {
  Container,
  Heading,
  Section,
  SearchForm,
  CountryList,
  Loader,
} from 'components';
import { fetchByRegion } from '../service/countryApi';
import { useEffect, useState } from 'react';
export const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleGetData(data) {
    setError(null);

    setRegion(data);
  }
  useEffect(() => {
    if (!region) {
      return;
    }
    async function getData() {
      setLoading(true);
      try {
        const info = await fetchByRegion(region);
        setCountries(info);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [region]);
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleGetData} />
        {loading && <Loader />}
        {error && <Heading title={error} bottom />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
