# PollingSytemAPI
replace localhost:8005 with web address

//for creating questions
http://localhost:8005/questions/create 
//for creating options
http://localhost:8005/:id/options/create  
//for adding a vote on options
http://localhost:8005/options/:id/add_vote
//display all data
http://localhost:8005/allquestions
//delete options
http://localhost:8005/options/2/delete
//delete question
http://localhost:8005/questions/:id/delete


