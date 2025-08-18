# camunda-modeler-plugin-rich-documentation-editor

Opens up a rich text editor when clicking on a documentation property in the Camunda Modeler.This will help designers to document their BPMN elements in a more user friendly way.

## Dev Mode

```shell
npm run dev
```

This will monitor changes to your code and compiles on the fly. Refreshing or restarting your Camunda Modeler should show results.

## Build

```shell
npm run bundle
```

This will prepare your code for distribution by putting all the neccessary stuff in the `dist` folder.

## Create Distro

```shell
npm run distro
```

This will create a zip-file that can be unpacked in the Camunda resources/plugin folder of your computer.

This zip-file is also part of this repository, so you don't need to build this plugin yourself.
