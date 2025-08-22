https://github.com/user-attachments/assets/b56c2e07-2383-4a9b-b747-1da6a5264a04


flowchart format (text)

[Start]
   |
   v
[User opens App.jsx]
   |
   v
[Redux Provider mounts -> store with calculatorSlice]
   |
   v
[Calculator component renders]
   |
   v
[User types num1, chooses operator, types num2]
   |
   v
[Click "Calculate"]
   |
   v
{Validate inputs?}
   |                         \
   | Yes                      \ No
   v                           v
[Compute result]            [Show error message]
   |                           |
   v                           |
[Build "a op b" string]        |
   |                           |
   v                           |
[dispatch addCalculation(expression, result)]
   |
   v
[Redux updates state.history]
   |
   v
[HistoryList re-renders with new item]
   |
   v
{User action on history item?}
   |              \
   | Edit          \ Delete
   v                v
[Enter edit mode]  [dispatch deleteCalculation(id)]
   |                |
   v                v
[Change fields]    [Item removed from list]
   |                |
   v                |
[Click Save]       |
   |                |
   v                |
[dispatch updateCalculation({id, expression, result})]
   |
   v
[HistoryList shows updated data]
   |
   v
[End / Repeat interactions]



Description

This project is a Calculator App built with React and Redux.

It allows users to perform basic operations like addition, subtraction, multiplication, and division.

Every calculation is saved into history using Redux state.

The history supports CRUD operations:

Create → Add new calculation

Read → View all past results

Update → Edit previous calculations

Delete → Remove unwanted entries

The UI is designed with a colorful calculator box and a history box to keep track of all operations.

This makes it both a functional calculator and a practice project for Redux state management with CRUD features.
