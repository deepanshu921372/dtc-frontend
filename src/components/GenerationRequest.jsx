import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import stopsData from "./../assets/json_route_761.json";
import axios from "axios";

const GenerationRequest = () => {
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(""); // Default route
  const [stops, setStops] = useState([]);

  useEffect(() => {
    const stopList = stopsData.map((item) => item.StopName);
    setStops(stopList);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/api/bus-request", { // Updated port to match the server code
        startPoint,
        endPoint,
        selectedRoute,
      });

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert("Error submitting the request");
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Request a Bus
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Starting Point"
          fullWidth
          margin="normal"
          select
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
          required
        >
          {stops.map((stop, index) => (
            <MenuItem key={index} value={stop}>
              {stop}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Ending Point"
          fullWidth
          margin="normal"
          select
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
          required
        >
          {stops.map((stop, index) => (
            <MenuItem key={index} value={stop}>
              {stop}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Select Route"
          fullWidth
          margin="normal"
          select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          required
        >
          <MenuItem value="761">761</MenuItem>
          <MenuItem value="By Pass Exp">By Pass Exp</MenuItem>
        </TextField>

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit Request
        </Button>
      </form>
    </Box>
  );
};

export default GenerationRequest;
