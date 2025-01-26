import { Box, Container, Grid, Typography } from "@mui/material"
import { useRouter } from "next/router"
import ApplyJobForm from "@/components/apply/ApplyJobForm"
import ApplyJobDetails from "@/components/apply/ApplyJobDetails"
import { useState, useEffect } from "react"
import { getJob} from "@/utils/api/jobs"
import NavBar from "@/components/NavBar"
import SuccessfulApplicationMessage from "@/components/apply/SuccessfulApplicationMessage"
export default function Id() {
    const router = useRouter()
    const { id } = router.query
    const [job, setJob] = useState({})
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (router.isReady) {
            getJob(id)
                .then((res) => {
                    setJob(res)
                })
        }
    }, [router.isReady, id])
    

    async function applyCallback() {
        setSuccess(true)
    }


    return <>
        <NavBar />
        <Container>
            <Typography variant='h2'>Apply for Job</Typography>    
            <Typography variant='h6'>Enter your details to apply for the job</Typography>
            <Grid container spacing={2} sx={{}}>
                <Grid item xs={6} lg={12}>
                    <Box>
                        {!success && <ApplyJobForm job={job} submitCallback={applyCallback} />}
                        {success && <SuccessfulApplicationMessage job={job} />}    
                    </Box>
                </Grid>
                <Grid item xs={6} lg={12}>
                    <Box>
                        <ApplyJobDetails job={job} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </>
}