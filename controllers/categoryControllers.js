const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    req.flash ("success",`kategori başarılı şekilde eklenmiştir`);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {    
    await Category.findByIdAndRemove(req.params.id)
    req.flash ("error",`kategori başarılı şekilde silinmiştir`);
    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

