import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default function TitleComponent(title: string, description: string) {
  return (
    <Container component={Box}>
      <Box p={2} component={Paper} textAlign="center">
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {description}
        </Typography>
      </Box>
    </Container>
  );
}
