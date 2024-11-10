import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const handleView = () => {
    const sortByView = [...data].sort((a, b) => b.views - a.views);
    setData(sortByView);
    // console.log("view", sortByView);
  };

  const handleDate = () => {
    const sortByDate = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setData(sortByDate);
    // console.log("date", sortByDate);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div className="buttonBox">
        <button type="button" onClick={handleDate}>
          Sort by Date
        </button>
        <button type="button" onClick={handleView}>
          Sort by Views
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.views}</td>
                    <td>{item.article}</td>
                  </tr>
                );
              })
            : "Data Not Found"}
        </tbody>
      </table>
    </div>
  );
};

export default App;
