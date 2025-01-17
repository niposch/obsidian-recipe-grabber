/* -------------------------------- COMMANDS -------------------------------- */

export const CMD_OPEN_MODAL = "cmd-open-modal";
export const CMD_INSERT_RECIPE = "cmd-insert-recipe";

/* ---------------------------- DEFAULT TEMPLATE ---------------------------- */

export const DEFAULT_TEMPLATE = `---
tags: recipe 
created: {{datePublished}}
author: {{author.name}}
url: {{url}} 
---

# [{{name}}]({{url}})

{{description}}

![{{name}}]({{image}})

### Ingredients

{{#each recipeIngredient}}
- {{this}}
{{/each}}

### Instructions

{{#each recipeInstructions}}
- {{this.text}}
{{/each}}

-----

## Notes
`;
