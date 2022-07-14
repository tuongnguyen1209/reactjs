const AppResponse = require("../utils/AppResponse");
const catchAsync = require("../utils/catchAsync");

exports.getMyProfile = catchAsync(async (req, res) => {
  const { user } = req;

  AppResponse(res, user);
});
