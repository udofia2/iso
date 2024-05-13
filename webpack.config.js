module.exports = {
  // ... other configurations
  resolve: {
    fallback: {
      "body-parser": false,
      "content-disposition": false,
      // ... add others if needed
    },
  },
};
