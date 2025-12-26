exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Pritam" },
    { id: 2, name: "Alex" }
  ]);
};
