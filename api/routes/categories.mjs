import Category from '../models/category.mjs';
import express from 'express';
import mongoose from 'mongoose';
import _ from 'lodash';

const categoryRouter = express.Router();

//api/category
// req: name, image, descripton
// CREATE ONE
categoryRouter.post('/create', async (req, res, next) => {
  const doesExist = await Category.findOne({ name: req.body.name })
  console.log(doesExist)
  if(doesExist) return res.status(403).send('Category already exists')

  let category = new Category(_.assign(_.pick(req.body,
  ['name', 'image', 'description', 'admin']), {_id: new mongoose.Types.ObjectId() }))
  console.log(category);

  category.save();
  res.send(category)

})

// FIND ALL
categoryRouter.get('/all', async(req, res, next) => {
  const allCategories = await Category.find({});
  if(!allCategories) return res.status(201).send('No categories were found.')
  console.log(allCategories);

  return res.send(allCategories)

})

// FIND ONE
categoryRouter.get('/:name', async (req, res, next) => {
  const category = await Category.find({ name: req.params.name });
  if (!category) return res.status(404).send('Category does not exist.')
  return res.send(category)
})


// Change One 
// Can edit name, image, description, admin
categoryRouter.put('/edit', async (req, res, next) => await Category
  .findOne({
    name: req.body.original_name
  }).then(ele => {
    if (!ele) return res.status(404).send('category not found');
      console.log(ele)
    _.assign(ele, {
      name: req.body.new_name,
      image: req.body.image,
      description: req.body.description,
      admin: req.body.admin
    })
    ele.save();
    res.send(ele);
  })
) 


// Delete
categoryRouter.delete('/delete', async (req, res) => 
  res.send(await Category.deleteOne({ name: req.body.name }, {})
))

export default categoryRouter;
