import React, { useState, useEffect } from "react";
import api from "../apis/Typicode";

const ResourceList = ({ resource }) => {
  const [resource, setResource] = useState([]);

  const fetchResource = async resource => {
    const response = await api.get(`/${resource}`);
    setResource(response.data);
  };

  useEffect(
    () => {
      fetchResource(resource);
    },
    [resource]
  );

  return (
    <ul>
      {resource.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
