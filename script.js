	const express = require('express');
	const bodyParser = require('body-parser');
	const bcrypt=require('bcrypt-nodejs');
	const cors=require('cors')

	const app = express();

	app.use(bodyParser.json());
	app.use(cors());

	const database = { 
	  users:[
			    {    id:123,
			      	name:'tanisha',
			      	email:'tanisha@gmail',
			      	password:'tanisha',
			      	entries:0,
			      	joines:new Date()
			   },
			   {
			       id:124,
			      	name:'sooraj', 
			      	email:'sooraj@gmail',
			      	password:'apples',
			      	entries:0,
			      	joines:new Date()
			   },
			   { 
			      	id:125,
			      	name:'waquas',
			      	email:'waquas@gmail',
			      	password:'baa',     
			      	entries:0,
			      	joines:new Date()
			    }
	    ],
	    login: [
	    {
	    	id:798,
	    	hash:'',
	    	email:'tanisha@gmail'
	    }
	    ]
	}

	app.get('/',(req,res)=>{
	       res.json(database.users)
	});

	app.post('/signin',(req , res) => { 
	   if(req.body.email === database.users[0].email && 
	   		req.body.password === database.users[0].password){ 
	        res.json('signed in');
	    } else {
	   		 res.json('sorry wrong entries');
	       }
	})

	app.post('/register' , (req,res) =>{
		const {name, password, email} = req.body;
		//bcrypt.hash(password, null, null, function(err, hash) {
	     //console.log(hash);
	//});
		database.users.push({
			        id:126,
			      	name:name,
			      	email:email,
			      	password:password,     
			      	entries:0,
			      	joines:new Date()},
		res.json(database.user.length-1));
	})

	app.get('/profile/:id', (req,res)=>{
		const{id}=req.params;
		const found=false;
		database.users.forEach(user=>{
			if(users.id === id)
			{
				found=true;
				return res.json({user}) ;
			}})
		if (!found)
		{
			res.json('no such user sorry!');
		}
	})

	app.post('/image',(req,res)=>{
	   const{id}=req.body;
		const found=false;
		database.users.forEach(user=>{
			if(users.id === id)
			{
				found=true;
				user.entries++;
				return res.josn(user.entries) ;
			}})
		if (!found)
		{
			res.json('no such user sorry!');
		}
	});
	 app.listen(3000)                                                               