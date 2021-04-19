const Bootcamp = require('../models/Bootcamp');

// @desc    Get all bootcamps
// @Route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find({});
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
  //res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamp
// @Route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }

  // res.status(200).json({ succes: true, msg: `Show bootcamp ${req.params.id}` });
};
// @desc    Create new bootcamps
// @Route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }

  // console.log(req.body);
  // res.status(200).json({ succes: true, msg: 'Create new bootcamp' });
};
// @desc    Update bootcamps
// @Route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) return res.status(200).json({ success: false });
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
  // res
  //   .status(200)
  //   .json({ succes: true, msg: `Update bootcamp ${req.params.id}` });
};
// @desc    Delete bootcamps
// @Route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) return res.status(400).json({ success: false });
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }

  // res
  //   .status(200)
  //   .json({ succes: true, msg: `Delete bootcamp ${req.params.id}` });
};
