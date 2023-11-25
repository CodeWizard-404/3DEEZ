# 3DEEZ Online Store Web Application

Welcome to the 3DEEZ Online Store web application repository! This project is designed to showcase a web application for an online store specializing in 3D printed items. The application consists of two parts: Back Office for administrators and Front Office for customers and visitors.

## Features

### Back Office (Administrator's Dashboard)

1. **Product Management:**
   - CRUD operations for managing products.
   - Search functionality for products.
   - Product details include a unique numeric identifier, title, photo, numeric field, boolean field, date field, and an array of objects field.

2. **User Authentication:**
   - Secure authentication system for administrators.
   - Password change option for added security.

3. **Additional Functionality:**
   - Implement your chosen additional functionality to enhance the Back Office experience.

### Front Office (Customer Interface)

1. **Product Display:**
   - View all products with limited fields (e.g., title, photo, category).
   - Detailed product view for in-depth information.

2. **Product Search:**
   - Search for products based on criteria.

3. **Promotional Information:**
   - Access promotional information from a chosen free API.

4. **Static Home Page:**
   - Access a static Home page with information about the site.

5. **Additional Functionality:**
   - Implement your chosen additional functionality to enhance the Front Office experience.

## Functional Requirements

### Back Office Management

- **CRUD Operations:** Implement CRUD operations for managing products.
- **Product Search:** Enable search functionality for products.
- **User Authentication:** Secure authentication system for administrators.
- **Password Change:** Implement a password change option for administrators.
- **Additional Functionality:** Implement an additional chosen functionality.

### Front Office Management

- **Product Display:** Showcase products with limited fields.
- **Detailed Product View:** Provide detailed information about a selected product.
- **Product Search:** Enable product search based on criteria.
- **Promotional Information:** Access promotional information from a chosen API.
- **Static Home Page:** Design a static Home page with site information.
- **Additional Functionality:** Implement an additional chosen functionality.

## Technical Requirements

1. **TypeScript Classes:**
   - Define TypeScript classes for products and other necessary entities.

2. **Business Logic Services:**
   - Implement one or more services for business logic.

3. **Component Structure:**
   - Organize product lists in a parent component with each product represented in a child component.

4. **Pipes:**
   - Use one or more pipes, including at least one custom pipe.

5. **ngClass Directive:**
   - Implement the ngClass directive for dynamic styling.

6. **Client Navigation Menus:**
   - Design navigation menus for both front and back offices.

7. **Routing:**
   - Implement different routes for product display and details in the front office.
   - Use child routes for improved organization.

8. **Route Guards:**
   - Implement guards for route security.

9. **Reactive Forms:**
   - Use reactive forms for improved form handling.

10. **Styling Frameworks:**
    - Utilize or combine styling frameworks such as Bootstrap, Angular Material, or Materialize CSS.

11. **JSON Server:**
    - Access a JSON server with data stored in one or more JSON files.

12. **Deployment:**
    - Deploy the application on Surge.sh or an equivalent platform.

## Bonus Features

The application may receive additional points for:

- **Firebase Integration and Deployment:**
  - Integrate with Firebase and deploy the application.

- **Backend Integration:**
  - Integrate with a chosen backend (Node.js, Spring Boot, etc.).

- **Advanced Angular Concepts:**
  - Use advanced Angular concepts such as modules and lazy-loading.

- **Angular Material:**
  - Use Angular Material as a styling framework.

Feel free to explore and enhance the application further to meet these bonus criteria.

## Getting Started

To get started with the 3DEEZ Online Store web application, follow the steps below:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies:**
   ```bash
   cd 3deez
   npm install
   ```

3. **Run the Application:**
   ```bash
   ng serve
   ```

   Open your browser and navigate to `http://localhost:4200/` to view the application.

4. **Explore and Customize:**
   - Explore the codebase and customize the application to meet your specific requirements.
   - Implement additional features and functionalities as needed.

**JSON Server Setup:**

To simulate a backend, the application uses JSON Server. Here's how to start it:

1. **Install JSON Server:**
   ```bash
   npm install -g json-server
   ```

2. **Create a JSON Data File:**
   Create a `db.json` file in the project root with sample data.

3. **Start JSON Server:**
   ```bash
   json-server --watch db.json
   ```

   Access the JSON Server API at `http://localhost:3000/`.

## Contributors

- [Laghouanem Sofien]


## License

This project is licensed under the [ISET](LICENSE).



Happy coding! 🚀
