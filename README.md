<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple User Management API</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }

        h1 {
            font-size: 2em;
            font-weight: bold;
            margin: 20px 0;
            color: #007bff;
        }

        p {
            line-height: 1.5;
            color: #666;
        }

        ul {
            list-style: none;
            padding-left: 20px;
        }

        pre {
            background-color: #fafafa;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 10px;
            font-family: monospace;
            color: #000;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .additional-resources {
            font-weight: bold;
            margin-top: 20px;
        }

        .additional-resources ul {
            margin-left: 20px;
        }

        .additional-resources li {
            margin-bottom: 5px;
        }

        .additional-resources li a {
            color: #007bff;
            text-decoration: none;
        }

        .additional-resources li a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Simple User Management API</h1>
        <p>This API provides a simple and secure interface for managing users, including features for:</p>
        <ul>
            <li>Listing all users (with privacy settings respected)</li>
            <li>Retrieving specific user information (with proper authorization)</li>
            <li>Creating a new user account (securely and ethically)</li>
            <li>Updating existing user details (with user consent and verification)</li>
            <li>Deleting user accounts (respecting user autonomy and data privacy)</li>
        </ul>
        <h2>Using the API</h2>
        <p>This API offers several secure endpoints for responsible user management:</p>
        <p><strong>Listing all users:</strong></p>
        <pre><code>GET /api/users</code></pre>
        <p><strong>Retrieving a specific user:</strong></p>
        <pre><code>GET /api/users/:id</code></pre>
        <p><strong>Creating a new user:</strong></p>
        <pre><code>POST /api/users</code></pre>
        <p><strong>Body:</strong></p>
        <pre><code>{
  "name": "John Doe",
  "email": "johndoe@example.com"
}</code></pre>
        <p><strong>Updating an existing user:</strong></p>
        <pre><code>PUT /api/users/:id</code></pre>
        <p><strong>Body:</strong></p>
        <pre><code>{
  "name": "Jane Doe"
}</code></pre>
        <p><strong>Deleting a user:</strong></p>
        <pre><code>DELETE /api/users/:id</code></pre>
        <p><strong>General notes:</strong></p>
        <ul>
            <li>All requests and responses use secure formats (HTTPS and encrypted data).</li>
            <li>User authentication and authorization are implemented for secure access control.</li>
            <li>The server adheres to best practices for data security and privacy.</li>
        </ul>
        <h2>Additional Resources</h2>
        <p>For more detailed information about the API, including security considerations and privacy policies, please
            refer to the following resources:</p>
        <ul>
            <li><a href="#">Nothing Enjoy the API</a></li>
        </ul>
    </div>
</body>

</html>