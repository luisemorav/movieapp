import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Button,
  Grid,
  CardContent,
  TextField,
  Typography,
  Container,
  Stack,
} from "@mui/material";

const SearchView = () => {
  const [searchText, setSearchText] = useState("");
  const history = useNavigate();

  function searchInput(event) {
    setSearchText(event.target.value);
  }

  function searchButton() {
    if (searchText === "") return;
    history(`/search/${searchText}`);
  }

  return (
    <Container maxWidth="sm">
      <Grid container mt={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h2">OMDB Search</Typography>
              <Stack
                mt={2}
                direction="row"
                justifyContent="space-between"
                spacing={2}
              >
                <TextField
                  fullWidth
                  label="Movie or TV Show"
                  onChange={searchInput}
                />
                <Button fullWidth variant="contained" onClick={searchButton}>
                  SEARCH
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchView;
