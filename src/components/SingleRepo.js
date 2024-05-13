import React from "react";
import { Box, Heading, Text, List, ListItem, Badge } from "@chakra-ui/react";

function SingleRepo({ repo }) {
  const { name, description, language, stargazers_count, forks_count } = repo;

  
  return (
    <Box p={4} shadow="base" rounded="lg">
      <Heading as="h2" size="lg">
        {name}
      </Heading>
      {description && <Text mt={2}>{description}</Text>}
      <List mt={4} spacing={2}>
        <ListItem>
          <Text fontWeight="bold">Language:</Text> {language}
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Stars:</Text> {stargazers_count}
        </ListItem>
        <ListItem>
          <Text fontWeight="bold">Forks:</Text> {forks_count}
        </ListItem>
      </List>
      {/* Add sections for additional details here (optional) */}
    </Box>
  );
}

export default SingleRepo;
