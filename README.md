# PollingSytemAPI (Open-Access API for Question Management)

This README file outlines the details of an open-access API designed for easy management of questions and options, with a focus on promoting user engagement. The API allows users to create questions, add options to those questions, cast votes on options, and access detailed question information.

Key Features
Question Creation: Users can create new questions through a dedicated endpoint.
Option Addition: Once a question is created, users can add multiple options to it.
Voting: Users have the ability to cast votes on the options provided for each question.
Detailed Information: Detailed question information, including options and votes, is accessible to users.
Accessibility: The API promotes accessibility by providing intuitive endpoints for managing questions and options.
Endpoints
Question Creation:

Endpoint: POST /questions/create
Description: This endpoint allows users to create a new question.
Example Usage: http://localhost:8005/questions/create
Option Addition:

Endpoint: POST /questions/:id/options/create
Description: Users can add options to a specific question identified by its ID.
Example Usage: http://localhost:8005/123/options/create
Voting:

Endpoint: POST /options/:id/add_vote
Description: Users can cast a vote on a specific option identified by its ID.
Example Usage: http://localhost:8005/options/456/add_vote
Display All Data:

Endpoint: GET /allquestions
Description: This endpoint provides access to all question data including options and votes.
Example Usage: http://localhost:8005/allquestions
Delete Options:

Endpoint: DELETE /options/:id/delete
Description: Users can delete a specific option identified by its ID.
Example Usage: http://localhost:8005/options/789/delete
Delete Question:

Endpoint: DELETE /questions/:id/delete
Description: Users can delete a specific question identified by its ID.
Example Usage: http://localhost:8005/questions/123/delete
Usage
Ensure the API server is running and accessible via localhost:8005.
Use the provided endpoints to interact with the API for question management.
Authenticate users if necessary to ensure secure access to the endpoints.
Additional Notes
This API is designed to provide a seamless and intuitive user experience for managing questions and options.
Error handling and validation should be implemented to ensure data integrity and security.
Consider implementing authentication and authorization mechanisms to control access to sensitive endpoints.
Feel free to extend or modify this API according to your specific requirements and use cases. If you have any questions or encounter issues, refer to the documentation or reach out to the development team for support.


