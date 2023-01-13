To open the project:

- Clone the respository.
- After opening it in the code editor run:
  - npm install
  - npm run dev
- Go to your favorite browser and search localhost:3000, where the Next.js applciation will be displayed.

To create and run next js applications with a typescript template:

- npx create-next-app@latest --ts app-name

To create and run Next.js applciation with typescript template and tailwind:

- npx create-next-app -e with-tailwindcss
  app-name
  \*\* It would be nice to run all tailwind application with a storybook setup.

Application Setup:

- `public` folder is the most important one. Everything created in there will be transformed on a route to navigate through the application pages. (e.x: localhost:3000/favicon.ico). This is a major benefit because there is no need to create routing navigation which makes it easier to develop and avoids extra repeated code.

- `styles` folder holds all the application styles. The naming convetion to import different styling sheets for each component should be represented as follows: `AComponentName.module.css`, where `module.css` is key to know the styling sheet throughout the entire application.

- `components` folder holds all the applcation components that do not need any routing.
