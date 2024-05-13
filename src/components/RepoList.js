import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import for routing
import {
  Box,
  Flex,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import RepoItem from "./RepoItem";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); // Number of items per page (adjust as needed)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const PER_PAGE = 10; // Constant for readability
  const navigate = useNavigate(); // Access useNavigate hook

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      setError(null); // Clear previous error
      try {
        const response = await axios.get(
          `https://api.github.com/users/udofia2/repos?page=${currentPage}`
        );
        setRepos(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [currentPage, perPage]); // Re-fetch on page change

  const handlePageChange = (pageNumber) => {
    const maxPage = Math.ceil(repos.length / perPage);
    setCurrentPage(Math.min(pageNumber, maxPage)); // Limit page number to max available page
  };

  const startIndex = (currentPage - 1) * perPage;
  const paginatedRepos = repos.slice(startIndex, startIndex + perPage);

  return (
    <div>
      {isLoading && <p>Loading repositories...</p>}
      {error && <p>Error fetching repositories: {error}</p>}
      {repos.length > 0 && (
        <div>
          {/* Pagination UI with Chakra UI */}
          <Flex justifyContent="center" mb={4}>
            <Box as="nav">
              <UnorderedList display="flex" listStyleType="none">
                {/* Previous button */}
                <ListItem mr={2}>
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                </ListItem>

                {/* Page numbers */}
                {Math.ceil(repos.length / perPage) > 1 && (
                  <>
                    {Array.from({
                      length: Math.ceil(repos.length / perPage),
                    }).map((_, i) => (
                      <ListItem key={i + 1} mr={2}>
                        <button
                          className={currentPage === i + 1 ? "active" : ""}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </ListItem>
                    ))}
                  </>
                )}

                {/* Next button */}
                <ListItem>
                  <button
                    disabled={currentPage === Math.ceil(repos.length / perPage)}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
          {/* End of Pagination UI */}

          <ul>
            {paginatedRepos.map((repo) => (
              <RepoItem key={repo.id} repo={repo}>
                {/* Wrap RepoItem with Link (commented out) */}
                {/* <Link to={`/repos/${repo.id}`}>{repo.name}</Link> */}
                <RepoItem
                  key={repo.id}
                  repo={repo}
                  onClick={() => navigate(`/repos/${repo.id}`)} // Programmatic navigation
                />
              </RepoItem>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RepoList;
