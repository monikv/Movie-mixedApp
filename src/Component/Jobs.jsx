import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, CircularProgress, Button, Link } from "@mui/material";
import axios from "axios";
import Nav from './Nav';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://jsearch.p.rapidapi.com/estimated-salary", {
        params: {
          job_title: "nodejs developer",
          location: "new york",
          location_type: "ANY",
          years_of_experience: "ALL"
        },
        headers: {
          "X-RapidAPI-Key": "43dd5654b3msh2d4bd7c2a9aa6a8p1bceddjsn97aff6da058c", // Replace with your RapidAPI key
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        }
      });

      setJobs(response.data.data || []); // Assuming the API returns an array of jobs in `data.data`
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Job Listings
        </Typography>
        <Button variant="contained" color="primary" onClick={fetchJobs} style={{ marginBottom: "20px" }}>
          Fetch Jobs
        </Button>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card variant="elevation">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {job.job_title || "Job Title Not Available"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Location: {job.location || "Location Not Available"}
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: "10px" }}>
                      Estimated Salary: ${job.min_salary?.toFixed(2)} - ${job.max_salary?.toFixed(2)} ({job.salary_currency || "USD"})
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Median Salary: ${job.median_salary?.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Base Salary: ${job.min_base_salary?.toFixed(2)} - ${job.max_base_salary?.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Additional Pay: ${job.min_additional_pay?.toFixed(2)} - ${job.max_additional_pay?.toFixed(2)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Salary Period: {job.salary_period || "Not Available"}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Publisher: <Link href={job.publisher_link} target="_blank" rel="noopener">{job.publisher_name || "Not Available"}</Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Confidence: {job.confidence || "Not Available"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};

export default Jobs;