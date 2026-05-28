# Recipe Filter & Cart System

https://namastedev.com/practice/filter-recipes

You are tasked with creating a simple recipe filter and cart system. You will be given a list of recipes (with information like name, rating, cuisine, and image), and you need to build a component that allows users to filter recipes by rating, view the average rating of the filtered recipes, and add recipes to a shopping cart.

---

# Requirements

## 1. Recipe Filter

You need to filter recipes based on a rating threshold. Users should be able to select a minimum rating from a dropdown (with the options: 4.0+, 4.3+, 4.5+, 4.7+, and 4.9+).

Only recipes with a rating greater than or equal to the selected rating should be displayed.

---

## 2. Cart System

Each recipe displayed should have an **"Add to Cart"** button. When clicked, the recipe should be added to the cart.

The cart should show the number of items added.

There is no need to show the cart details, only the count of items in the cart.

---

## 3. Average Rating Calculation

You need to calculate the average rating of the filtered recipes. The average should be displayed on the page.

If there are no recipes in the filtered list, show the average rating as `0.00`.

---

# Functional Requirements

## 1. Recipe Filter

- Provide a dropdown filter labeled **"Filter by Rating:"**
- The dropdown should include the following options:
  - 4.0+
  - 4.3+
  - 4.5+
  - 4.7+
  - 4.9+
- Only recipes with a rating greater than or equal to the selected rating should be displayed.

---

## 2. Cart System

- Each recipe should include a clearly labeled **"Add to Cart"** button.
- Clicking the button should add the recipe to a cart and update the item count.
- The total number of items in the cart should be displayed in the format:
  - `Cart Items: 0`
  - `Cart Items: 1`
  - etc.
- Cart details (like recipe names) do not need to be shown — only the count is required.

---

## 3. Average Rating

- The component should display the average rating of the currently filtered recipes.
- The average should be shown in two decimal places, e.g.:
  - `Average Rating: 4.87`
- If no recipes match the selected rating filter, display:
  - `Average Rating: 0.00`
