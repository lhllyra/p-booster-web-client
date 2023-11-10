import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";

const LoginForm = ({ onSuccess }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { username, password });

      const token = response.data.token;

      localStorage.setItem("token", token);

      onSuccess();
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 300,
        margin: "auto",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 4,
      }}
    >
      <Typography variant="h5" mb={2}>
        Login to Your Account
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          label="Username"
          fullWidth
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
        {error && (
          <Typography color="error" mt={2}>
            {error}
          </Typography>
        )}
      </form>
    </Box>
  );
};

export default LoginForm;
