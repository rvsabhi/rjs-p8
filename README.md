# React Practical - 8

## Title
Create a Recipe Card using React Components

## Aim
To create a React component that displays recipe information using JSX.

## Problem Statement

Create a React application that displays **three recipe cards** as shown in the sample output.

Each recipe card should contain:

- Recipe Title
- Ingredients (unordered list)
- Description

The three recipes to be displayed are:

1. Chicken Noodles Soup
2. Curried Egg Salad
3. Oat Cluster
## Please check the output.png file attached for the final output to be look alike.
## Learning Outcome

After completing this practical, students will be able to:

- Create React function components.
- Use JSX syntax.
- Render HTML elements using React.
- Apply `className` in JSX.
- Render a React component using `ReactDOM.createRoot()`.

## Instructions

- Do **not** modify the `index.html` file.
- Write your solution only in **index.js**.
- Create a function component named **Recipe**.
- The component should display **three recipe cards**.
- Each card must include:
  - Heading (`<h1>`)
  - Ingredients (`<ul>` with `<li>`)
  - Description (`<p>`)
- Render the component using:

```jsx
root.render(<Recipe />);
```

## Expected Output

The application should display three recipe cards similar to the following:

- Chicken Noodles Soup
- Curried Egg Salad
- Oat Cluster

Each card should contain the recipe title, ingredients list, and description.

## Files Provided

```
.
├── index.html
├── index.js
├── package.json
├── tests
│   ├── test.js
│   └── test.sh
└── .github
    └── workflows
        └── autograding.yml
```

## Evaluation Criteria

| Criteria | Marks |
|----------|------:|
| Recipe component created | 2 |
| Three recipe cards created | 2 |
| Recipe titles displayed | 2 |
| Ingredients displayed using unordered lists | 2 |
| Component rendered successfully | 2 |
| **Total** | **10** |

## Submission Guidelines

1. Complete the program in **index.js**.
2. Commit your changes.
3. Push the repository to GitHub.
4. GitHub Actions will automatically evaluate your submission.

**Best of Luck!**
