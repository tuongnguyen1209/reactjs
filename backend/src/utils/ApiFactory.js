const ApiFeature = require("./ApiFeatures");
const AppResponse = require("./AppResponse");
const catchAsync = require("./catchAsync");

exports.getAll = (Model, isPagination = false) =>
  catchAsync(async (req, res, next) => {
    let feature = new ApiFeature(
      Model.find(),
      req.query,
      Model.countDocuments()
    )
      .filter()
      .sort()
      .limitFields("-__v ");

    let response = {};
    if (isPagination) {
      feature = feature.paginate();
      const totalPage = Math.ceil(
        (await feature.countDocument) / req.query.limit
      );
      response = { ...response, totalPage, page: req.query.page || 1 };
    }
    const docs = await feature.query;

    response = { ...response, docs };

    AppResponse(res, response);
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const doc = await Model.findById(id);

    AppResponse(res, doc);
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    AppResponse(res, doc);
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const update = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    AppResponse(res, update);
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);
    AppResponse(res, {});
  });
