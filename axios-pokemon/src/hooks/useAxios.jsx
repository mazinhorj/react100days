import { useEffect, useState, useRef } from 'react';

const useAxios = (configRequest) => {

  const { axiosConfig, method, url, outrasConfigs = {} } = configRequest;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const effectRun = useRef(false)

  useEffect(() => {

    const controller = new AbortController();

    const fetchData = async () => {

      try {
        const res = await axiosConfig[method.toLowerCase()](url, {
          ...outrasConfigs,
          signal: controller.signal
        })
        console.log(res.data.results)
        setData(res.data)
      } catch (err) {
        console.log(err.message)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if(effectRun.current) fetchData();
    return () => {
      controller.abort();
      effectRun.current = true;
    };

  }, [])

  return [data, loading, error];
};

export default useAxios