import NavBar from "@/components/NavBar";
import { CircularProgress, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getSavedJobsDetails } from "@/utils/api/jobs";
import SavedJobsList from "@/components/savedJobs/SavedJobsList";


export default function SavedJobs() {
    const [isLoading, setIsLoading] = useState(true)
    const [savedJobs, setSavedJobs] = useState([])
    useEffect(() => {
        getSavedJobsDetails().then((res) => {
            setIsLoading(false)
            setSavedJobs(res)
        }, (res) => {console.error("Could not get Job Details", res.error)})
    }, [])

    return <>
    <NavBar />
    <Container maxWidth="lg" component="section">
        {isLoading && <CircularProgress />}
        <SavedJobsList savedJobs={savedJobs} />
    </Container>
    </>
}