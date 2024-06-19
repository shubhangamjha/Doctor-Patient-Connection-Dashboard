import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

const PatientCard = ({ patient, onClick }) => (
  <Card>
    <CardActionArea onClick={onClick}>
      <CardContent>
        <img src={patient.profile_picture} alt="patient" style={{ width: '100%' }} />
        <Typography variant="h5">{patient.patient_name}</Typography>
        <Typography variant="body2">{new Date(patient.next_appointment).toLocaleString()}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default PatientCard;
