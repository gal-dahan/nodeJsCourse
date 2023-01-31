// firstname: 'Gal',lastname:'Dahan',email:'963gal963@gmail.com' ,id: '207232349'
// firstname: 'omri ',lastname:'rachmani',id:'206924672'

const Cost = require('../model/costModel');

const getAbout=(req,res)=>{
    res.status(200).json([{firstname: 'Gal',lastname:'Dahan',email:'963gal963@gmail.com' ,id: '207232349'},
    {firstname: 'omri ',lastname:'rachmani',id:'206924672'}])
}

const setCost = async (req, res) => {
  const cost = await new  Cost({
    user_id: req.body.user_id,
    year: req.body.year,
    month: req.body.month,
    day: req.body.day,
    description: req.body.description,
    category: req.body.category,
    sum: req.body.sum,
  });
  try {
    await cost.save();

  res.status(201).json(cost);
    console.log(cost);
} catch (e) {
  console.log(e);
  res.status(500).send(e);
}

};

const getReport = async (req, res) => {
  const { user_id, month, year } = req.query;
  const costs = await Cost.find({
    user_id,
    month,
    year
  });
  console.log("costs:"+costs);
  console.log(month+"."+year);
  const report = {};
  costs.forEach(cost => {
    if (!report[cost.category]) {
      report[cost.category] = [];
    }
    report[cost.category].push({
      day: cost.day,
      description: cost.description,
      sum: cost.sum
    });
  });
  res.status(200).json(report);
};


//const initUsers = async () => {
////this function once at the start of your application, for example in your server.js file, 
////to ensure that the users collection is initialized with the example user's data.
//
//  const userId = await Cost.findOne({id: 123123  });
//  if (userId ) {
//    const user = new User({
//        id: 123123,
//        first_name: 'moshe',
//        last_name: 'israeli',
//        birthday: new Date('January 10, 1990')
//    });
//    try {
//
//      await user.save();
//        console.log(user);
//  } catch (e) {
//    console.log(e);
//  }
//  }else {
//    console.log(`***** example user is already in the data  id  . if you see this to ensure that the users collection is initialized with the example user's data *****`);
//
//    }
//  }
module.exports={
    getAbout,
    setCost,
    getReport,
    //initUsers
}