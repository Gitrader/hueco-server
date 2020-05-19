

# Hueco



## Description

Hueco allows users to book last minute appointments at discounted price to fill in businesses' empty time slots.

If you are a business owner you can optimize your empty time slots and make money out of it.

If you are a user, you can enjoy discounted prices from your favorite local businesses

## User Stories

- **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault

- **Signup:** As an anon business owner I can sign up using my personal info and business picture in the platform so that I can start showing my empty time slots 

- **Login:** As a business owner I can login to the platform so that I add or edit my available time slots

- **Logout:** As a business owner I can logout from the platform so no one else can use it

- **Add Available Time Slots** As a business owner I can add an available time

- **Edit Time Slots** As a business owner I can edit my time slots

- **Delete Time Slots** As a business owner I can delete my time slots

  

- **Select Available Businesses** As a user I can select businesses near me that offer appointments for the day

- **Prepay the appointment** As a user I can prepay the appointment I have selected

- **Download appointment confirmation** As a user I can download my QR code that I will present to my selected business 

  

## Backlog

User profile:

- Add fake payment processor
- Add search bar for businesses/discounts
- Download QR code



# Client / Frontend

## React Router Routes (React App)

| Path                                                         | Component           | Permissions                | Behavior                                                     |
| ------------------------------------------------------------ | ------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`                                                          | HomePage            | public                     | Home page displaying Navbar, SearchBar, Map, BusinessListCard components |
| `/signup`                                                    | SignupPage          | business owners anon only  | Signup form, link to login, navigate to dashboard after signup |
| `/login`                                                     | LoginPage           | business owners anon only  | Login form, link to signup, navigate to dashboard after login |
| `/logout`                                                    | n/a                 | known business owners only | Navigate to homepage after logout, expire session            |
| `/myhueco/:id`                                               | MyHuecoPage         | known business owners only | Shows all the huecos for the current business                |
| `/myhueco/add-hueco`                                         | AddHuecoPage        | known business owners only | Add hueco                                                    |
| `/myhueco/edit-hueco`                                        | EditHuecoPage       | known business owners only | Edit  hueco                                                  |
| `/myhueco/:id`                                               | n/a                 | known business owners only | Delete hueco                                                 |
| `/business-details/:id`                                      | BusinessDetailsPage | Public                     | Business description, select available timeslot              |
| `/business-details/:id/contact-information/:id`              | ContactInfoPage     | Public                     | Add contact info to proceed the booking                      |
| `/business-details/:id/contact-information/:id/payment`      | PaymentPage         | Public                     | Payment of the booking                                       |
| `/business-details/:id/contact-information/:id/payment/confirmation` | QRCodePage          | Public                     | Download your QR code                                        |

## Components

- HomePage

- Navbar

- SearchBar

- Map

- BusinessListCard

- Signup

- Login

- MyHuecoPage

- AddHuecoPage

- EditHuecoPage

- MyProfile

  

  

- BusinessDetailsPage

- ContactInfoPage

- PaymentPage

- QRCodePage

## Services

- Auth Service

  - auth.login(business owner)
  - auth.signup(business owner)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

- Business Service

  - business.getAll()
  - business.getOneById(id)
  - business.create()
  - Business.profile() //Backlog
  - myhueco.add(id)
  - myhueco.removeOneById(id) or delete
  - myhueco.updateOne(id) or put

- User Service

  - user.create()

    



# Server / Backend

## Models

Business model

```
{
  category: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  business_name:{type: String, required: true},
  address:{type: String, required: true},
  city:{type: String, required: true},
  zip_code:{type: Number, required: true},
  service:{type: String, required: true},
  phone:{type: Number, required: true},
  discount:{type: Number, required: true},
  availability:[],
  user_booking:[{type: Schema.Types.ObjectId,ref:'Booking'}]
  initial_price:{type: Number, required: true},
  discounted_price:{type: Number, required: true},
  image_url: {type: String, required: true},
  description:{type: String},
  coordinates:[coordinates]
  
}
```

User model

```
 {
   first_name: {type: String, required: true},
   last_name: {type: String, required:true},
   email: {type: String, required:true},
   booking:[{type: Schema.Types.ObjectId,ref:'Booking'}]
 }
```

CreditCard model

```
 {
   cardholder_name: {type: String, required: true},
   card_number: {type: Number},
   expiration_date: {type: Number},
   Cv_code:{type: Number}
 }
```

 

Booking model

```
 {
   business_id: [{type: Schema.Types.ObjectId,ref:'Business'}],
   user_id: [{type: Schema.Types.ObjectId,ref:'User'}],
   timeslot:[]
 }
```





## API Endpoints (backend routes)

| HTTP Method | URL                     | Request Body     | Success status | Error Status | Description                                                  |
| ----------- | ----------------------- | ---------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/myhueco`         | Saved session    | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`          | {...}            | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`           | {email,password} | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`          | (empty)          | 204            | 400          | Logs out the user                                            |
| GET         | `/`                     |                  |                | 400          | Show the homePage with all businesses                        |
| GET         | `/business-details/:id` | {id}             |                |              | Show specific business                                       |
| POST        | `/myhueco/add-hueco`    | {}               | 201            | 400          | Create and save a new hueco                                  |
| PUT         | `/myhueco/edit/:id`     | {...}            | 200            | 400          | edit hueco                                                   |
| DELETE      | `/myhueco/delete/:id`   | {id}             | 201            | 400          | delete hueco                                                 |
| POST        | `/contact-info`         |                  | 201            | 400          | Create and save a new user                                   |
| POST        | `/payment-information`  |                  | 201            | 400          | Create new payment information                               |
| GET         | `/Qrcode`               | {}               | 201            | 400          | show QR to download                                          |



## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/YMsNqbPt/hueco or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com/)

### Slides

The url to your presentation slides

[Slides Link]