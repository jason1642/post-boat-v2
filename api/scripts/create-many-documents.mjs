import fs from 'fs'
import mongoose from 'mongoose'
import {randomCategory,randomColors,randomDescriptions,randomImages,randomNames,randomTitles, usersIds} from '../sample-data.mjs'
// json data
import Post from '../models/post.mjs';
var jsonData = '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
 


const documentsArray = []

usersIds.forEach(ele => {
  const newPostId = new mongoose.Types.ObjectId()

  documentsArray.push(new Post({
    _id: newPostId,
     category: randomCategory[Math.floor(Math.random() * randomCategory.length)],
    author: {
      user_id: ele._id,
      username: ele.username,
      profile_image:'testimage.jpg'
    },
    title: randomTitles[Math.floor(Math.random() * randomTitles.length)],
    text: randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)],
   
    images: [randomImages[Math.floor(Math.random() * randomImages.length)]]
    }))
})






// parse json
var jsonObj = JSON.parse(`{"sample_data" :${JSON.stringify(documentsArray)}}`);
console.log(jsonObj);
 
// stringify JSON Object
var jsonContent = JSON.stringify(documentsArray);
console.log(jsonContent);
 
fs.writeFile("sample-data.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

