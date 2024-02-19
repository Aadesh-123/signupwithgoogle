import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/login/sucess", {
        withCredentials: true,
      });
      setUserData(response.data.user);

      console.log("response", response);
    } catch (error) {
      navigate("*");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Welcome to Dashboard
        {Object.keys(userData).length > 0 && (
          <span
            style={{ color: "Blue", fontWeight: "bold", marginLeft: "10px" }}
          >
            {userData.displayName}
          </span>
        )}
      </h1>
    </div>
  );
};

export default Dashboard;
