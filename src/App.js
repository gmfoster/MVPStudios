import React from "react";
import axios from "axios";
import "./styles.css";
import EnhancedTable from "./Table";

export default function App() {
  const handleAmountUnseen = () => {
    if (!data.length) return "loading...";
    const dataUnseen = data.filter((item) => item.seen);
    return dataUnseen.length;
  };
  const [data, setData] = React.useState([]);

  const handleOnChange = async (value, id) => {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      await axios.patch(
        `/${id}/`,
        {
          fixed: !value
        },
        { headers }
      );
    } catch (error) {
      console.log(error);
    }

    const res = await axios.get(
      "https://604752c8b801a40017ccbe94.mockapi.io/crashes/"
    );

    setData(res.data);
  };

  const handleRowSort = (rows) => {
    return rows.sort((a, b) => Number(a.fixed) - Number(b.fixed));
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://604752c8b801a40017ccbe94.mockapi.io/crashes"
      );

      setTimeout(() => {
        setData(handleRowSort(result.data));
      }, 2000);
    };
    fetchData();
  }, []);

  if (data.length < 0) return "loading...";
  return (
    <div className="App">
      <p>number unseen: {handleAmountUnseen()}</p>
      <EnhancedTable tableData={data} onChange={handleOnChange} />
    </div>
  );
}
