## Next.js & Tailwind CSS

### Author:

**Noor Alkhateeb**

### Login Credentials:

 - Username: admin

 - Password: admin

![](/public/assets/loginpage.png)
![](/public/assets/homepage.png)

__________________________________
**Notes from the lectures:**

* To automatically create a new Next.js project using the app directory:

**Terminal**
```npx create-next-app@latest --experimental-app```

First, run the development server:

```npm run dev```

[Installing Tailwind](https://beta.nextjs.org/docs/styling/tailwind-css)


```npm install -D tailwindcss postcss autoprefixer```
```npx tailwindcss init -p```

* I use context API regardling the **Authentication** using NextJS

* **Authentication** : a procces that **verify the Identity** of user on a service 
  
  -> I can verify the Identify of the user in login process

* **Autherization** : a process that **determine the user access right** after login process, right how deep can the user go on the application.

* in frontend and backend -> draw **WRRC** _Web Request Response Cycle_ 

* in WRRC : 
  
  - Client side : Next.JS App
  - Server side : django or NodeJS
  - DataBase 

* the server should reply to the client a respone that contain somthing call **Tokens** 

* ecah token related to specific user 

* the TOKEN is apiece of information that verify the identity of the user.

* Token Types : 
 1. Access Token
 2. Refresh Token 

* GET: fetch data
* POST: add new data -> check data from database
* PUT: update data
* DELETE: delete data

* when send a secure data we sould use **POST** method

* the **post method** put the data inside the packet body but the get put it inside the header and any one can see the header and fetch the data, but the body is secure.

* So, don't use get method to attach any critical data.


--------------------

![](/public/assets/p1.png)
