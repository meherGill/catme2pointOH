# Algorithms

## Deciding between balanced and best fit:

Example: FIT2100 needs 2 skills, Programming and Teamwork. There are 25 students in Lab 1, and there needs to be 2-3 members per team. There are 6 students with both skills, 10 students with Programming skills and 7 students with Teamwork skills.

In this case, 2 students don't have relevant skills, so if we go with best fit, we'd have 1 student with both skills matched up with these 2, and the rest be matched up however.

If we decide to go with a balanced approach, each of these students would be paired up with two students with both skills.

Pseudocode:
1. Determine no. of teams needed to be made.
2. Is total skill coverage possible? If true - Best fit. If false - Balanced
3. Is it a first year class with very few skilled people? Aim for balanced.
4. Is balanced not giving good results? Go for random/manual.
