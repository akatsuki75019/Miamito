
# Miamito
Miamito is a recipe website that focuses on providing users with a meal planner and the ability to create shopping lists based on selected recipes.
## Features
- Recipe Search: Utilize the search bar to find specific recipes.

- Meal Planner: Plan one meal per day for the entire week.

- Add to Shopping List: Add ingredients from selected recipes to the shopping list feature.

- Blog Articles: Read and explore various blog articles related to cooking and nutrition.

- Post Blog Articles: Users can contribute by posting their own blog articles.

- User Account Authentication: Users can create accounts and log in to access personalized features.

- Dark Theme: The website offers a visually appealing dark theme for comfortable browsing.



## Technologies
- Frontend: Built with Vite + React JS and the Shadcn library (which uses Radix), hosted on Vercel.

- Backend: Utilizes a Ruby on Rails API, hosted on Heroku.

- Database: PostgreSQL is used with Axios for data management.

- API : Miamito integrates with the Spoonacular API to retrieve comprehensive information about recipes, ingredients, images, and instructions. 

## Installation

Clone the repository.
Navigate to /server directory in one terminal and /client directory in another terminal

### External APIs



### Backend Setup:
- Run 
```bash
  cd Miamito/server
  bundle install
```
- Generate a secret key by running ```rails secret``` and copy the key.

- Open the credentials file by running ```EDITOR=nano rails credentials:edit``` in the terminal.

- Add the following line:
```bash 
devise:
  jwt_secret_key: [your secret key] // ⚠ 2 space in the beginning
```

- Run 
```bash 
rails db:create
rails db:migrate
rails db:preload_recipes
rails db:preload_ingredients
```
Start the server with ```rails server``` (running in ```http://localhost:3000```)


### Frontend Setup:
Run 
```bash
  cd Miamito/client
  pnpm install
```

Start the server with ```pnpm run dev``` (running in ```http://localhost:5173```)
    
## Environment Variables

To run this project, you will need to add the following environment variables in ```/client/src/constant.js```

`API_KEY = "spoonacularAPI key"`



## Authors

- [@Bubble](https://github.com/AxelCourtois)
- [@Sam](https://github.com/Samalzdh)


## Usage
To get started with Miamito, simply follow the installation instructions and explore the various features offered. Happy cooking! 🍳🥗🍲

