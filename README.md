# Rich Documentation Editor (Camunda Modeler Plugin)

A Camunda Modeler plugin that opens a rich text editor when you click on an element's Documentation property in the Camunda Modeler. It helps modelers write and maintain well-formatted documentation directly within BPMN diagrams.

## Features
- Rich text editing for the BPMN Documentation property (powered by Quill)
- Seamless integration into Camunda Modeler
- Improves readability and consistency of element documentation

## Compatibility
- Camunda Modeler: 5.x
- Platform: macOS, Windows, Linux (where Camunda Modeler runs)

Note: If you encounter issues with other Modeler versions, please open an issue or a PR with details.

## Install (End Users)
1. Download the distribution zip (camunda-modeler-plugin-rich-documentation-editor.zip). If you don't have it, you can create it locally, see "Create Distro" below.
2. Unzip it into your Camunda Modeler plugins directory:
   - macOS: ~/Library/Application Support/camunda-modeler/resources/plugins/
   - Windows: %APPDATA%/camunda-modeler/resources/plugins/
   - Linux: ~/.config/camunda-modeler/resources/plugins/
3. Ensure the resulting folder contains index.js, dist/, style/ (no extra nesting).
4. Start or restart Camunda Modeler.

After installation, click on an element in your diagram, select the Documentation property, and the rich editor will appear.

## Usage
- Select any BPMN element.
- Open the Properties Panel and click into the Documentation field.
- Use the toolbar to format text (bold, italic, lists, links, etc.).
- Changes are saved with the diagram like regular documentation.

## Development (Local)
### Prerequisites
- Node.js 18+ and npm
- Camunda Modeler 5.x installed for testing

### Setup
```shell
npm install
```

### Dev Mode (watch)
```shell
npm run dev
```
This watches sources and rebuilds on changes. Reload or restart Camunda Modeler to see updates.

### Build
```shell
npm run bundle
```
Prepares the plugin for distribution by generating production assets into the dist folder.

### Create Distro (zip for easy install)
```shell
npm run distro
```
Creates camunda-modeler-plugin-rich-documentation-editor.zip in the project root. Unzip into your Camunda Modeler plugins directory as described above.

## Troubleshooting
- Plugin not loading: Verify the folder structure under resources/plugins does not contain an extra nested directory level after unzipping.
- Modeler version mismatch: This plugin targets Camunda Modeler 5.x. Upgrade your Modeler if you see compatibility errors.
- Still stuck? Please open an issue with your OS, Modeler version, and console logs.

## Contributing
Contributions are welcome! For small changes, submit a PR. For larger changes, please open an issue to discuss the approach first.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Built with camunda-modeler-plugin-helpers and Quill.
