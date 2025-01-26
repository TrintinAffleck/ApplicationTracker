import { postApplication } from '@/utils/api/jobs';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ApplyJobForm({ job, submitCallback }) {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  async function handleSubmitApplication(e)
  {
    e.preventDefault()
    console.log('handleSubmitApplication')
    let application = {
      "jobId": job.id,
      "fullName": name,
      "email": email
    }
    
    postApplication(application)
      .then((res) => {
        if (res.error == undefined) {
          setValidEmail(true)
          submitCallback()
        }
        else {
          setValidEmail(false)
        }
    })
  }

  return <form style={{width: `90%`, }} onSubmit={handleSubmitApplication}>
    <Stack direction="column" spacing={2}>
      <TextField
        id="full-name"
        label="Full Name"
        variant="outlined"
        value={name}
        fullWidth
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="email"
        label="email"
        variant="outlined"
        fullWidth
        value={email}
        error={!validEmail}
        helperText={validEmail ? '' : 'Not valid Email!'}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        type="submit"
      >
        Submit Application
      </Button>
    </Stack>
  </form>
}