import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import RepoList from "./components/RepoList";
import SingleRepo from "./components/SingleRepo";

function App() {
  return (
    <ChakraProvider>
      {/* Uncomment and customize if desired */}
      {/* <Box
        className="bg-gray-200 p-4 rounded shadow"
        textAlign="center"
        fontsize="xl"
      >
        <Heading>My Github Portfolio</Heading>
      </Box> */}
      <Routes>
        {" "}
        {/* Define Routes component */}
        <Route path="/" element={<RepoList />} />
        <Route path="/repos/:repoId" element={<SingleRepo />} />{" "}
      </Routes>
    </ChakraProvider>
  );
}

export default App;
