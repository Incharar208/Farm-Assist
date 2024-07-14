# FARM-ASSIST

Welcome to our innovative farming assistance webpage, designed to empower farmers with the latest technological advancements for improved agricultural practices. Our platform offers a comprehensive suite of features aimed at enhancing productivity and ensuring sustainable farming through precise weather predictions, crop recommendations, disease diagnostics, and yield forecasts. 

Our **weather prediction** feature is meticulously crafted to provide farmers with accurate weather forecasts for the next five days. By utilizing advanced algorithms and real-time data, our system predicts weather conditions and delivers timely updates based on the pincode of the user's location. Moreover, the system automatically detects the device's location, ensuring that farmers receive hyper-local weather information essential for planning their agricultural activities.

The **crop prediction** functionality leverages soil analysis to recommend the best crops for a given area. By assessing the NPK (Nitrogen, Phosphorus, and Potassium) values of the soil, our platform provides farmers with a curated list of suitable crops, considering the specific nutritional needs of different plants. Additionally, our system takes into account the previously grown crops in the area, ensuring crop rotation and soil health by excluding those crops from the new recommendations.

Our **crop disease prediction** feature utilizes cutting-edge machine learning models to diagnose crop diseases accurately. Farmers can upload images of their crops taken with their devices, and our system analyzes these images to detect any signs of disease. This quick and reliable diagnostic tool helps farmers take prompt and appropriate measures to protect their crops, thereby minimizing losses and ensuring healthy produce.

For predicting crop yields, our **crop yield prediction** feature combines soil nutrient values and land area data to provide farmers with realistic yield forecasts. By integrating advanced ML models trained on extensive real-time data, our platform offers precise yield estimates that help farmers plan their harvests and manage their resources effectively.

The front end of our farming assistance webpage is developed using React with TypeScript, offering a seamless and responsive user experience. The intuitive interface ensures that farmers can easily navigate through the various features and access the information they need. On the backend, our platform harnesses the power of machine learning models, hosted and managed through Flask, to deliver accurate predictions and analyses.

In essence, our farming assistance webpage is a one-stop solution for modern farmers, providing them with the tools and insights needed to optimize their farming practices, enhance crop production, and ensure sustainable agricultural growth.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# How to run backend code:
python .\app.py
