import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Heading, Text, Link as ChakraLink } from "@chakra-ui/react"; // Assuming Chakra UI for styling

function RepoItem({ repo }) {
  const { name, description, html_url } = repo;
  const navigate = useNavigate(); // Access useNavigate hook

  const handleClick = () => {
    navigate(`/repos/${repo.id}`); // Programmatic navigation
  };

  return (
    <Box as="article" mb={4} p={4} shadow="base" rounded="lg">
      <Heading as="h3" size="md">
        <ChakraLink href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </ChakraLink>
        {/* Separate Link for GitHub with target="_blank" */}
      </Heading>
      {description && <Text mt={2}>{description}</Text>}
      <button onClick={handleClick}>View Details</button>{" "}
      {/* Button for internal navigation */}
    </Box>
  );
}

export default RepoItem;
