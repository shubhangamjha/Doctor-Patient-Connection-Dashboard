import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientCard from './PatientCard';
import { TextField, Container, Grid, Modal, Box } from '@mui/material';

const App = () => {
  const [patients, setPatients] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data.data);
    } catch (error) {
      console.error('There was an error fetching the patients!', error);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredPatients = selectedDate
    ? patients.filter(patient => new Date(patient.next_appointment).toDateString() === new Date(selectedDate).toDateString())
    : patients;

  return (
    <Container>
      <TextField
        label="Select Date"
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Grid container spacing={2}>
        {filteredPatients.map(patient => (
          <Grid item xs={12} sm={6} md={4} key={patient._id}>
            <PatientCard patient={patient} onClick={() => setSelectedPatient(patient)} />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
      >
        <Box>
          {/* Modal content showing patient communication history */}
          {selectedPatient && (
            <div>
              <h2>{selectedPatient.patient_name}</h2>
              <p>Chat history: {selectedPatient.message.join(', ')}</p>
            </div>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default App;
