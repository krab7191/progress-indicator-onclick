# ProgressStep component onClick prop

This is a POC to show that there is a bug with the onClick prop of the ProgressStep component. Defining the prop and clicking a step does nothing. As noted in the documentation [here](https://react.carbondesignsystem.com/?path=/docs/components-progressindicator--default) focusing a step and hitting the enter key should also trigger the onClick prop, but results in "Uncaught TypeError: onClick is not a function"
