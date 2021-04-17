// @desc    Get all bootcamps
// @Route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Show all bootcamps' });
};

// @desc    Get single bootcamps
// @Route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: `Show bootcamp ${req.params.id}` });
};
// @desc    Create new bootcamps
// @Route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ succes: true, msg: 'Create new bootcamp' });
};
// @desc    Update bootcamps
// @Route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Update bootcamp ${req.params.id}` });
};
// @desc    Delete bootcamps
// @Route   DELETE /api/v1/bootcamps/:id
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succes: true, msg: `Delete bootcamp ${req.params.id}` });
};
