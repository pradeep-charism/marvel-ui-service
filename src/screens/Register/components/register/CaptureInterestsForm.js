import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CaptureInterestsForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        What are your interests?
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest1" value="yes" />}
              label="Swimming"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest2" value="yes" />}
              label="Dancing"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest3" value="yes" />}
              label="Music"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest4" value="yes" />}
              label="Singing"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="interest5" value="yes"/>}
            label="Reading"
        />
      </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest5" value="yes"/>}
              label="Badminton"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest6" value="yes"/>}
              label="English"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="interest7" value="yes"/>}
              label="Skating"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="interest8" value="yes" />}
            label="Maths"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
