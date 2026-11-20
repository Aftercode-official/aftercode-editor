const manifest = {
  "name": "Custom CSS",
  "description": "Customize the Aftercode website with your own CSS.",
  "tags": [
    "theme",
    "new"
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "CSS",
      "id": "css",
      "type": "string",
      "multiline": true,
      "default": ""
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": false
};
export default manifest;
