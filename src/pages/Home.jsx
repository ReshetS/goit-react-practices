import { Container, Heading, Loader, Section } from 'components';
import { getCountries } from '../service/countryApi';
import { useEffect, useState } from 'react';
import { CountryList } from 'components/CountryList/CountryList';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getEuroCountries() {
      setLoading(true);
      try {
        const res = await getCountries();
        setCountries(res);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getEuroCountries();
  }, []);

  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
