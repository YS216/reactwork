import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
  const params = useParams();
  const [country, setCountry] = useState();

  const setInitData = async() => {
    const data = await fetchCountry(params.code);
    setCountry(data);
  }

  return (
    <div>Country : {params.}</div>
  )
}

export default Country;