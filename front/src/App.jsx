import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/livre/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
    <ul>
      {data.map((card) => (
        <li key={card.id}>
            id={card.id}
            dateparution={card.dateparution}
            title={card.titre}
        </li>
      ))}
    </ul>
  </section>
  );
}

export default App;
