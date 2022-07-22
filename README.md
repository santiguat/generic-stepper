# LitElement TypeScript starter 

This project developed with LitElement, exportable to any app that uses JS.

## Install & build

- Install dependencies
```bash
npm i
```

- Create the bundle
```bash
npm run build:dev
```

## How to use it

- Import the bundle in any app that uses JS. Example adding it to index.html:
```bash
  <script type="module" src="path-to-bundle"></script>
  ...
  <generic-stepper>
        <template
          >{"title":"Generic Stepper", "fields": [ { "label": "Name", "value": "" }, { "label": "Age", "value": "" } ], "buttons": [{"label": "Confirm", "value": "submit"}]}</template>
  </generic-stepper>
```

