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
