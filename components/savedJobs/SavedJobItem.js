import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { deleteSavedJob } from '@/utils/api/jobs';



export default function SavedJobItem({savedJob}) {
  const router = useRouter()

  return <Card variant="outlined" sx={{ marginBottom: 2, width: "90%"}}>
    <Box sx={{ p: 2 }}  display="flex">
      <Box sx={{flexGrow: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          {savedJob.job.title}
        </Typography>
        <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
          {savedJob.job.job_type} • {savedJob.job.location}
        </Typography>
      </Box>
      <Box sx={{p: 2}}>
        <Button 
          sx={{mr: 1}} 
          size="small" 
          color="success" 
          variant="contained"
          onClick={() => router.push(`apply/${savedJob.id}`)}
        >
          Apply
        </Button>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={async () => {
            await deleteSavedJob(savedJob.id);
            router.reload();
          }}
        >
          Delete
        </Button>
      </Box>
    </Box>
  </Card>
}