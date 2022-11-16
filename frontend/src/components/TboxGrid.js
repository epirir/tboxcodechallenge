import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const TboxGrid = (props) => {
  let params = new URLSearchParams(window.location.search);
  let fileName = params.get("fileName");

  let endpointData = "/files/data";

  if (fileName) {
    endpointData = `${endpointData}?fileName=${fileName}`;
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await axios.get(endpointData);

      setData(result.data);
    };

    loadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data.map((file) =>
          file.lines.map((line, key) => (
            <tr key={key}>
              <td>{file.file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default TboxGrid;
