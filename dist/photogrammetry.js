// Name: TurboWarp-Photogrammetry
// ID: kubohiroyaphotogrammetry
// Description: Initial scaffold for photogrammetry.
// By: Hiroya Kubo
// License: MPL-2.0

(function (Scratch) {
  'use strict';

//#region src/config.ts
var extensionConfig = {
	id: "kubohiroyaphotogrammetry",
	slug: "photogrammetry",
	name: "TurboWarp-Photogrammetry",
	description: "Initial scaffold for photogrammetry.",
	author: "Hiroya Kubo",
	license: "MPL-2.0",
	unsandboxed: false,
	docsURI: "https://kubohiroya.github.io/turbowarp-photogrammetry/",
	blockIconURI: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OCA0OCI+PHBhdGggZD0iTTI0IDEzbDEwIDZ2MTJsLTEwIDYtMTAtNlYxOXoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRDOTdGRiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMyAxN2w4IDYtOCA2eiIgZmlsbD0iIzU5QzA1OSIvPjxwYXRoIGQ9Ik00NSAxN2wtOCA2IDggNnoiIGZpbGw9IiM1OUMwNTkiLz48L3N2Zz4="
};
var block_definitions_default = {
	extensionName: "TurboWarp-Photogrammetry",
	blocks: [{
		"opcode": "hello",
		"blockType": "REPORTER",
		"text": "hello [NAME]",
		"description": "Returns a localized greeting for the supplied name.",
		"arguments": { "NAME": {
			"type": "STRING",
			"defaultValue": "world"
		} }
	}]
};
//#endregion
//#region src/extension.ts
var blockDefinitions = block_definitions_default.blocks;
var PhotogrammetryExtension = class {
	getInfo() {
		return {
			id: extensionConfig.id,
			name: Scratch.translate(block_definitions_default.extensionName),
			docsURI: extensionConfig.docsURI,
			blockIconURI: extensionConfig.blockIconURI,
			blocks: blockDefinitions.map((block) => this.toScratchBlock(block))
		};
	}
	hello(args) {
		return Scratch.translate({
			default: "Hello, {name}!",
			description: "{name} is replaced with the value supplied to the block."
		}, { name: Scratch.Cast.toString(args.NAME) });
	}
	toScratchBlock(block) {
		return {
			opcode: block.opcode,
			blockType: Scratch.BlockType[block.blockType],
			text: Scratch.translate(block.text),
			arguments: Object.fromEntries(Object.entries(block.arguments).map(([name, argument]) => [name, {
				type: Scratch.ArgumentType[argument.type],
				defaultValue: argument.defaultValue
			}]))
		};
	}
};
//#endregion
//#region src/index.ts
if (extensionConfig.unsandboxed && !Scratch.extensions.unsandboxed) throw new Error(`${extensionConfig.name} must run unsandboxed.`);
Scratch.extensions.register(new PhotogrammetryExtension());
//#endregion

})(Scratch);
