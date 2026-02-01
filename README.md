# BoostTask

This is a modern Angular project for managing users, products, and tasks.

## Roles & Access

| Role    | Pages / Sections Visible                      
|---------|----------------------------------------------
| **Admin**   | Users list, User details
| **Instructor** | posts list
| **Manager** | Todos list
| **User**    | products list, product details 

## APIs

### Users API
- `GET /users` → List of all users (**Admin only**)
- `GET /users/:id` → Details of a user (**Admin only**)

### Products API
- `GET /products` → List all products (**user only**)
- `GET /products/:id` → Product details (**user only**)

### Posts API
- `GET /posts` → List all post (**Instructor only**)

### Todos API
- `GET /todos` → List of all tasks (**Manager**)

> Note: Access to each endpoint is role-based.

## Running the Project

1- Install dependencies:
npm install

2- run server:
ng serve


## UI Features

1- Skeleton Loading for tables, cards, and details
2- Role-based Components (show/hide sections)
3- Hover Effects (shadow, smooth transitions)
4- Responsive Grid Layouts (1-3 columns)
5- Star Rating for products
6- Dynamic Status Badges for Todos

## Additional Notes

1- Angular CLI version: 21.0.5
2- Import CommonModule in feature modules for *ngIf and *ngFor
3- Skeletons provided via primeng/skeleton module
4- 404 pages handled with a dedicated component