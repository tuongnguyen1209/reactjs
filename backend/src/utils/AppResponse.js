module.exports = (res, obj) => {
  return res.status(200).json({
    status: "Success",
    data: obj,
  });
};
