## Mazy's Bug Tracker

This is a simple tool for raising a bug, giving it specific status and priority, specifiying the exact date that the bug was created, editing the bug.

Some features include Paginated data on the table, Filtering based on priority and status and returning a paginated result on the table, creating a new ticket, Ability to edit, create tickets only by authenticated users, Ability to delete tickets only by authorized(admin) user, hidden Navbar element and component for non-authenticated user, user being redirected to homepage after registering without the need to login right after.


## Tech stack used :

1. Node.js(Express) for back-end
2. React.js for front-end
3. MongoDB (NoSQL)
4. Axios HTTP framework for connecting the endpoints to the front-end




### Reusability for front-end :

Various reusable components were implemented on this project including Pagination, Table(3 different reusable parts), Select (drop down menu), Form (various render options including input, drop down menu, button within the reusable form component included.), Protected Route(Can be used for Routes that require authentication)


## Authentication and Authorization :
- After registering a user certain actions such as editing the existing tickets, creating a new ticket and visibility of add a bug on navbar will be available for authenticated users.
- After logging in with username: admin@yahoo.com , password: 12345, The Admin user will only be authorized to delete each ticket from the table.



### Colaborator

Muzyar Rad aka. Mazy

### Setup Instructions

1. Install client dependencies
 - on the project folder `cd` to `bug_tracker_client`
 - `npm install` or `npm i`
2. Install server dependencies
 - `cd` to `/`
 - `npm install` or `npm i`
3. Run the project
 - `cd` to `/`
 - npm run dev
4. Open a browser and navigate to `localhost:3000`


## Need Help?
Feel free to email me at **Muzyar.rad@gmail.com** for any inquiries or setup assistance
    

