(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js ***!
  \***************************************************************************************************/
/*! exports provided: Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, Diagnostic, Command, TextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolInformation, DocumentSymbol, CodeActionKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, EOL, TextDocument, TextDocumentSaveReason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationLink", function() { return LocationLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInformation", function() { return ColorInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPresentation", function() { return ColorPresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeKind", function() { return FoldingRangeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRange", function() { return FoldingRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticRelatedInformation", function() { return DiagnosticRelatedInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticSeverity", function() { return DiagnosticSeverity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnostic", function() { return Diagnostic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Command", function() { return Command; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEdit", function() { return TextEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentEdit", function() { return TextDocumentEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenameFile", function() { return RenameFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceEdit", function() { return WorkspaceEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceChange", function() { return WorkspaceChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentIdentifier", function() { return TextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionedTextDocumentIdentifier", function() { return VersionedTextDocumentIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentItem", function() { return TextDocumentItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupKind", function() { return MarkupKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupContent", function() { return MarkupContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItemKind", function() { return CompletionItemKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertTextFormat", function() { return InsertTextFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionItem", function() { return CompletionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionList", function() { return CompletionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkedString", function() { return MarkedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hover", function() { return Hover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterInformation", function() { return ParameterInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignatureInformation", function() { return SignatureInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightKind", function() { return DocumentHighlightKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlight", function() { return DocumentHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolKind", function() { return SymbolKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolInformation", function() { return SymbolInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbol", function() { return DocumentSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionKind", function() { return CodeActionKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeActionContext", function() { return CodeActionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeAction", function() { return CodeAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLens", function() { return CodeLens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormattingOptions", function() { return FormattingOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLink", function() { return DocumentLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EOL", function() { return EOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocument", function() { return TextDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDocumentSaveReason", function() { return TextDocumentSaveReason; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

/**
 * The Position namespace provides helper functions to work with
 * [Position](#Position) literals.
 */
var Position;
(function (Position) {
    /**
     * Creates a new Position literal from the given line and character.
     * @param line The position's line.
     * @param character The position's character.
     */
    function create(line, character) {
        return { line: line, character: character };
    }
    Position.create = create;
    /**
     * Checks whether the given liternal conforms to the [Position](#Position) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.number(candidate.line) && Is.number(candidate.character);
    }
    Position.is = is;
})(Position || (Position = {}));
/**
 * The Range namespace provides helper functions to work with
 * [Range](#Range) literals.
 */
var Range;
(function (Range) {
    function create(one, two, three, four) {
        if (Is.number(one) && Is.number(two) && Is.number(three) && Is.number(four)) {
            return { start: Position.create(one, two), end: Position.create(three, four) };
        }
        else if (Position.is(one) && Position.is(two)) {
            return { start: one, end: two };
        }
        else {
            throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
        }
    }
    Range.create = create;
    /**
     * Checks whether the given literal conforms to the [Range](#Range) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
    }
    Range.is = is;
})(Range || (Range = {}));
/**
 * The Location namespace provides helper functions to work with
 * [Location](#Location) literals.
 */
var Location;
(function (Location) {
    /**
     * Creates a Location literal.
     * @param uri The location's uri.
     * @param range The location's range.
     */
    function create(uri, range) {
        return { uri: uri, range: range };
    }
    Location.create = create;
    /**
     * Checks whether the given literal conforms to the [Location](#Location) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
    }
    Location.is = is;
})(Location || (Location = {}));
/**
 * The LocationLink namespace provides helper functions to work with
 * [LocationLink](#LocationLink) literals.
 */
var LocationLink;
(function (LocationLink) {
    /**
     * Creates a LocationLink literal.
     * @param targetUri The definition's uri.
     * @param targetRange The full range of the definition.
     * @param targetSelectionRange The span of the symbol definition at the target.
     * @param originSelectionRange The span of the symbol being defined in the originating source file.
     */
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
    }
    LocationLink.create = create;
    /**
     * Checks whether the given literal conforms to the [LocationLink](#LocationLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
            && (Range.is(candidate.targetSelectionRange) || Is.undefined(candidate.targetSelectionRange))
            && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
    }
    LocationLink.is = is;
})(LocationLink || (LocationLink = {}));
/**
 * The Color namespace provides helper functions to work with
 * [Color](#Color) literals.
 */
var Color;
(function (Color) {
    /**
     * Creates a new Color literal.
     */
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha,
        };
    }
    Color.create = create;
    /**
     * Checks whether the given literal conforms to the [Color](#Color) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.red)
            && Is.number(candidate.green)
            && Is.number(candidate.blue)
            && Is.number(candidate.alpha);
    }
    Color.is = is;
})(Color || (Color = {}));
/**
 * The ColorInformation namespace provides helper functions to work with
 * [ColorInformation](#ColorInformation) literals.
 */
var ColorInformation;
(function (ColorInformation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(range, color) {
        return {
            range: range,
            color: color,
        };
    }
    ColorInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Range.is(candidate.range) && Color.is(candidate.color);
    }
    ColorInformation.is = is;
})(ColorInformation || (ColorInformation = {}));
/**
 * The Color namespace provides helper functions to work with
 * [ColorPresentation](#ColorPresentation) literals.
 */
var ColorPresentation;
(function (ColorPresentation) {
    /**
     * Creates a new ColorInformation literal.
     */
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits,
        };
    }
    ColorPresentation.create = create;
    /**
     * Checks whether the given literal conforms to the [ColorInformation](#ColorInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate.label)
            && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
            && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
    }
    ColorPresentation.is = is;
})(ColorPresentation || (ColorPresentation = {}));
/**
 * Enum of known range kinds
 */
var FoldingRangeKind;
(function (FoldingRangeKind) {
    /**
     * Folding range for a comment
     */
    FoldingRangeKind["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeKind["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeKind["Region"] = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
/**
 * The folding range namespace provides helper functions to work with
 * [FoldingRange](#FoldingRange) literals.
 */
var FoldingRange;
(function (FoldingRange) {
    /**
     * Creates a new FoldingRange literal.
     */
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if (Is.defined(startCharacter)) {
            result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
            result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
            result.kind = kind;
        }
        return result;
    }
    FoldingRange.create = create;
    /**
     * Checks whether the given literal conforms to the [FoldingRange](#FoldingRange) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.number(candidate.startLine) && Is.number(candidate.startLine)
            && (Is.undefined(candidate.startCharacter) || Is.number(candidate.startCharacter))
            && (Is.undefined(candidate.endCharacter) || Is.number(candidate.endCharacter))
            && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
    }
    FoldingRange.is = is;
})(FoldingRange || (FoldingRange = {}));
/**
 * The DiagnosticRelatedInformation namespace provides helper functions to work with
 * [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) literals.
 */
var DiagnosticRelatedInformation;
(function (DiagnosticRelatedInformation) {
    /**
     * Creates a new DiagnosticRelatedInformation literal.
     */
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation.create = create;
    /**
     * Checks whether the given literal conforms to the [DiagnosticRelatedInformation](#DiagnosticRelatedInformation) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
    }
    DiagnosticRelatedInformation.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
/**
 * The diagnostic's severity.
 */
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    /**
     * Reports an error.
     */
    DiagnosticSeverity.Error = 1;
    /**
     * Reports a warning.
     */
    DiagnosticSeverity.Warning = 2;
    /**
     * Reports an information.
     */
    DiagnosticSeverity.Information = 3;
    /**
     * Reports a hint.
     */
    DiagnosticSeverity.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
/**
 * The Diagnostic namespace provides helper functions to work with
 * [Diagnostic](#Diagnostic) literals.
 */
var Diagnostic;
(function (Diagnostic) {
    /**
     * Creates a new Diagnostic literal.
     */
    function create(range, message, severity, code, source, relatedInformation) {
        var result = { range: range, message: message };
        if (Is.defined(severity)) {
            result.severity = severity;
        }
        if (Is.defined(code)) {
            result.code = code;
        }
        if (Is.defined(source)) {
            result.source = source;
        }
        if (Is.defined(relatedInformation)) {
            result.relatedInformation = relatedInformation;
        }
        return result;
    }
    Diagnostic.create = create;
    /**
     * Checks whether the given literal conforms to the [Diagnostic](#Diagnostic) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && Range.is(candidate.range)
            && Is.string(candidate.message)
            && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
            && (Is.number(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
            && (Is.string(candidate.source) || Is.undefined(candidate.source))
            && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
    }
    Diagnostic.is = is;
})(Diagnostic || (Diagnostic = {}));
/**
 * The Command namespace provides helper functions to work with
 * [Command](#Command) literals.
 */
var Command;
(function (Command) {
    /**
     * Creates a new Command literal.
     */
    function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = { title: title, command: command };
        if (Is.defined(args) && args.length > 0) {
            result.arguments = args;
        }
        return result;
    }
    Command.create = create;
    /**
     * Checks whether the given literal conforms to the [Command](#Command) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
    }
    Command.is = is;
})(Command || (Command = {}));
/**
 * The TextEdit namespace provides helper function to create replace,
 * insert and delete edits more easily.
 */
var TextEdit;
(function (TextEdit) {
    /**
     * Creates a replace text edit.
     * @param range The range of text to be replaced.
     * @param newText The new text.
     */
    function replace(range, newText) {
        return { range: range, newText: newText };
    }
    TextEdit.replace = replace;
    /**
     * Creates a insert text edit.
     * @param position The position to insert the text at.
     * @param newText The text to be inserted.
     */
    function insert(position, newText) {
        return { range: { start: position, end: position }, newText: newText };
    }
    TextEdit.insert = insert;
    /**
     * Creates a delete text edit.
     * @param range The range of text to be deleted.
     */
    function del(range) {
        return { range: range, newText: '' };
    }
    TextEdit.del = del;
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate)
            && Is.string(candidate.newText)
            && Range.is(candidate.range);
    }
    TextEdit.is = is;
})(TextEdit || (TextEdit = {}));
/**
 * The TextDocumentEdit namespace provides helper function to create
 * an edit that manipulates a text document.
 */
var TextDocumentEdit;
(function (TextDocumentEdit) {
    /**
     * Creates a new `TextDocumentEdit`
     */
    function create(textDocument, edits) {
        return { textDocument: textDocument, edits: edits };
    }
    TextDocumentEdit.create = create;
    function is(value) {
        var candidate = value;
        return Is.defined(candidate)
            && VersionedTextDocumentIdentifier.is(candidate.textDocument)
            && Array.isArray(candidate.edits);
    }
    TextDocumentEdit.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function (CreateFile) {
    function create(uri, options) {
        var result = {
            kind: 'create',
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    CreateFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'create' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    CreateFile.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function (RenameFile) {
    function create(oldUri, newUri, options) {
        var result = {
            kind: 'rename',
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    RenameFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) &&
            (candidate.options === void 0 ||
                ((candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))));
    }
    RenameFile.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function (DeleteFile) {
    function create(uri, options) {
        var result = {
            kind: 'delete',
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
            result.options = options;
        }
        return result;
    }
    DeleteFile.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) &&
            (candidate.options === void 0 ||
                ((candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))));
    }
    DeleteFile.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function (WorkspaceEdit) {
    function is(value) {
        var candidate = value;
        return candidate &&
            (candidate.changes !== void 0 || candidate.documentChanges !== void 0) &&
            (candidate.documentChanges === void 0 || candidate.documentChanges.every(function (change) {
                if (Is.string(change.kind)) {
                    return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
                }
                else {
                    return TextDocumentEdit.is(change);
                }
            }));
    }
    WorkspaceEdit.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextEditChangeImpl = /** @class */ (function () {
    function TextEditChangeImpl(edits) {
        this.edits = edits;
    }
    TextEditChangeImpl.prototype.insert = function (position, newText) {
        this.edits.push(TextEdit.insert(position, newText));
    };
    TextEditChangeImpl.prototype.replace = function (range, newText) {
        this.edits.push(TextEdit.replace(range, newText));
    };
    TextEditChangeImpl.prototype.delete = function (range) {
        this.edits.push(TextEdit.del(range));
    };
    TextEditChangeImpl.prototype.add = function (edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl.prototype.all = function () {
        return this.edits;
    };
    TextEditChangeImpl.prototype.clear = function () {
        this.edits.splice(0, this.edits.length);
    };
    return TextEditChangeImpl;
}());
/**
 * A workspace change helps constructing changes to a workspace.
 */
var WorkspaceChange = /** @class */ (function () {
    function WorkspaceChange(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                workspaceEdit.documentChanges.forEach(function (change) {
                    if (TextDocumentEdit.is(change)) {
                        var textEditChange = new TextEditChangeImpl(change.edits);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            }
            else if (workspaceEdit.changes) {
                Object.keys(workspaceEdit.changes).forEach(function (key) {
                    var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
                    _this._textEditChanges[key] = textEditChange;
                });
            }
        }
    }
    Object.defineProperty(WorkspaceChange.prototype, "edit", {
        /**
         * Returns the underlying [WorkspaceEdit](#WorkspaceEdit) literal
         * use to be returned from a workspace edit operation like rename.
         */
        get: function () {
            return this._workspaceEdit;
        },
        enumerable: true,
        configurable: true
    });
    WorkspaceChange.prototype.getTextEditChange = function (key) {
        if (VersionedTextDocumentIdentifier.is(key)) {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    documentChanges: []
                };
            }
            if (!this._workspaceEdit.documentChanges) {
                throw new Error('Workspace edit is not configured for document changes.');
            }
            var textDocument = key;
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        }
        else {
            if (!this._workspaceEdit) {
                this._workspaceEdit = {
                    changes: Object.create(null)
                };
            }
            if (!this._workspaceEdit.changes) {
                throw new Error('Workspace edit is not configured for normal text edit changes.');
            }
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange.prototype.createFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(CreateFile.create(uri, options));
    };
    WorkspaceChange.prototype.renameFile = function (oldUri, newUri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(RenameFile.create(oldUri, newUri, options));
    };
    WorkspaceChange.prototype.deleteFile = function (uri, options) {
        this.checkDocumentChanges();
        this._workspaceEdit.documentChanges.push(DeleteFile.create(uri, options));
    };
    WorkspaceChange.prototype.checkDocumentChanges = function () {
        if (!this._workspaceEdit || !this._workspaceEdit.documentChanges) {
            throw new Error('Workspace edit is not configured for document changes.');
        }
    };
    return WorkspaceChange;
}());

/**
 * The TextDocumentIdentifier namespace provides helper functions to work with
 * [TextDocumentIdentifier](#TextDocumentIdentifier) literals.
 */
var TextDocumentIdentifier;
(function (TextDocumentIdentifier) {
    /**
     * Creates a new TextDocumentIdentifier literal.
     * @param uri The document's uri.
     */
    function create(uri) {
        return { uri: uri };
    }
    TextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentIdentifier](#TextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
    }
    TextDocumentIdentifier.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
/**
 * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
 * [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) literals.
 */
var VersionedTextDocumentIdentifier;
(function (VersionedTextDocumentIdentifier) {
    /**
     * Creates a new VersionedTextDocumentIdentifier literal.
     * @param uri The document's uri.
     * @param uri The document's text.
     */
    function create(uri, version) {
        return { uri: uri, version: version };
    }
    VersionedTextDocumentIdentifier.create = create;
    /**
     * Checks whether the given literal conforms to the [VersionedTextDocumentIdentifier](#VersionedTextDocumentIdentifier) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.number(candidate.version));
    }
    VersionedTextDocumentIdentifier.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
/**
 * The TextDocumentItem namespace provides helper functions to work with
 * [TextDocumentItem](#TextDocumentItem) literals.
 */
var TextDocumentItem;
(function (TextDocumentItem) {
    /**
     * Creates a new TextDocumentItem literal.
     * @param uri The document's uri.
     * @param languageId The document's language identifier.
     * @param version The document's version number.
     * @param text The document's text.
     */
    function create(uri, languageId, version, text) {
        return { uri: uri, languageId: languageId, version: version, text: text };
    }
    TextDocumentItem.create = create;
    /**
     * Checks whether the given literal conforms to the [TextDocumentItem](#TextDocumentItem) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.number(candidate.version) && Is.string(candidate.text);
    }
    TextDocumentItem.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
/**
 * Describes the content type that a client supports in various
 * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
 *
 * Please note that `MarkupKinds` must not start with a `$`. This kinds
 * are reserved for internal usage.
 */
var MarkupKind;
(function (MarkupKind) {
    /**
     * Plain text is supported as a content format
     */
    MarkupKind.PlainText = 'plaintext';
    /**
     * Markdown is supported as a content format
     */
    MarkupKind.Markdown = 'markdown';
})(MarkupKind || (MarkupKind = {}));
(function (MarkupKind) {
    /**
     * Checks whether the given value is a value of the [MarkupKind](#MarkupKind) type.
     */
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
    }
    MarkupKind.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function (MarkupContent) {
    /**
     * Checks whether the given value conforms to the [MarkupContent](#MarkupContent) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
    }
    MarkupContent.is = is;
})(MarkupContent || (MarkupContent = {}));
/**
 * The kind of a completion entry.
 */
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind.Text = 1;
    CompletionItemKind.Method = 2;
    CompletionItemKind.Function = 3;
    CompletionItemKind.Constructor = 4;
    CompletionItemKind.Field = 5;
    CompletionItemKind.Variable = 6;
    CompletionItemKind.Class = 7;
    CompletionItemKind.Interface = 8;
    CompletionItemKind.Module = 9;
    CompletionItemKind.Property = 10;
    CompletionItemKind.Unit = 11;
    CompletionItemKind.Value = 12;
    CompletionItemKind.Enum = 13;
    CompletionItemKind.Keyword = 14;
    CompletionItemKind.Snippet = 15;
    CompletionItemKind.Color = 16;
    CompletionItemKind.File = 17;
    CompletionItemKind.Reference = 18;
    CompletionItemKind.Folder = 19;
    CompletionItemKind.EnumMember = 20;
    CompletionItemKind.Constant = 21;
    CompletionItemKind.Struct = 22;
    CompletionItemKind.Event = 23;
    CompletionItemKind.Operator = 24;
    CompletionItemKind.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
/**
 * Defines whether the insert text in a completion item should be interpreted as
 * plain text or a snippet.
 */
var InsertTextFormat;
(function (InsertTextFormat) {
    /**
     * The primary text to be inserted is treated as a plain string.
     */
    InsertTextFormat.PlainText = 1;
    /**
     * The primary text to be inserted is treated as a snippet.
     *
     * A snippet can define tab stops and placeholders with `$1`, `$2`
     * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
     * the end of the snippet. Placeholders with equal identifiers are linked,
     * that is typing in one will update others too.
     *
     * See also: https://github.com/Microsoft/vscode/blob/master/src/vs/editor/contrib/snippet/common/snippet.md
     */
    InsertTextFormat.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
/**
 * The CompletionItem namespace provides functions to deal with
 * completion items.
 */
var CompletionItem;
(function (CompletionItem) {
    /**
     * Create a completion item and seed it with a label.
     * @param label The completion item's label
     */
    function create(label) {
        return { label: label };
    }
    CompletionItem.create = create;
})(CompletionItem || (CompletionItem = {}));
/**
 * The CompletionList namespace provides functions to deal with
 * completion lists.
 */
var CompletionList;
(function (CompletionList) {
    /**
     * Creates a new completion list.
     *
     * @param items The completion items.
     * @param isIncomplete The list is not complete.
     */
    function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
    }
    CompletionList.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function (MarkedString) {
    /**
     * Creates a marked string from plain text.
     *
     * @param plainText The plain text.
     */
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&"); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
    }
    MarkedString.fromPlainText = fromPlainText;
    /**
     * Checks whether the given value conforms to the [MarkedString](#MarkedString) type.
     */
    function is(value) {
        var candidate = value;
        return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
    }
    MarkedString.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function (Hover) {
    /**
     * Checks whether the given value conforms to the [Hover](#Hover) interface.
     */
    function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
            MarkedString.is(candidate.contents) ||
            Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
    }
    Hover.is = is;
})(Hover || (Hover = {}));
/**
 * The ParameterInformation namespace provides helper functions to work with
 * [ParameterInformation](#ParameterInformation) literals.
 */
var ParameterInformation;
(function (ParameterInformation) {
    /**
     * Creates a new parameter information literal.
     *
     * @param label A label string.
     * @param documentation A doc string.
     */
    function create(label, documentation) {
        return documentation ? { label: label, documentation: documentation } : { label: label };
    }
    ParameterInformation.create = create;
    ;
})(ParameterInformation || (ParameterInformation = {}));
/**
 * The SignatureInformation namespace provides helper functions to work with
 * [SignatureInformation](#SignatureInformation) literals.
 */
var SignatureInformation;
(function (SignatureInformation) {
    function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            parameters[_i - 2] = arguments[_i];
        }
        var result = { label: label };
        if (Is.defined(documentation)) {
            result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
            result.parameters = parameters;
        }
        else {
            result.parameters = [];
        }
        return result;
    }
    SignatureInformation.create = create;
})(SignatureInformation || (SignatureInformation = {}));
/**
 * A document highlight kind.
 */
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    /**
     * A textual occurrence.
     */
    DocumentHighlightKind.Text = 1;
    /**
     * Read-access of a symbol, like reading a variable.
     */
    DocumentHighlightKind.Read = 2;
    /**
     * Write-access of a symbol, like writing to a variable.
     */
    DocumentHighlightKind.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
/**
 * DocumentHighlight namespace to provide helper functions to work with
 * [DocumentHighlight](#DocumentHighlight) literals.
 */
var DocumentHighlight;
(function (DocumentHighlight) {
    /**
     * Create a DocumentHighlight object.
     * @param range The range the highlight applies to.
     */
    function create(range, kind) {
        var result = { range: range };
        if (Is.number(kind)) {
            result.kind = kind;
        }
        return result;
    }
    DocumentHighlight.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
/**
 * A symbol kind.
 */
var SymbolKind;
(function (SymbolKind) {
    SymbolKind.File = 1;
    SymbolKind.Module = 2;
    SymbolKind.Namespace = 3;
    SymbolKind.Package = 4;
    SymbolKind.Class = 5;
    SymbolKind.Method = 6;
    SymbolKind.Property = 7;
    SymbolKind.Field = 8;
    SymbolKind.Constructor = 9;
    SymbolKind.Enum = 10;
    SymbolKind.Interface = 11;
    SymbolKind.Function = 12;
    SymbolKind.Variable = 13;
    SymbolKind.Constant = 14;
    SymbolKind.String = 15;
    SymbolKind.Number = 16;
    SymbolKind.Boolean = 17;
    SymbolKind.Array = 18;
    SymbolKind.Object = 19;
    SymbolKind.Key = 20;
    SymbolKind.Null = 21;
    SymbolKind.EnumMember = 22;
    SymbolKind.Struct = 23;
    SymbolKind.Event = 24;
    SymbolKind.Operator = 25;
    SymbolKind.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolInformation;
(function (SymbolInformation) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the location of the symbol.
     * @param uri The resource of the location of symbol, defaults to the current document.
     * @param containerName The name of the symbol containing the symbol.
     */
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: { uri: uri, range: range }
        };
        if (containerName) {
            result.containerName = containerName;
        }
        return result;
    }
    SymbolInformation.create = create;
})(SymbolInformation || (SymbolInformation = {}));
/**
 * Represents programming constructs like variables, classes, interfaces etc.
 * that appear in a document. Document symbols can be hierarchical and they
 * have two ranges: one that encloses its definition and one that points to
 * its most interesting range, e.g. the range of an identifier.
 */
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol() {
    }
    return DocumentSymbol;
}());

(function (DocumentSymbol) {
    /**
     * Creates a new symbol information literal.
     *
     * @param name The name of the symbol.
     * @param detail The detail of the symbol.
     * @param kind The kind of the symbol.
     * @param range The range of the symbol.
     * @param selectionRange The selectionRange of the symbol.
     * @param children Children of the symbol.
     */
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) {
            result.children = children;
        }
        return result;
    }
    DocumentSymbol.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentSymbol](#DocumentSymbol) interface.
     */
    function is(value) {
        var candidate = value;
        return candidate &&
            Is.string(candidate.name) && Is.number(candidate.kind) &&
            Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
            (candidate.detail === void 0 || Is.string(candidate.detail)) &&
            (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) &&
            (candidate.children === void 0 || Array.isArray(candidate.children));
    }
    DocumentSymbol.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
/**
 * A set of predefined code action kinds
 */
var CodeActionKind;
(function (CodeActionKind) {
    /**
     * Base kind for quickfix actions: 'quickfix'
     */
    CodeActionKind.QuickFix = 'quickfix';
    /**
     * Base kind for refactoring actions: 'refactor'
     */
    CodeActionKind.Refactor = 'refactor';
    /**
     * Base kind for refactoring extraction actions: 'refactor.extract'
     *
     * Example extract actions:
     *
     * - Extract method
     * - Extract function
     * - Extract variable
     * - Extract interface from class
     * - ...
     */
    CodeActionKind.RefactorExtract = 'refactor.extract';
    /**
     * Base kind for refactoring inline actions: 'refactor.inline'
     *
     * Example inline actions:
     *
     * - Inline function
     * - Inline variable
     * - Inline constant
     * - ...
     */
    CodeActionKind.RefactorInline = 'refactor.inline';
    /**
     * Base kind for refactoring rewrite actions: 'refactor.rewrite'
     *
     * Example rewrite actions:
     *
     * - Convert JavaScript function to class
     * - Add or remove parameter
     * - Encapsulate field
     * - Make method static
     * - Move method to base class
     * - ...
     */
    CodeActionKind.RefactorRewrite = 'refactor.rewrite';
    /**
     * Base kind for source actions: `source`
     *
     * Source code actions apply to the entire file.
     */
    CodeActionKind.Source = 'source';
    /**
     * Base kind for an organize imports source action: `source.organizeImports`
     */
    CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
})(CodeActionKind || (CodeActionKind = {}));
/**
 * The CodeActionContext namespace provides helper functions to work with
 * [CodeActionContext](#CodeActionContext) literals.
 */
var CodeActionContext;
(function (CodeActionContext) {
    /**
     * Creates a new CodeActionContext literal.
     */
    function create(diagnostics, only) {
        var result = { diagnostics: diagnostics };
        if (only !== void 0 && only !== null) {
            result.only = only;
        }
        return result;
    }
    CodeActionContext.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeActionContext](#CodeActionContext) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string));
    }
    CodeActionContext.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function (CodeAction) {
    function create(title, commandOrEdit, kind) {
        var result = { title: title };
        if (Command.is(commandOrEdit)) {
            result.command = commandOrEdit;
        }
        else {
            result.edit = commandOrEdit;
        }
        if (kind !== void null) {
            result.kind = kind;
        }
        return result;
    }
    CodeAction.create = create;
    function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) &&
            (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
            (candidate.kind === void 0 || Is.string(candidate.kind)) &&
            (candidate.edit !== void 0 || candidate.command !== void 0) &&
            (candidate.command === void 0 || Command.is(candidate.command)) &&
            (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
    }
    CodeAction.is = is;
})(CodeAction || (CodeAction = {}));
/**
 * The CodeLens namespace provides helper functions to work with
 * [CodeLens](#CodeLens) literals.
 */
var CodeLens;
(function (CodeLens) {
    /**
     * Creates a new CodeLens literal.
     */
    function create(range, data) {
        var result = { range: range };
        if (Is.defined(data))
            result.data = data;
        return result;
    }
    CodeLens.create = create;
    /**
     * Checks whether the given literal conforms to the [CodeLens](#CodeLens) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
    }
    CodeLens.is = is;
})(CodeLens || (CodeLens = {}));
/**
 * The FormattingOptions namespace provides helper functions to work with
 * [FormattingOptions](#FormattingOptions) literals.
 */
var FormattingOptions;
(function (FormattingOptions) {
    /**
     * Creates a new FormattingOptions literal.
     */
    function create(tabSize, insertSpaces) {
        return { tabSize: tabSize, insertSpaces: insertSpaces };
    }
    FormattingOptions.create = create;
    /**
     * Checks whether the given literal conforms to the [FormattingOptions](#FormattingOptions) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.number(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions.is = is;
})(FormattingOptions || (FormattingOptions = {}));
/**
 * A document link is a range in a text document that links to an internal or external resource, like another
 * text document or a web site.
 */
var DocumentLink = /** @class */ (function () {
    function DocumentLink() {
    }
    return DocumentLink;
}());

/**
 * The DocumentLink namespace provides helper functions to work with
 * [DocumentLink](#DocumentLink) literals.
 */
(function (DocumentLink) {
    /**
     * Creates a new DocumentLink literal.
     */
    function create(range, target, data) {
        return { range: range, target: target, data: data };
    }
    DocumentLink.create = create;
    /**
     * Checks whether the given literal conforms to the [DocumentLink](#DocumentLink) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
    }
    DocumentLink.is = is;
})(DocumentLink || (DocumentLink = {}));
var EOL = ['\n', '\r\n', '\r'];
var TextDocument;
(function (TextDocument) {
    /**
     * Creates a new ITextDocument literal from the given uri and content.
     * @param uri The document's uri.
     * @param languageId  The document's language Id.
     * @param content The document's content.
     */
    function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
    }
    TextDocument.create = create;
    /**
     * Checks whether the given literal conforms to the [ITextDocument](#ITextDocument) interface.
     */
    function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.number(candidate.lineCount)
            && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function (a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) {
                return a.range.start.character - b.range.start.character;
            }
            return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) {
                text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            }
            else {
                throw new Error('Overlapping edit');
            }
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) {
            // sorted
            return data;
        }
        var p = (data.length / 2) | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) {
                // smaller_equal -> take left to preserve order
                data[i++] = left[leftIdx++];
            }
            else {
                // greater -> take right
                data[i++] = right[rightIdx++];
            }
        }
        while (leftIdx < left.length) {
            data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
            data[i++] = right[rightIdx++];
        }
        return data;
    }
})(TextDocument || (TextDocument = {}));
/**
 * Represents reasons why a text document is saved.
 */
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    /**
     * Manually triggered, e.g. by the user pressing save, by starting debugging,
     * or by an API call.
     */
    TextDocumentSaveReason.Manual = 1;
    /**
     * Automatic after a delay.
     */
    TextDocumentSaveReason.AfterDelay = 2;
    /**
     * When the editor lost focus.
     */
    TextDocumentSaveReason.FocusOut = 3;
})(TextDocumentSaveReason || (TextDocumentSaveReason = {}));
var FullTextDocument = /** @class */ (function () {
    function FullTextDocument(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = null;
    }
    Object.defineProperty(FullTextDocument.prototype, "uri", {
        get: function () {
            return this._uri;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTextDocument.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: true,
        configurable: true
    });
    FullTextDocument.prototype.getText = function (range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument.prototype.update = function (event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = null;
    };
    FullTextDocument.prototype.getLineOffsets = function () {
        if (this._lineOffsets === null) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for (var i = 0; i < text.length; i++) {
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = (ch === '\r' || ch === '\n');
                if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
                    i++;
                }
            }
            if (isLineStart && text.length > 0) {
                lineOffsets.push(text.length);
            }
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument.prototype.positionAt = function (offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
            return Position.create(0, offset);
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        // low is the least x for which the line offset is larger than the current offset
        // or array.length if no line offset is larger than the current offset
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument.prototype.offsetAt = function (position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
            return this._content.length;
        }
        else if (position.line < 0) {
            return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument.prototype, "lineCount", {
        get: function () {
            return this.getLineOffsets().length;
        },
        enumerable: true,
        configurable: true
    });
    return FullTextDocument;
}());
var Is;
(function (Is) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== 'undefined';
    }
    Is.defined = defined;
    function undefined(value) {
        return typeof value === 'undefined';
    }
    Is.undefined = undefined;
    function boolean(value) {
        return value === true || value === false;
    }
    Is.boolean = boolean;
    function string(value) {
        return toString.call(value) === '[object String]';
    }
    Is.string = string;
    function number(value) {
        return toString.call(value) === '[object Number]';
    }
    Is.number = number;
    function func(value) {
        return toString.call(value) === '[object Function]';
    }
    Is.func = func;
    function objectLiteral(value) {
        // Strictly speaking class instances pass this check as well. Since the LSP
        // doesn't use classes we ignore this for now. If we do we need to add something
        // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
        return value !== null && typeof value === 'object';
    }
    Is.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is.typedArray = typedArray;
})(Is || (Is = {}));


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/html/htmlMode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/html/htmlMode.js ***!
  \*********************************************************************/
/*! exports provided: setupMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupMode", function() { return setupMode; });
/* harmony import */ var _workerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workerManager.js */ "./node_modules/monaco-editor/esm/vs/language/html/workerManager.js");
/* harmony import */ var _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./languageFeatures.js */ "./node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



function setupMode(defaults) {
    var client = new _workerManager_js__WEBPACK_IMPORTED_MODULE_0__["WorkerManager"](defaults);
    var worker = function () {
        var uris = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            uris[_i] = arguments[_i];
        }
        return client.getLanguageServiceWorker.apply(client, uris);
    };
    var languageId = defaults.languageId;
    // all modes
    monaco.languages.registerCompletionItemProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["CompletionAdapter"](worker));
    monaco.languages.registerHoverProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["HoverAdapter"](worker));
    monaco.languages.registerDocumentHighlightProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentHighlightAdapter"](worker));
    monaco.languages.registerLinkProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentLinkAdapter"](worker));
    monaco.languages.registerFoldingRangeProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["FoldingRangeAdapter"](worker));
    monaco.languages.registerDocumentSymbolProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentSymbolAdapter"](worker));
    // only html
    if (languageId === 'html') {
        monaco.languages.registerDocumentFormattingEditProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentFormattingEditProvider"](worker));
        monaco.languages.registerDocumentRangeFormattingEditProvider(languageId, new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DocumentRangeFormattingEditProvider"](worker));
        new _languageFeatures_js__WEBPACK_IMPORTED_MODULE_1__["DiagnosticsAdapter"](languageId, worker, defaults);
    }
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/html/languageFeatures.js ***!
  \*****************************************************************************/
/*! exports provided: DiagnosticsAdapter, CompletionAdapter, HoverAdapter, DocumentHighlightAdapter, DocumentSymbolAdapter, DocumentLinkAdapter, DocumentFormattingEditProvider, DocumentRangeFormattingEditProvider, FoldingRangeAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosticsAdapter", function() { return DiagnosticsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletionAdapter", function() { return CompletionAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverAdapter", function() { return HoverAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentHighlightAdapter", function() { return DocumentHighlightAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentSymbolAdapter", function() { return DocumentSymbolAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentLinkAdapter", function() { return DocumentLinkAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentFormattingEditProvider", function() { return DocumentFormattingEditProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentRangeFormattingEditProvider", function() { return DocumentRangeFormattingEditProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoldingRangeAdapter", function() { return FoldingRangeAdapter; });
/* harmony import */ var _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deps/vscode-languageserver-types/main.js */ "./node_modules/monaco-editor/esm/vs/language/html/_deps/vscode-languageserver-types/main.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


var Range = monaco.Range;
// --- diagnostics --- ---
var DiagnosticsAdapter = /** @class */ (function () {
    function DiagnosticsAdapter(_languageId, _worker, defaults) {
        var _this = this;
        this._languageId = _languageId;
        this._worker = _worker;
        this._disposables = [];
        this._listener = Object.create(null);
        var onModelAdd = function (model) {
            var modeId = model.getModeId();
            if (modeId !== _this._languageId) {
                return;
            }
            var handle;
            _this._listener[model.uri.toString()] = model.onDidChangeContent(function () {
                clearTimeout(handle);
                handle = setTimeout(function () { return _this._doValidate(model.uri, modeId); }, 500);
            });
            _this._doValidate(model.uri, modeId);
        };
        var onModelRemoved = function (model) {
            monaco.editor.setModelMarkers(model, _this._languageId, []);
            var uriStr = model.uri.toString();
            var listener = _this._listener[uriStr];
            if (listener) {
                listener.dispose();
                delete _this._listener[uriStr];
            }
        };
        this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd));
        this._disposables.push(monaco.editor.onWillDisposeModel(function (model) {
            onModelRemoved(model);
        }));
        this._disposables.push(monaco.editor.onDidChangeModelLanguage(function (event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        this._disposables.push(defaults.onDidChange(function (_) {
            monaco.editor.getModels().forEach(function (model) {
                if (model.getModeId() === _this._languageId) {
                    onModelRemoved(model);
                    onModelAdd(model);
                }
            });
        }));
        this._disposables.push({
            dispose: function () {
                for (var key in _this._listener) {
                    _this._listener[key].dispose();
                }
            }
        });
        monaco.editor.getModels().forEach(onModelAdd);
    }
    DiagnosticsAdapter.prototype.dispose = function () {
        this._disposables.forEach(function (d) { return d && d.dispose(); });
        this._disposables = [];
    };
    DiagnosticsAdapter.prototype._doValidate = function (resource, languageId) {
        this._worker(resource).then(function (worker) {
            return worker.doValidation(resource.toString()).then(function (diagnostics) {
                var markers = diagnostics.map(function (d) { return toDiagnostics(resource, d); });
                monaco.editor.setModelMarkers(monaco.editor.getModel(resource), languageId, markers);
            });
        }).then(undefined, function (err) {
            console.error(err);
        });
    };
    return DiagnosticsAdapter;
}());

function toSeverity(lsSeverity) {
    switch (lsSeverity) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Error: return monaco.MarkerSeverity.Error;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Warning: return monaco.MarkerSeverity.Warning;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Information: return monaco.MarkerSeverity.Info;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DiagnosticSeverity"].Hint: return monaco.MarkerSeverity.Hint;
        default:
            return monaco.MarkerSeverity.Info;
    }
}
function toDiagnostics(resource, diag) {
    var code = typeof diag.code === 'number' ? String(diag.code) : diag.code;
    return {
        severity: toSeverity(diag.severity),
        startLineNumber: diag.range.start.line + 1,
        startColumn: diag.range.start.character + 1,
        endLineNumber: diag.range.end.line + 1,
        endColumn: diag.range.end.character + 1,
        message: diag.message,
        code: code,
        source: diag.source
    };
}
// --- completion ------
function fromPosition(position) {
    if (!position) {
        return void 0;
    }
    return { character: position.column - 1, line: position.lineNumber - 1 };
}
function fromRange(range) {
    if (!range) {
        return void 0;
    }
    return { start: fromPosition(range.getStartPosition()), end: fromPosition(range.getEndPosition()) };
}
function toRange(range) {
    if (!range) {
        return void 0;
    }
    return new Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function toCompletionItemKind(kind) {
    var mItemKind = monaco.languages.CompletionItemKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Text: return mItemKind.Text;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Method: return mItemKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Function: return mItemKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Constructor: return mItemKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Field: return mItemKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Variable: return mItemKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Class: return mItemKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Interface: return mItemKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Module: return mItemKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property: return mItemKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Unit: return mItemKind.Unit;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Value: return mItemKind.Value;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Enum: return mItemKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Keyword: return mItemKind.Keyword;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet: return mItemKind.Snippet;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Color: return mItemKind.Color;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].File: return mItemKind.File;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Reference: return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function fromCompletionItemKind(kind) {
    var mItemKind = monaco.languages.CompletionItemKind;
    switch (kind) {
        case mItemKind.Text: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Text;
        case mItemKind.Method: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Method;
        case mItemKind.Function: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Function;
        case mItemKind.Constructor: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Constructor;
        case mItemKind.Field: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Field;
        case mItemKind.Variable: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Variable;
        case mItemKind.Class: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Class;
        case mItemKind.Interface: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Interface;
        case mItemKind.Module: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Module;
        case mItemKind.Property: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property;
        case mItemKind.Unit: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Unit;
        case mItemKind.Value: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Value;
        case mItemKind.Enum: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Enum;
        case mItemKind.Keyword: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Keyword;
        case mItemKind.Snippet: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Snippet;
        case mItemKind.Color: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Color;
        case mItemKind.File: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].File;
        case mItemKind.Reference: return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Reference;
    }
    return _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["CompletionItemKind"].Property;
}
function toTextEdit(textEdit) {
    if (!textEdit) {
        return void 0;
    }
    return {
        range: toRange(textEdit.range),
        text: textEdit.newText
    };
}
var CompletionAdapter = /** @class */ (function () {
    function CompletionAdapter(_worker) {
        this._worker = _worker;
    }
    Object.defineProperty(CompletionAdapter.prototype, "triggerCharacters", {
        get: function () {
            return ['.', ':', '<', '"', '=', '/'];
        },
        enumerable: true,
        configurable: true
    });
    CompletionAdapter.prototype.provideCompletionItems = function (model, position, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doComplete(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            var wordInfo = model.getWordUntilPosition(position);
            var wordRange = new Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            var items = info.items.map(function (entry) {
                var item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    range: wordRange,
                    kind: toCompletionItemKind(entry.kind),
                };
                if (entry.textEdit) {
                    item.range = toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) {
                    item.additionalTextEdits = entry.additionalTextEdits.map(toTextEdit);
                }
                if (entry.insertTextFormat === _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["InsertTextFormat"].Snippet) {
                    item.insertTextRules = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                }
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    };
    return CompletionAdapter;
}());

// --- hover ------
function isMarkupContent(thing) {
    return thing && typeof thing === 'object' && typeof thing.kind === 'string';
}
function toMarkdownString(entry) {
    if (typeof entry === 'string') {
        return {
            value: entry
        };
    }
    if (isMarkupContent(entry)) {
        if (entry.kind === 'plaintext') {
            return {
                value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&')
            };
        }
        return {
            value: entry.value
        };
    }
    return { value: '```' + entry.language + '\n' + entry.value + '\n```\n' };
}
function toMarkedStringArray(contents) {
    if (!contents) {
        return void 0;
    }
    if (Array.isArray(contents)) {
        return contents.map(toMarkdownString);
    }
    return [toMarkdownString(contents)];
}
var HoverAdapter = /** @class */ (function () {
    function HoverAdapter(_worker) {
        this._worker = _worker;
    }
    HoverAdapter.prototype.provideHover = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.doHover(resource.toString(), fromPosition(position));
        }).then(function (info) {
            if (!info) {
                return;
            }
            return {
                range: toRange(info.range),
                contents: toMarkedStringArray(info.contents)
            };
        });
    };
    return HoverAdapter;
}());

// --- document highlights ------
function toHighlighKind(kind) {
    var mKind = monaco.languages.DocumentHighlightKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Read: return mKind.Read;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Write: return mKind.Write;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["DocumentHighlightKind"].Text: return mKind.Text;
    }
    return mKind.Text;
}
var DocumentHighlightAdapter = /** @class */ (function () {
    function DocumentHighlightAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentHighlightAdapter.prototype.provideDocumentHighlights = function (model, position, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentHighlights(resource.toString(), fromPosition(position)); }).then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                range: toRange(item.range),
                kind: toHighlighKind(item.kind)
            }); });
        });
    };
    return DocumentHighlightAdapter;
}());

// --- document symbols ------
function toSymbolKind(kind) {
    var mKind = monaco.languages.SymbolKind;
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].File: return mKind.Array;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Module: return mKind.Module;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Namespace: return mKind.Namespace;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Package: return mKind.Package;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Class: return mKind.Class;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Method: return mKind.Method;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Property: return mKind.Property;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Field: return mKind.Field;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constructor: return mKind.Constructor;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Enum: return mKind.Enum;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Interface: return mKind.Interface;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Function: return mKind.Function;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Variable: return mKind.Variable;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Constant: return mKind.Constant;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].String: return mKind.String;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Number: return mKind.Number;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Boolean: return mKind.Boolean;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["SymbolKind"].Array: return mKind.Array;
    }
    return mKind.Function;
}
var DocumentSymbolAdapter = /** @class */ (function () {
    function DocumentSymbolAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentSymbolAdapter.prototype.provideDocumentSymbols = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentSymbols(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            return items.map(function (item) { return ({
                name: item.name,
                detail: '',
                containerName: item.containerName,
                kind: toSymbolKind(item.kind),
                range: toRange(item.location.range),
                selectionRange: toRange(item.location.range)
            }); });
        });
    };
    return DocumentSymbolAdapter;
}());

var DocumentLinkAdapter = /** @class */ (function () {
    function DocumentLinkAdapter(_worker) {
        this._worker = _worker;
    }
    DocumentLinkAdapter.prototype.provideLinks = function (model, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.findDocumentLinks(resource.toString()); }).then(function (items) {
            if (!items) {
                return;
            }
            return {
                links: items.map(function (item) { return ({
                    range: toRange(item.range),
                    url: item.target
                }); })
            };
        });
    };
    return DocumentLinkAdapter;
}());

function fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var DocumentFormattingEditProvider = /** @class */ (function () {
    function DocumentFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentFormattingEditProvider.prototype.provideDocumentFormattingEdits = function (model, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.format(resource.toString(), null, fromFormattingOptions(options)).then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentFormattingEditProvider;
}());

var DocumentRangeFormattingEditProvider = /** @class */ (function () {
    function DocumentRangeFormattingEditProvider(_worker) {
        this._worker = _worker;
    }
    DocumentRangeFormattingEditProvider.prototype.provideDocumentRangeFormattingEdits = function (model, range, options, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) {
            return worker.format(resource.toString(), fromRange(range), fromFormattingOptions(options)).then(function (edits) {
                if (!edits || edits.length === 0) {
                    return;
                }
                return edits.map(toTextEdit);
            });
        });
    };
    return DocumentRangeFormattingEditProvider;
}());

var FoldingRangeAdapter = /** @class */ (function () {
    function FoldingRangeAdapter(_worker) {
        this._worker = _worker;
    }
    FoldingRangeAdapter.prototype.provideFoldingRanges = function (model, context, token) {
        var resource = model.uri;
        return this._worker(resource).then(function (worker) { return worker.provideFoldingRanges(resource.toString(), context); }).then(function (ranges) {
            if (!ranges) {
                return;
            }
            return ranges.map(function (range) {
                var result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== 'undefined') {
                    result.kind = toFoldingRangeKind(range.kind);
                }
                return result;
            });
        });
    };
    return FoldingRangeAdapter;
}());

function toFoldingRangeKind(kind) {
    switch (kind) {
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Comment: return monaco.languages.FoldingRangeKind.Comment;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Imports: return monaco.languages.FoldingRangeKind.Imports;
        case _deps_vscode_languageserver_types_main_js__WEBPACK_IMPORTED_MODULE_0__["FoldingRangeKind"].Region: return monaco.languages.FoldingRangeKind.Region;
    }
    return void 0;
}


/***/ }),

/***/ "./node_modules/monaco-editor/esm/vs/language/html/workerManager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/html/workerManager.js ***!
  \**************************************************************************/
/*! exports provided: WorkerManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkerManager", function() { return WorkerManager; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var STOP_WHEN_IDLE_FOR = 2 * 60 * 1000; // 2min
var WorkerManager = /** @class */ (function () {
    function WorkerManager(defaults) {
        var _this = this;
        this._defaults = defaults;
        this._worker = null;
        this._idleCheckInterval = setInterval(function () { return _this._checkIfIdle(); }, 30 * 1000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function () { return _this._stopWorker(); });
    }
    WorkerManager.prototype._stopWorker = function () {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    };
    WorkerManager.prototype.dispose = function () {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    };
    WorkerManager.prototype._checkIfIdle = function () {
        if (!this._worker) {
            return;
        }
        var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > STOP_WHEN_IDLE_FOR) {
            this._stopWorker();
        }
    };
    WorkerManager.prototype._getClient = function () {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = monaco.editor.createWebWorker({
                // module that exports the create() method and returns a `HTMLWorker` instance
                moduleId: 'vs/language/html/htmlWorker',
                // passed in to the create() method
                createData: {
                    languageSettings: this._defaults.options,
                    languageId: this._defaults.languageId
                },
                label: this._defaults.languageId
            });
            this._client = this._worker.getProxy();
        }
        return this._client;
    };
    WorkerManager.prototype.getLanguageServiceWorker = function () {
        var _this = this;
        var resources = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            resources[_i] = arguments[_i];
        }
        var _client;
        return this._getClient().then(function (client) {
            _client = client;
        }).then(function (_) {
            return _this._worker.withSyncedResources(resources);
        }).then(function (_) { return _client; });
    };
    return WorkerManager;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvaHRtbC9fZGVwcy92c2NvZGUtbGFuZ3VhZ2VzZXJ2ZXItdHlwZXMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvaHRtbC9odG1sTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvbGFuZ3VhZ2UvaHRtbC9sYW5ndWFnZUZlYXR1cmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9sYW5ndWFnZS9odG1sL3dvcmtlck1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3QztBQUN6QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQ3hDO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUN1QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUM5QjtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0RBQXdEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UztBQUNUO0FBQ0EsU0FBUyxxQkFBcUIsZ0JBQWdCLEVBQUU7QUFDaEQ7QUFDQTtBQUNBLENBQUM7QUFDd0IiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG4vKipcclxuICogVGhlIFBvc2l0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbUG9zaXRpb25dKCNQb3NpdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFBvc2l0aW9uO1xyXG4oZnVuY3Rpb24gKFBvc2l0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgUG9zaXRpb24gbGl0ZXJhbCBmcm9tIHRoZSBnaXZlbiBsaW5lIGFuZCBjaGFyYWN0ZXIuXHJcbiAgICAgKiBAcGFyYW0gbGluZSBUaGUgcG9zaXRpb24ncyBsaW5lLlxyXG4gICAgICogQHBhcmFtIGNoYXJhY3RlciBUaGUgcG9zaXRpb24ncyBjaGFyYWN0ZXIuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShsaW5lLCBjaGFyYWN0ZXIpIHtcclxuICAgICAgICByZXR1cm4geyBsaW5lOiBsaW5lLCBjaGFyYWN0ZXI6IGNoYXJhY3RlciB9O1xyXG4gICAgfVxyXG4gICAgUG9zaXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJuYWwgY29uZm9ybXMgdG8gdGhlIFtQb3NpdGlvbl0oI1Bvc2l0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5vYmplY3RMaXRlcmFsKGNhbmRpZGF0ZSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5saW5lKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmNoYXJhY3Rlcik7XHJcbiAgICB9XHJcbiAgICBQb3NpdGlvbi5pcyA9IGlzO1xyXG59KShQb3NpdGlvbiB8fCAoUG9zaXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFJhbmdlIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbUmFuZ2VdKCNSYW5nZSkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFJhbmdlO1xyXG4oZnVuY3Rpb24gKFJhbmdlKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUob25lLCB0d28sIHRocmVlLCBmb3VyKSB7XHJcbiAgICAgICAgaWYgKElzLm51bWJlcihvbmUpICYmIElzLm51bWJlcih0d28pICYmIElzLm51bWJlcih0aHJlZSkgJiYgSXMubnVtYmVyKGZvdXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0OiBQb3NpdGlvbi5jcmVhdGUob25lLCB0d28pLCBlbmQ6IFBvc2l0aW9uLmNyZWF0ZSh0aHJlZSwgZm91cikgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoUG9zaXRpb24uaXMob25lKSAmJiBQb3NpdGlvbi5pcyh0d28pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0OiBvbmUsIGVuZDogdHdvIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSYW5nZSNjcmVhdGUgY2FsbGVkIHdpdGggaW52YWxpZCBhcmd1bWVudHNbXCIgKyBvbmUgKyBcIiwgXCIgKyB0d28gKyBcIiwgXCIgKyB0aHJlZSArIFwiLCBcIiArIGZvdXIgKyBcIl1cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmFuZ2UuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1JhbmdlXSgjUmFuZ2UpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKSAmJiBQb3NpdGlvbi5pcyhjYW5kaWRhdGUuc3RhcnQpICYmIFBvc2l0aW9uLmlzKGNhbmRpZGF0ZS5lbmQpO1xyXG4gICAgfVxyXG4gICAgUmFuZ2UuaXMgPSBpcztcclxufSkoUmFuZ2UgfHwgKFJhbmdlID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBMb2NhdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0xvY2F0aW9uXSgjTG9jYXRpb24pIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBMb2NhdGlvbjtcclxuKGZ1bmN0aW9uIChMb2NhdGlvbikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgTG9jYXRpb24gbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGxvY2F0aW9uJ3MgdXJpLlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSBsb2NhdGlvbidzIHJhbmdlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCByYW5nZSkge1xyXG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpLCByYW5nZTogcmFuZ2UgfTtcclxuICAgIH1cclxuICAgIExvY2F0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtMb2NhdGlvbl0oI0xvY2F0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiAoSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUudXJpKSk7XHJcbiAgICB9XHJcbiAgICBMb2NhdGlvbi5pcyA9IGlzO1xyXG59KShMb2NhdGlvbiB8fCAoTG9jYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIExvY2F0aW9uTGluayBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0xvY2F0aW9uTGlua10oI0xvY2F0aW9uTGluaykgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIExvY2F0aW9uTGluaztcclxuKGZ1bmN0aW9uIChMb2NhdGlvbkxpbmspIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIExvY2F0aW9uTGluayBsaXRlcmFsLlxyXG4gICAgICogQHBhcmFtIHRhcmdldFVyaSBUaGUgZGVmaW5pdGlvbidzIHVyaS5cclxuICAgICAqIEBwYXJhbSB0YXJnZXRSYW5nZSBUaGUgZnVsbCByYW5nZSBvZiB0aGUgZGVmaW5pdGlvbi5cclxuICAgICAqIEBwYXJhbSB0YXJnZXRTZWxlY3Rpb25SYW5nZSBUaGUgc3BhbiBvZiB0aGUgc3ltYm9sIGRlZmluaXRpb24gYXQgdGhlIHRhcmdldC5cclxuICAgICAqIEBwYXJhbSBvcmlnaW5TZWxlY3Rpb25SYW5nZSBUaGUgc3BhbiBvZiB0aGUgc3ltYm9sIGJlaW5nIGRlZmluZWQgaW4gdGhlIG9yaWdpbmF0aW5nIHNvdXJjZSBmaWxlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGFyZ2V0VXJpLCB0YXJnZXRSYW5nZSwgdGFyZ2V0U2VsZWN0aW9uUmFuZ2UsIG9yaWdpblNlbGVjdGlvblJhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGFyZ2V0VXJpOiB0YXJnZXRVcmksIHRhcmdldFJhbmdlOiB0YXJnZXRSYW5nZSwgdGFyZ2V0U2VsZWN0aW9uUmFuZ2U6IHRhcmdldFNlbGVjdGlvblJhbmdlLCBvcmlnaW5TZWxlY3Rpb25SYW5nZTogb3JpZ2luU2VsZWN0aW9uUmFuZ2UgfTtcclxuICAgIH1cclxuICAgIExvY2F0aW9uTGluay5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbTG9jYXRpb25MaW5rXSgjTG9jYXRpb25MaW5rKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnRhcmdldFJhbmdlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRhcmdldFVyaSlcclxuICAgICAgICAgICAgJiYgKFJhbmdlLmlzKGNhbmRpZGF0ZS50YXJnZXRTZWxlY3Rpb25SYW5nZSkgfHwgSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS50YXJnZXRTZWxlY3Rpb25SYW5nZSkpXHJcbiAgICAgICAgICAgICYmIChSYW5nZS5pcyhjYW5kaWRhdGUub3JpZ2luU2VsZWN0aW9uUmFuZ2UpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUub3JpZ2luU2VsZWN0aW9uUmFuZ2UpKTtcclxuICAgIH1cclxuICAgIExvY2F0aW9uTGluay5pcyA9IGlzO1xyXG59KShMb2NhdGlvbkxpbmsgfHwgKExvY2F0aW9uTGluayA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29sb3IgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2xvcl0oI0NvbG9yKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29sb3I7XHJcbihmdW5jdGlvbiAoQ29sb3IpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2xvciBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWQ6IHJlZCxcclxuICAgICAgICAgICAgZ3JlZW46IGdyZWVuLFxyXG4gICAgICAgICAgICBibHVlOiBibHVlLFxyXG4gICAgICAgICAgICBhbHBoYTogYWxwaGEsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIENvbG9yLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb2xvcl0oI0NvbG9yKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5udW1iZXIoY2FuZGlkYXRlLnJlZClcclxuICAgICAgICAgICAgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5ncmVlbilcclxuICAgICAgICAgICAgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5ibHVlKVxyXG4gICAgICAgICAgICAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmFscGhhKTtcclxuICAgIH1cclxuICAgIENvbG9yLmlzID0gaXM7XHJcbn0pKENvbG9yIHx8IChDb2xvciA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29sb3JJbmZvcm1hdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvbG9ySW5mb3JtYXRpb25dKCNDb2xvckluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29sb3JJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChDb2xvckluZm9ybWF0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29sb3JJbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIGNvbG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxyXG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIENvbG9ySW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbG9ySW5mb3JtYXRpb25dKCNDb2xvckluZm9ybWF0aW9uKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBSYW5nZS5pcyhjYW5kaWRhdGUucmFuZ2UpICYmIENvbG9yLmlzKGNhbmRpZGF0ZS5jb2xvcik7XHJcbiAgICB9XHJcbiAgICBDb2xvckluZm9ybWF0aW9uLmlzID0gaXM7XHJcbn0pKENvbG9ySW5mb3JtYXRpb24gfHwgKENvbG9ySW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIENvbG9yIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbQ29sb3JQcmVzZW50YXRpb25dKCNDb2xvclByZXNlbnRhdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbG9yUHJlc2VudGF0aW9uO1xyXG4oZnVuY3Rpb24gKENvbG9yUHJlc2VudGF0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29sb3JJbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobGFiZWwsIHRleHRFZGl0LCBhZGRpdGlvbmFsVGV4dEVkaXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxyXG4gICAgICAgICAgICB0ZXh0RWRpdDogdGV4dEVkaXQsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUZXh0RWRpdHM6IGFkZGl0aW9uYWxUZXh0RWRpdHMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIENvbG9yUHJlc2VudGF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb2xvckluZm9ybWF0aW9uXSgjQ29sb3JJbmZvcm1hdGlvbikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuc3RyaW5nKGNhbmRpZGF0ZS5sYWJlbClcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUudGV4dEVkaXQpIHx8IFRleHRFZGl0LmlzKGNhbmRpZGF0ZSkpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmFkZGl0aW9uYWxUZXh0RWRpdHMpIHx8IElzLnR5cGVkQXJyYXkoY2FuZGlkYXRlLmFkZGl0aW9uYWxUZXh0RWRpdHMsIFRleHRFZGl0LmlzKSk7XHJcbiAgICB9XHJcbiAgICBDb2xvclByZXNlbnRhdGlvbi5pcyA9IGlzO1xyXG59KShDb2xvclByZXNlbnRhdGlvbiB8fCAoQ29sb3JQcmVzZW50YXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogRW51bSBvZiBrbm93biByYW5nZSBraW5kc1xyXG4gKi9cclxuZXhwb3J0IHZhciBGb2xkaW5nUmFuZ2VLaW5kO1xyXG4oZnVuY3Rpb24gKEZvbGRpbmdSYW5nZUtpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogRm9sZGluZyByYW5nZSBmb3IgYSBjb21tZW50XHJcbiAgICAgKi9cclxuICAgIEZvbGRpbmdSYW5nZUtpbmRbXCJDb21tZW50XCJdID0gXCJjb21tZW50XCI7XHJcbiAgICAvKipcclxuICAgICAqIEZvbGRpbmcgcmFuZ2UgZm9yIGEgaW1wb3J0cyBvciBpbmNsdWRlc1xyXG4gICAgICovXHJcbiAgICBGb2xkaW5nUmFuZ2VLaW5kW1wiSW1wb3J0c1wiXSA9IFwiaW1wb3J0c1wiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGb2xkaW5nIHJhbmdlIGZvciBhIHJlZ2lvbiAoZS5nLiBgI3JlZ2lvbmApXHJcbiAgICAgKi9cclxuICAgIEZvbGRpbmdSYW5nZUtpbmRbXCJSZWdpb25cIl0gPSBcInJlZ2lvblwiO1xyXG59KShGb2xkaW5nUmFuZ2VLaW5kIHx8IChGb2xkaW5nUmFuZ2VLaW5kID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBmb2xkaW5nIHJhbmdlIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRm9sZGluZ1JhbmdlXSgjRm9sZGluZ1JhbmdlKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRm9sZGluZ1JhbmdlO1xyXG4oZnVuY3Rpb24gKEZvbGRpbmdSYW5nZSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IEZvbGRpbmdSYW5nZSBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoc3RhcnRMaW5lLCBlbmRMaW5lLCBzdGFydENoYXJhY3RlciwgZW5kQ2hhcmFjdGVyLCBraW5kKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgc3RhcnRMaW5lOiBzdGFydExpbmUsXHJcbiAgICAgICAgICAgIGVuZExpbmU6IGVuZExpbmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHN0YXJ0Q2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuc3RhcnRDaGFyYWN0ZXIgPSBzdGFydENoYXJhY3RlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoZW5kQ2hhcmFjdGVyKSkge1xyXG4gICAgICAgICAgICByZXN1bHQuZW5kQ2hhcmFjdGVyID0gZW5kQ2hhcmFjdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChraW5kKSkge1xyXG4gICAgICAgICAgICByZXN1bHQua2luZCA9IGtpbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBGb2xkaW5nUmFuZ2UuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0ZvbGRpbmdSYW5nZV0oI0ZvbGRpbmdSYW5nZSkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMubnVtYmVyKGNhbmRpZGF0ZS5zdGFydExpbmUpICYmIElzLm51bWJlcihjYW5kaWRhdGUuc3RhcnRMaW5lKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5zdGFydENoYXJhY3RlcikgfHwgSXMubnVtYmVyKGNhbmRpZGF0ZS5zdGFydENoYXJhY3RlcikpXHJcbiAgICAgICAgICAgICYmIChJcy51bmRlZmluZWQoY2FuZGlkYXRlLmVuZENoYXJhY3RlcikgfHwgSXMubnVtYmVyKGNhbmRpZGF0ZS5lbmRDaGFyYWN0ZXIpKVxyXG4gICAgICAgICAgICAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5raW5kKSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmtpbmQpKTtcclxuICAgIH1cclxuICAgIEZvbGRpbmdSYW5nZS5pcyA9IGlzO1xyXG59KShGb2xkaW5nUmFuZ2UgfHwgKEZvbGRpbmdSYW5nZSA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb25dKCNEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbjtcclxuKGZ1bmN0aW9uIChEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbiBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobG9jYXRpb24sIG1lc3NhZ2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbi5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRGlhZ25vc3RpY1JlbGF0ZWRJbmZvcm1hdGlvbl0oI0RpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24pIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBMb2NhdGlvbi5pcyhjYW5kaWRhdGUubG9jYXRpb24pICYmIElzLnN0cmluZyhjYW5kaWRhdGUubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBEaWFnbm9zdGljUmVsYXRlZEluZm9ybWF0aW9uLmlzID0gaXM7XHJcbn0pKERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24gfHwgKERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIGRpYWdub3N0aWMncyBzZXZlcml0eS5cclxuICovXHJcbmV4cG9ydCB2YXIgRGlhZ25vc3RpY1NldmVyaXR5O1xyXG4oZnVuY3Rpb24gKERpYWdub3N0aWNTZXZlcml0eSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIGFuIGVycm9yLlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuRXJyb3IgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIGEgd2FybmluZy5cclxuICAgICAqL1xyXG4gICAgRGlhZ25vc3RpY1NldmVyaXR5Lldhcm5pbmcgPSAyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIGFuIGluZm9ybWF0aW9uLlxyXG4gICAgICovXHJcbiAgICBEaWFnbm9zdGljU2V2ZXJpdHkuSW5mb3JtYXRpb24gPSAzO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXBvcnRzIGEgaGludC5cclxuICAgICAqL1xyXG4gICAgRGlhZ25vc3RpY1NldmVyaXR5LkhpbnQgPSA0O1xyXG59KShEaWFnbm9zdGljU2V2ZXJpdHkgfHwgKERpYWdub3N0aWNTZXZlcml0eSA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgRGlhZ25vc3RpYyBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0RpYWdub3N0aWNdKCNEaWFnbm9zdGljKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRGlhZ25vc3RpYztcclxuKGZ1bmN0aW9uIChEaWFnbm9zdGljKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRGlhZ25vc3RpYyBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocmFuZ2UsIG1lc3NhZ2UsIHNldmVyaXR5LCBjb2RlLCBzb3VyY2UsIHJlbGF0ZWRJbmZvcm1hdGlvbikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHJhbmdlOiByYW5nZSwgbWVzc2FnZTogbWVzc2FnZSB9O1xyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHNldmVyaXR5KSkge1xyXG4gICAgICAgICAgICByZXN1bHQuc2V2ZXJpdHkgPSBzZXZlcml0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQoY29kZSkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXMuZGVmaW5lZChzb3VyY2UpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKHJlbGF0ZWRJbmZvcm1hdGlvbikpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnJlbGF0ZWRJbmZvcm1hdGlvbiA9IHJlbGF0ZWRJbmZvcm1hdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIERpYWdub3N0aWMuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0RpYWdub3N0aWNdKCNEaWFnbm9zdGljKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSlcclxuICAgICAgICAgICAgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKVxyXG4gICAgICAgICAgICAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICYmIChJcy5udW1iZXIoY2FuZGlkYXRlLnNldmVyaXR5KSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLnNldmVyaXR5KSlcclxuICAgICAgICAgICAgJiYgKElzLm51bWJlcihjYW5kaWRhdGUuY29kZSkgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5jb2RlKSB8fCBJcy51bmRlZmluZWQoY2FuZGlkYXRlLmNvZGUpKVxyXG4gICAgICAgICAgICAmJiAoSXMuc3RyaW5nKGNhbmRpZGF0ZS5zb3VyY2UpIHx8IElzLnVuZGVmaW5lZChjYW5kaWRhdGUuc291cmNlKSlcclxuICAgICAgICAgICAgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUucmVsYXRlZEluZm9ybWF0aW9uKSB8fCBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5yZWxhdGVkSW5mb3JtYXRpb24sIERpYWdub3N0aWNSZWxhdGVkSW5mb3JtYXRpb24uaXMpKTtcclxuICAgIH1cclxuICAgIERpYWdub3N0aWMuaXMgPSBpcztcclxufSkoRGlhZ25vc3RpYyB8fCAoRGlhZ25vc3RpYyA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29tbWFuZCBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvbW1hbmRdKCNDb21tYW5kKSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29tbWFuZDtcclxuKGZ1bmN0aW9uIChDb21tYW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgQ29tbWFuZCBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodGl0bGUsIGNvbW1hbmQpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHRpdGxlOiB0aXRsZSwgY29tbWFuZDogY29tbWFuZCB9O1xyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGFyZ3MpICYmIGFyZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQuYXJndW1lbnRzID0gYXJncztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENvbW1hbmQuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvbW1hbmRdKCNDb21tYW5kKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS50aXRsZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS5jb21tYW5kKTtcclxuICAgIH1cclxuICAgIENvbW1hbmQuaXMgPSBpcztcclxufSkoQ29tbWFuZCB8fCAoQ29tbWFuZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgVGV4dEVkaXQgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgcmVwbGFjZSxcclxuICogaW5zZXJ0IGFuZCBkZWxldGUgZWRpdHMgbW9yZSBlYXNpbHkuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFRleHRFZGl0O1xyXG4oZnVuY3Rpb24gKFRleHRFZGl0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSByZXBsYWNlIHRleHQgZWRpdC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2Ugb2YgdGV4dCB0byBiZSByZXBsYWNlZC5cclxuICAgICAqIEBwYXJhbSBuZXdUZXh0IFRoZSBuZXcgdGV4dC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVwbGFjZShyYW5nZSwgbmV3VGV4dCkge1xyXG4gICAgICAgIHJldHVybiB7IHJhbmdlOiByYW5nZSwgbmV3VGV4dDogbmV3VGV4dCB9O1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXQucmVwbGFjZSA9IHJlcGxhY2U7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBpbnNlcnQgdGV4dCBlZGl0LlxyXG4gICAgICogQHBhcmFtIHBvc2l0aW9uIFRoZSBwb3NpdGlvbiB0byBpbnNlcnQgdGhlIHRleHQgYXQuXHJcbiAgICAgKiBAcGFyYW0gbmV3VGV4dCBUaGUgdGV4dCB0byBiZSBpbnNlcnRlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5zZXJ0KHBvc2l0aW9uLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHsgc3RhcnQ6IHBvc2l0aW9uLCBlbmQ6IHBvc2l0aW9uIH0sIG5ld1RleHQ6IG5ld1RleHQgfTtcclxuICAgIH1cclxuICAgIFRleHRFZGl0Lmluc2VydCA9IGluc2VydDtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIGRlbGV0ZSB0ZXh0IGVkaXQuXHJcbiAgICAgKiBAcGFyYW0gcmFuZ2UgVGhlIHJhbmdlIG9mIHRleHQgdG8gYmUgZGVsZXRlZC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZGVsKHJhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcmFuZ2U6IHJhbmdlLCBuZXdUZXh0OiAnJyB9O1xyXG4gICAgfVxyXG4gICAgVGV4dEVkaXQuZGVsID0gZGVsO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLm9iamVjdExpdGVyYWwoY2FuZGlkYXRlKVxyXG4gICAgICAgICAgICAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLm5ld1RleHQpXHJcbiAgICAgICAgICAgICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSk7XHJcbiAgICB9XHJcbiAgICBUZXh0RWRpdC5pcyA9IGlzO1xyXG59KShUZXh0RWRpdCB8fCAoVGV4dEVkaXQgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFRleHREb2N1bWVudEVkaXQgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGVcclxuICogYW4gZWRpdCB0aGF0IG1hbmlwdWxhdGVzIGEgdGV4dCBkb2N1bWVudC5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50RWRpdDtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRFZGl0KSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgYFRleHREb2N1bWVudEVkaXRgXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0ZXh0RG9jdW1lbnQsIGVkaXRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGV4dERvY3VtZW50OiB0ZXh0RG9jdW1lbnQsIGVkaXRzOiBlZGl0cyB9O1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50RWRpdC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpXHJcbiAgICAgICAgICAgICYmIFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIuaXMoY2FuZGlkYXRlLnRleHREb2N1bWVudClcclxuICAgICAgICAgICAgJiYgQXJyYXkuaXNBcnJheShjYW5kaWRhdGUuZWRpdHMpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50RWRpdC5pcyA9IGlzO1xyXG59KShUZXh0RG9jdW1lbnRFZGl0IHx8IChUZXh0RG9jdW1lbnRFZGl0ID0ge30pKTtcclxuZXhwb3J0IHZhciBDcmVhdGVGaWxlO1xyXG4oZnVuY3Rpb24gKENyZWF0ZUZpbGUpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBraW5kOiAnY3JlYXRlJyxcclxuICAgICAgICAgICAgdXJpOiB1cmlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zICE9PSB2b2lkIDAgJiYgKG9wdGlvbnMub3ZlcndyaXRlICE9PSB2b2lkIDAgfHwgb3B0aW9ucy5pZ25vcmVJZkV4aXN0cyAhPT0gdm9pZCAwKSkge1xyXG4gICAgICAgICAgICByZXN1bHQub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBDcmVhdGVGaWxlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLmtpbmQgPT09ICdjcmVhdGUnICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLm9wdGlvbnMgPT09IHZvaWQgMCB8fFxyXG4gICAgICAgICAgICAgICAgKChjYW5kaWRhdGUub3B0aW9ucy5vdmVyd3JpdGUgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLm92ZXJ3cml0ZSkpICYmIChjYW5kaWRhdGUub3B0aW9ucy5pZ25vcmVJZkV4aXN0cyA9PT0gdm9pZCAwIHx8IElzLmJvb2xlYW4oY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZFeGlzdHMpKSkpO1xyXG4gICAgfVxyXG4gICAgQ3JlYXRlRmlsZS5pcyA9IGlzO1xyXG59KShDcmVhdGVGaWxlIHx8IChDcmVhdGVGaWxlID0ge30pKTtcclxuZXhwb3J0IHZhciBSZW5hbWVGaWxlO1xyXG4oZnVuY3Rpb24gKFJlbmFtZUZpbGUpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShvbGRVcmksIG5ld1VyaSwgb3B0aW9ucykge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdyZW5hbWUnLFxyXG4gICAgICAgICAgICBvbGRVcmk6IG9sZFVyaSxcclxuICAgICAgICAgICAgbmV3VXJpOiBuZXdVcmlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChvcHRpb25zICE9PSB2b2lkIDAgJiYgKG9wdGlvbnMub3ZlcndyaXRlICE9PSB2b2lkIDAgfHwgb3B0aW9ucy5pZ25vcmVJZkV4aXN0cyAhPT0gdm9pZCAwKSkge1xyXG4gICAgICAgICAgICByZXN1bHQub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBSZW5hbWVGaWxlLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiYgY2FuZGlkYXRlLmtpbmQgPT09ICdyZW5hbWUnICYmIElzLnN0cmluZyhjYW5kaWRhdGUub2xkVXJpKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLm5ld1VyaSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5vcHRpb25zID09PSB2b2lkIDAgfHxcclxuICAgICAgICAgICAgICAgICgoY2FuZGlkYXRlLm9wdGlvbnMub3ZlcndyaXRlID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5vdmVyd3JpdGUpKSAmJiAoY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZFeGlzdHMgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmRXhpc3RzKSkpKTtcclxuICAgIH1cclxuICAgIFJlbmFtZUZpbGUuaXMgPSBpcztcclxufSkoUmVuYW1lRmlsZSB8fCAoUmVuYW1lRmlsZSA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgRGVsZXRlRmlsZTtcclxuKGZ1bmN0aW9uIChEZWxldGVGaWxlKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAga2luZDogJ2RlbGV0ZScsXHJcbiAgICAgICAgICAgIHVyaTogdXJpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob3B0aW9ucyAhPT0gdm9pZCAwICYmIChvcHRpb25zLnJlY3Vyc2l2ZSAhPT0gdm9pZCAwIHx8IG9wdGlvbnMuaWdub3JlSWZOb3RFeGlzdHMgIT09IHZvaWQgMCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRGVsZXRlRmlsZS5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmIGNhbmRpZGF0ZS5raW5kID09PSAnZGVsZXRlJyAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5vcHRpb25zID09PSB2b2lkIDAgfHxcclxuICAgICAgICAgICAgICAgICgoY2FuZGlkYXRlLm9wdGlvbnMucmVjdXJzaXZlID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUub3B0aW9ucy5yZWN1cnNpdmUpKSAmJiAoY2FuZGlkYXRlLm9wdGlvbnMuaWdub3JlSWZOb3RFeGlzdHMgPT09IHZvaWQgMCB8fCBJcy5ib29sZWFuKGNhbmRpZGF0ZS5vcHRpb25zLmlnbm9yZUlmTm90RXhpc3RzKSkpKTtcclxuICAgIH1cclxuICAgIERlbGV0ZUZpbGUuaXMgPSBpcztcclxufSkoRGVsZXRlRmlsZSB8fCAoRGVsZXRlRmlsZSA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgV29ya3NwYWNlRWRpdDtcclxuKGZ1bmN0aW9uIChXb3Jrc3BhY2VFZGl0KSB7XHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuY2hhbmdlcyAhPT0gdm9pZCAwIHx8IGNhbmRpZGF0ZS5kb2N1bWVudENoYW5nZXMgIT09IHZvaWQgMCkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5kb2N1bWVudENoYW5nZXMgPT09IHZvaWQgMCB8fCBjYW5kaWRhdGUuZG9jdW1lbnRDaGFuZ2VzLmV2ZXJ5KGZ1bmN0aW9uIChjaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChJcy5zdHJpbmcoY2hhbmdlLmtpbmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENyZWF0ZUZpbGUuaXMoY2hhbmdlKSB8fCBSZW5hbWVGaWxlLmlzKGNoYW5nZSkgfHwgRGVsZXRlRmlsZS5pcyhjaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFRleHREb2N1bWVudEVkaXQuaXMoY2hhbmdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgV29ya3NwYWNlRWRpdC5pcyA9IGlzO1xyXG59KShXb3Jrc3BhY2VFZGl0IHx8IChXb3Jrc3BhY2VFZGl0ID0ge30pKTtcclxudmFyIFRleHRFZGl0Q2hhbmdlSW1wbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRleHRFZGl0Q2hhbmdlSW1wbChlZGl0cykge1xyXG4gICAgICAgIHRoaXMuZWRpdHMgPSBlZGl0cztcclxuICAgIH1cclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCBuZXdUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5lZGl0cy5wdXNoKFRleHRFZGl0Lmluc2VydChwb3NpdGlvbiwgbmV3VGV4dCkpO1xyXG4gICAgfTtcclxuICAgIFRleHRFZGl0Q2hhbmdlSW1wbC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChyYW5nZSwgbmV3VGV4dCkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMucHVzaChUZXh0RWRpdC5yZXBsYWNlKHJhbmdlLCBuZXdUZXh0KSk7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAocmFuZ2UpIHtcclxuICAgICAgICB0aGlzLmVkaXRzLnB1c2goVGV4dEVkaXQuZGVsKHJhbmdlKSk7XHJcbiAgICB9O1xyXG4gICAgVGV4dEVkaXRDaGFuZ2VJbXBsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZWRpdCkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMucHVzaChlZGl0KTtcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lZGl0cztcclxuICAgIH07XHJcbiAgICBUZXh0RWRpdENoYW5nZUltcGwucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZWRpdHMuc3BsaWNlKDAsIHRoaXMuZWRpdHMubGVuZ3RoKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGV4dEVkaXRDaGFuZ2VJbXBsO1xyXG59KCkpO1xyXG4vKipcclxuICogQSB3b3Jrc3BhY2UgY2hhbmdlIGhlbHBzIGNvbnN0cnVjdGluZyBjaGFuZ2VzIHRvIGEgd29ya3NwYWNlLlxyXG4gKi9cclxudmFyIFdvcmtzcGFjZUNoYW5nZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFdvcmtzcGFjZUNoYW5nZSh3b3Jrc3BhY2VFZGl0KSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLl90ZXh0RWRpdENoYW5nZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIGlmICh3b3Jrc3BhY2VFZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQgPSB3b3Jrc3BhY2VFZGl0O1xyXG4gICAgICAgICAgICBpZiAod29ya3NwYWNlRWRpdC5kb2N1bWVudENoYW5nZXMpIHtcclxuICAgICAgICAgICAgICAgIHdvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKGNoYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChUZXh0RG9jdW1lbnRFZGl0LmlzKGNoYW5nZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRFZGl0Q2hhbmdlID0gbmV3IFRleHRFZGl0Q2hhbmdlSW1wbChjaGFuZ2UuZWRpdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW2NoYW5nZS50ZXh0RG9jdW1lbnQudXJpXSA9IHRleHRFZGl0Q2hhbmdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHdvcmtzcGFjZUVkaXQuY2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMod29ya3NwYWNlRWRpdC5jaGFuZ2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dEVkaXRDaGFuZ2UgPSBuZXcgVGV4dEVkaXRDaGFuZ2VJbXBsKHdvcmtzcGFjZUVkaXQuY2hhbmdlc1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW2tleV0gPSB0ZXh0RWRpdENoYW5nZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdvcmtzcGFjZUNoYW5nZS5wcm90b3R5cGUsIFwiZWRpdFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgdW5kZXJseWluZyBbV29ya3NwYWNlRWRpdF0oI1dvcmtzcGFjZUVkaXQpIGxpdGVyYWxcclxuICAgICAgICAgKiB1c2UgdG8gYmUgcmV0dXJuZWQgZnJvbSBhIHdvcmtzcGFjZSBlZGl0IG9wZXJhdGlvbiBsaWtlIHJlbmFtZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtzcGFjZUVkaXQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLmdldFRleHRFZGl0Q2hhbmdlID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGlmIChWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmlzKGtleSkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50Q2hhbmdlczogW11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdXb3Jrc3BhY2UgZWRpdCBpcyBub3QgY29uZmlndXJlZCBmb3IgZG9jdW1lbnQgY2hhbmdlcy4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGV4dERvY3VtZW50ID0ga2V5O1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fdGV4dEVkaXRDaGFuZ2VzW3RleHREb2N1bWVudC51cmldO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVkaXRzID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dERvY3VtZW50RWRpdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RG9jdW1lbnQ6IHRleHREb2N1bWVudCxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0czogZWRpdHNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0LmRvY3VtZW50Q2hhbmdlcy5wdXNoKHRleHREb2N1bWVudEVkaXQpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFRleHRFZGl0Q2hhbmdlSW1wbChlZGl0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0RWRpdENoYW5nZXNbdGV4dERvY3VtZW50LnVyaV0gPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fd29ya3NwYWNlRWRpdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VzOiBPYmplY3QuY3JlYXRlKG51bGwpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fd29ya3NwYWNlRWRpdC5jaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dvcmtzcGFjZSBlZGl0IGlzIG5vdCBjb25maWd1cmVkIGZvciBub3JtYWwgdGV4dCBlZGl0IGNoYW5nZXMuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3RleHRFZGl0Q2hhbmdlc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVkaXRzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLl93b3Jrc3BhY2VFZGl0LmNoYW5nZXNba2V5XSA9IGVkaXRzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IFRleHRFZGl0Q2hhbmdlSW1wbChlZGl0cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90ZXh0RWRpdENoYW5nZXNba2V5XSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLmNyZWF0ZUZpbGUgPSBmdW5jdGlvbiAodXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0RvY3VtZW50Q2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLnB1c2goQ3JlYXRlRmlsZS5jcmVhdGUodXJpLCBvcHRpb25zKSk7XHJcbiAgICB9O1xyXG4gICAgV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZS5yZW5hbWVGaWxlID0gZnVuY3Rpb24gKG9sZFVyaSwgbmV3VXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0RvY3VtZW50Q2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLnB1c2goUmVuYW1lRmlsZS5jcmVhdGUob2xkVXJpLCBuZXdVcmksIG9wdGlvbnMpKTtcclxuICAgIH07XHJcbiAgICBXb3Jrc3BhY2VDaGFuZ2UucHJvdG90eXBlLmRlbGV0ZUZpbGUgPSBmdW5jdGlvbiAodXJpLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0RvY3VtZW50Q2hhbmdlcygpO1xyXG4gICAgICAgIHRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzLnB1c2goRGVsZXRlRmlsZS5jcmVhdGUodXJpLCBvcHRpb25zKSk7XHJcbiAgICB9O1xyXG4gICAgV29ya3NwYWNlQ2hhbmdlLnByb3RvdHlwZS5jaGVja0RvY3VtZW50Q2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3dvcmtzcGFjZUVkaXQgfHwgIXRoaXMuX3dvcmtzcGFjZUVkaXQuZG9jdW1lbnRDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV29ya3NwYWNlIGVkaXQgaXMgbm90IGNvbmZpZ3VyZWQgZm9yIGRvY3VtZW50IGNoYW5nZXMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBXb3Jrc3BhY2VDaGFuZ2U7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFdvcmtzcGFjZUNoYW5nZSB9O1xyXG4vKipcclxuICogVGhlIFRleHREb2N1bWVudElkZW50aWZpZXIgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtUZXh0RG9jdW1lbnRJZGVudGlmaWVyXSgjVGV4dERvY3VtZW50SWRlbnRpZmllcikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFRleHREb2N1bWVudElkZW50aWZpZXI7XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50SWRlbnRpZmllcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFRleHREb2N1bWVudElkZW50aWZpZXIgbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodXJpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgdXJpOiB1cmkgfTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudElkZW50aWZpZXIuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW1RleHREb2N1bWVudElkZW50aWZpZXJdKCNUZXh0RG9jdW1lbnRJZGVudGlmaWVyKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS51cmkpO1xyXG4gICAgfVxyXG4gICAgVGV4dERvY3VtZW50SWRlbnRpZmllci5pcyA9IGlzO1xyXG59KShUZXh0RG9jdW1lbnRJZGVudGlmaWVyIHx8IChUZXh0RG9jdW1lbnRJZGVudGlmaWVyID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcl0oI1ZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyO1xyXG4oZnVuY3Rpb24gKFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyIGxpdGVyYWwuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBkb2N1bWVudCdzIHVyaS5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdGV4dC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgdmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpLCB2ZXJzaW9uOiB2ZXJzaW9uIH07XHJcbiAgICB9XHJcbiAgICBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyXSgjVmVyc2lvbmVkVGV4dERvY3VtZW50SWRlbnRpZmllcikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJiAoY2FuZGlkYXRlLnZlcnNpb24gPT09IG51bGwgfHwgSXMubnVtYmVyKGNhbmRpZGF0ZS52ZXJzaW9uKSk7XHJcbiAgICB9XHJcbiAgICBWZXJzaW9uZWRUZXh0RG9jdW1lbnRJZGVudGlmaWVyLmlzID0gaXM7XHJcbn0pKFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgfHwgKFZlcnNpb25lZFRleHREb2N1bWVudElkZW50aWZpZXIgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFRleHREb2N1bWVudEl0ZW0gbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtUZXh0RG9jdW1lbnRJdGVtXSgjVGV4dERvY3VtZW50SXRlbSkgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFRleHREb2N1bWVudEl0ZW07XHJcbihmdW5jdGlvbiAoVGV4dERvY3VtZW50SXRlbSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFRleHREb2N1bWVudEl0ZW0gbGl0ZXJhbC5cclxuICAgICAqIEBwYXJhbSB1cmkgVGhlIGRvY3VtZW50J3MgdXJpLlxyXG4gICAgICogQHBhcmFtIGxhbmd1YWdlSWQgVGhlIGRvY3VtZW50J3MgbGFuZ3VhZ2UgaWRlbnRpZmllci5cclxuICAgICAqIEBwYXJhbSB2ZXJzaW9uIFRoZSBkb2N1bWVudCdzIHZlcnNpb24gbnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHRleHQgVGhlIGRvY3VtZW50J3MgdGV4dC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHVyaSwgbGFuZ3VhZ2VJZCwgdmVyc2lvbiwgdGV4dCkge1xyXG4gICAgICAgIHJldHVybiB7IHVyaTogdXJpLCBsYW5ndWFnZUlkOiBsYW5ndWFnZUlkLCB2ZXJzaW9uOiB2ZXJzaW9uLCB0ZXh0OiB0ZXh0IH07XHJcbiAgICB9XHJcbiAgICBUZXh0RG9jdW1lbnRJdGVtLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtUZXh0RG9jdW1lbnRJdGVtXSgjVGV4dERvY3VtZW50SXRlbSkgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudXJpKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLmxhbmd1YWdlSWQpICYmIElzLm51bWJlcihjYW5kaWRhdGUudmVyc2lvbikgJiYgSXMuc3RyaW5nKGNhbmRpZGF0ZS50ZXh0KTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudEl0ZW0uaXMgPSBpcztcclxufSkoVGV4dERvY3VtZW50SXRlbSB8fCAoVGV4dERvY3VtZW50SXRlbSA9IHt9KSk7XHJcbi8qKlxyXG4gKiBEZXNjcmliZXMgdGhlIGNvbnRlbnQgdHlwZSB0aGF0IGEgY2xpZW50IHN1cHBvcnRzIGluIHZhcmlvdXNcclxuICogcmVzdWx0IGxpdGVyYWxzIGxpa2UgYEhvdmVyYCwgYFBhcmFtZXRlckluZm9gIG9yIGBDb21wbGV0aW9uSXRlbWAuXHJcbiAqXHJcbiAqIFBsZWFzZSBub3RlIHRoYXQgYE1hcmt1cEtpbmRzYCBtdXN0IG5vdCBzdGFydCB3aXRoIGEgYCRgLiBUaGlzIGtpbmRzXHJcbiAqIGFyZSByZXNlcnZlZCBmb3IgaW50ZXJuYWwgdXNhZ2UuXHJcbiAqL1xyXG5leHBvcnQgdmFyIE1hcmt1cEtpbmQ7XHJcbihmdW5jdGlvbiAoTWFya3VwS2luZCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBQbGFpbiB0ZXh0IGlzIHN1cHBvcnRlZCBhcyBhIGNvbnRlbnQgZm9ybWF0XHJcbiAgICAgKi9cclxuICAgIE1hcmt1cEtpbmQuUGxhaW5UZXh0ID0gJ3BsYWludGV4dCc7XHJcbiAgICAvKipcclxuICAgICAqIE1hcmtkb3duIGlzIHN1cHBvcnRlZCBhcyBhIGNvbnRlbnQgZm9ybWF0XHJcbiAgICAgKi9cclxuICAgIE1hcmt1cEtpbmQuTWFya2Rvd24gPSAnbWFya2Rvd24nO1xyXG59KShNYXJrdXBLaW5kIHx8IChNYXJrdXBLaW5kID0ge30pKTtcclxuKGZ1bmN0aW9uIChNYXJrdXBLaW5kKSB7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIHZhbHVlIG9mIHRoZSBbTWFya3VwS2luZF0oI01hcmt1cEtpbmQpIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgPT09IE1hcmt1cEtpbmQuUGxhaW5UZXh0IHx8IGNhbmRpZGF0ZSA9PT0gTWFya3VwS2luZC5NYXJrZG93bjtcclxuICAgIH1cclxuICAgIE1hcmt1cEtpbmQuaXMgPSBpcztcclxufSkoTWFya3VwS2luZCB8fCAoTWFya3VwS2luZCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgTWFya3VwQ29udGVudDtcclxuKGZ1bmN0aW9uIChNYXJrdXBDb250ZW50KSB7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiB2YWx1ZSBjb25mb3JtcyB0byB0aGUgW01hcmt1cENvbnRlbnRdKCNNYXJrdXBDb250ZW50KSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5vYmplY3RMaXRlcmFsKHZhbHVlKSAmJiBNYXJrdXBLaW5kLmlzKGNhbmRpZGF0ZS5raW5kKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE1hcmt1cENvbnRlbnQuaXMgPSBpcztcclxufSkoTWFya3VwQ29udGVudCB8fCAoTWFya3VwQ29udGVudCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUga2luZCBvZiBhIGNvbXBsZXRpb24gZW50cnkuXHJcbiAqL1xyXG5leHBvcnQgdmFyIENvbXBsZXRpb25JdGVtS2luZDtcclxuKGZ1bmN0aW9uIChDb21wbGV0aW9uSXRlbUtpbmQpIHtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5UZXh0ID0gMTtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5NZXRob2QgPSAyO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uID0gMztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Db25zdHJ1Y3RvciA9IDQ7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRmllbGQgPSA1O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlID0gNjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5DbGFzcyA9IDc7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlID0gODtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5Nb2R1bGUgPSA5O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlByb3BlcnR5ID0gMTA7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuVW5pdCA9IDExO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlZhbHVlID0gMTI7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRW51bSA9IDEzO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQgPSAxNDtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0ID0gMTU7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuQ29sb3IgPSAxNjtcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5GaWxlID0gMTc7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuUmVmZXJlbmNlID0gMTg7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRm9sZGVyID0gMTk7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRW51bU1lbWJlciA9IDIwO1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0YW50ID0gMjE7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuU3RydWN0ID0gMjI7XHJcbiAgICBDb21wbGV0aW9uSXRlbUtpbmQuRXZlbnQgPSAyMztcclxuICAgIENvbXBsZXRpb25JdGVtS2luZC5PcGVyYXRvciA9IDI0O1xyXG4gICAgQ29tcGxldGlvbkl0ZW1LaW5kLlR5cGVQYXJhbWV0ZXIgPSAyNTtcclxufSkoQ29tcGxldGlvbkl0ZW1LaW5kIHx8IChDb21wbGV0aW9uSXRlbUtpbmQgPSB7fSkpO1xyXG4vKipcclxuICogRGVmaW5lcyB3aGV0aGVyIHRoZSBpbnNlcnQgdGV4dCBpbiBhIGNvbXBsZXRpb24gaXRlbSBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXNcclxuICogcGxhaW4gdGV4dCBvciBhIHNuaXBwZXQuXHJcbiAqL1xyXG5leHBvcnQgdmFyIEluc2VydFRleHRGb3JtYXQ7XHJcbihmdW5jdGlvbiAoSW5zZXJ0VGV4dEZvcm1hdCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgcHJpbWFyeSB0ZXh0IHRvIGJlIGluc2VydGVkIGlzIHRyZWF0ZWQgYXMgYSBwbGFpbiBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIEluc2VydFRleHRGb3JtYXQuUGxhaW5UZXh0ID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIHByaW1hcnkgdGV4dCB0byBiZSBpbnNlcnRlZCBpcyB0cmVhdGVkIGFzIGEgc25pcHBldC5cclxuICAgICAqXHJcbiAgICAgKiBBIHNuaXBwZXQgY2FuIGRlZmluZSB0YWIgc3RvcHMgYW5kIHBsYWNlaG9sZGVycyB3aXRoIGAkMWAsIGAkMmBcclxuICAgICAqIGFuZCBgJHszOmZvb31gLiBgJDBgIGRlZmluZXMgdGhlIGZpbmFsIHRhYiBzdG9wLCBpdCBkZWZhdWx0cyB0b1xyXG4gICAgICogdGhlIGVuZCBvZiB0aGUgc25pcHBldC4gUGxhY2Vob2xkZXJzIHdpdGggZXF1YWwgaWRlbnRpZmllcnMgYXJlIGxpbmtlZCxcclxuICAgICAqIHRoYXQgaXMgdHlwaW5nIGluIG9uZSB3aWxsIHVwZGF0ZSBvdGhlcnMgdG9vLlxyXG4gICAgICpcclxuICAgICAqIFNlZSBhbHNvOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L3ZzY29kZS9ibG9iL21hc3Rlci9zcmMvdnMvZWRpdG9yL2NvbnRyaWIvc25pcHBldC9jb21tb24vc25pcHBldC5tZFxyXG4gICAgICovXHJcbiAgICBJbnNlcnRUZXh0Rm9ybWF0LlNuaXBwZXQgPSAyO1xyXG59KShJbnNlcnRUZXh0Rm9ybWF0IHx8IChJbnNlcnRUZXh0Rm9ybWF0ID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb21wbGV0aW9uSXRlbSBuYW1lc3BhY2UgcHJvdmlkZXMgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aFxyXG4gKiBjb21wbGV0aW9uIGl0ZW1zLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb21wbGV0aW9uSXRlbTtcclxuKGZ1bmN0aW9uIChDb21wbGV0aW9uSXRlbSkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb21wbGV0aW9uIGl0ZW0gYW5kIHNlZWQgaXQgd2l0aCBhIGxhYmVsLlxyXG4gICAgICogQHBhcmFtIGxhYmVsIFRoZSBjb21wbGV0aW9uIGl0ZW0ncyBsYWJlbFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobGFiZWwpIHtcclxuICAgICAgICByZXR1cm4geyBsYWJlbDogbGFiZWwgfTtcclxuICAgIH1cclxuICAgIENvbXBsZXRpb25JdGVtLmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoQ29tcGxldGlvbkl0ZW0gfHwgKENvbXBsZXRpb25JdGVtID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb21wbGV0aW9uTGlzdCBuYW1lc3BhY2UgcHJvdmlkZXMgZnVuY3Rpb25zIHRvIGRlYWwgd2l0aFxyXG4gKiBjb21wbGV0aW9uIGxpc3RzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb21wbGV0aW9uTGlzdDtcclxuKGZ1bmN0aW9uIChDb21wbGV0aW9uTGlzdCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbXBsZXRpb24gbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaXRlbXMgVGhlIGNvbXBsZXRpb24gaXRlbXMuXHJcbiAgICAgKiBAcGFyYW0gaXNJbmNvbXBsZXRlIFRoZSBsaXN0IGlzIG5vdCBjb21wbGV0ZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGl0ZW1zLCBpc0luY29tcGxldGUpIHtcclxuICAgICAgICByZXR1cm4geyBpdGVtczogaXRlbXMgPyBpdGVtcyA6IFtdLCBpc0luY29tcGxldGU6ICEhaXNJbmNvbXBsZXRlIH07XHJcbiAgICB9XHJcbiAgICBDb21wbGV0aW9uTGlzdC5jcmVhdGUgPSBjcmVhdGU7XHJcbn0pKENvbXBsZXRpb25MaXN0IHx8IChDb21wbGV0aW9uTGlzdCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgTWFya2VkU3RyaW5nO1xyXG4oZnVuY3Rpb24gKE1hcmtlZFN0cmluZykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbWFya2VkIHN0cmluZyBmcm9tIHBsYWluIHRleHQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHBsYWluVGV4dCBUaGUgcGxhaW4gdGV4dC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZnJvbVBsYWluVGV4dChwbGFpblRleHQpIHtcclxuICAgICAgICByZXR1cm4gcGxhaW5UZXh0LnJlcGxhY2UoL1tcXFxcYCpfe31bXFxdKCkjK1xcLS4hXS9nLCBcIlxcXFwkJlwiKTsgLy8gZXNjYXBlIG1hcmtkb3duIHN5bnRheCB0b2tlbnM6IGh0dHA6Ly9kYXJpbmdmaXJlYmFsbC5uZXQvcHJvamVjdHMvbWFya2Rvd24vc3ludGF4I2JhY2tzbGFzaFxyXG4gICAgfVxyXG4gICAgTWFya2VkU3RyaW5nLmZyb21QbGFpblRleHQgPSBmcm9tUGxhaW5UZXh0O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gdmFsdWUgY29uZm9ybXMgdG8gdGhlIFtNYXJrZWRTdHJpbmddKCNNYXJrZWRTdHJpbmcpIHR5cGUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5zdHJpbmcoY2FuZGlkYXRlKSB8fCAoSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpICYmIElzLnN0cmluZyhjYW5kaWRhdGUubGFuZ3VhZ2UpICYmIElzLnN0cmluZyhjYW5kaWRhdGUudmFsdWUpKTtcclxuICAgIH1cclxuICAgIE1hcmtlZFN0cmluZy5pcyA9IGlzO1xyXG59KShNYXJrZWRTdHJpbmcgfHwgKE1hcmtlZFN0cmluZyA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgSG92ZXI7XHJcbihmdW5jdGlvbiAoSG92ZXIpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIHZhbHVlIGNvbmZvcm1zIHRvIHRoZSBbSG92ZXJdKCNIb3ZlcikgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gISFjYW5kaWRhdGUgJiYgSXMub2JqZWN0TGl0ZXJhbChjYW5kaWRhdGUpICYmIChNYXJrdXBDb250ZW50LmlzKGNhbmRpZGF0ZS5jb250ZW50cykgfHxcclxuICAgICAgICAgICAgTWFya2VkU3RyaW5nLmlzKGNhbmRpZGF0ZS5jb250ZW50cykgfHxcclxuICAgICAgICAgICAgSXMudHlwZWRBcnJheShjYW5kaWRhdGUuY29udGVudHMsIE1hcmtlZFN0cmluZy5pcykpICYmICh2YWx1ZS5yYW5nZSA9PT0gdm9pZCAwIHx8IFJhbmdlLmlzKHZhbHVlLnJhbmdlKSk7XHJcbiAgICB9XHJcbiAgICBIb3Zlci5pcyA9IGlzO1xyXG59KShIb3ZlciB8fCAoSG92ZXIgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFBhcmFtZXRlckluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbUGFyYW1ldGVySW5mb3JtYXRpb25dKCNQYXJhbWV0ZXJJbmZvcm1hdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFBhcmFtZXRlckluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKFBhcmFtZXRlckluZm9ybWF0aW9uKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgcGFyYW1ldGVyIGluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGxhYmVsIEEgbGFiZWwgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIGRvY3VtZW50YXRpb24gQSBkb2Mgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobGFiZWwsIGRvY3VtZW50YXRpb24pIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnRhdGlvbiA/IHsgbGFiZWw6IGxhYmVsLCBkb2N1bWVudGF0aW9uOiBkb2N1bWVudGF0aW9uIH0gOiB7IGxhYmVsOiBsYWJlbCB9O1xyXG4gICAgfVxyXG4gICAgUGFyYW1ldGVySW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgO1xyXG59KShQYXJhbWV0ZXJJbmZvcm1hdGlvbiB8fCAoUGFyYW1ldGVySW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogVGhlIFNpZ25hdHVyZUluZm9ybWF0aW9uIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbU2lnbmF0dXJlSW5mb3JtYXRpb25dKCNTaWduYXR1cmVJbmZvcm1hdGlvbikgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIFNpZ25hdHVyZUluZm9ybWF0aW9uO1xyXG4oZnVuY3Rpb24gKFNpZ25hdHVyZUluZm9ybWF0aW9uKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobGFiZWwsIGRvY3VtZW50YXRpb24pIHtcclxuICAgICAgICB2YXIgcGFyYW1ldGVycyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IGxhYmVsOiBsYWJlbCB9O1xyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGRvY3VtZW50YXRpb24pKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5kb2N1bWVudGF0aW9uID0gZG9jdW1lbnRhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKElzLmRlZmluZWQocGFyYW1ldGVycykpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LnBhcmFtZXRlcnMgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIFNpZ25hdHVyZUluZm9ybWF0aW9uLmNyZWF0ZSA9IGNyZWF0ZTtcclxufSkoU2lnbmF0dXJlSW5mb3JtYXRpb24gfHwgKFNpZ25hdHVyZUluZm9ybWF0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIEEgZG9jdW1lbnQgaGlnaGxpZ2h0IGtpbmQuXHJcbiAqL1xyXG5leHBvcnQgdmFyIERvY3VtZW50SGlnaGxpZ2h0S2luZDtcclxuKGZ1bmN0aW9uIChEb2N1bWVudEhpZ2hsaWdodEtpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQSB0ZXh0dWFsIG9jY3VycmVuY2UuXHJcbiAgICAgKi9cclxuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZC5UZXh0ID0gMTtcclxuICAgIC8qKlxyXG4gICAgICogUmVhZC1hY2Nlc3Mgb2YgYSBzeW1ib2wsIGxpa2UgcmVhZGluZyBhIHZhcmlhYmxlLlxyXG4gICAgICovXHJcbiAgICBEb2N1bWVudEhpZ2hsaWdodEtpbmQuUmVhZCA9IDI7XHJcbiAgICAvKipcclxuICAgICAqIFdyaXRlLWFjY2VzcyBvZiBhIHN5bWJvbCwgbGlrZSB3cml0aW5nIHRvIGEgdmFyaWFibGUuXHJcbiAgICAgKi9cclxuICAgIERvY3VtZW50SGlnaGxpZ2h0S2luZC5Xcml0ZSA9IDM7XHJcbn0pKERvY3VtZW50SGlnaGxpZ2h0S2luZCB8fCAoRG9jdW1lbnRIaWdobGlnaHRLaW5kID0ge30pKTtcclxuLyoqXHJcbiAqIERvY3VtZW50SGlnaGxpZ2h0IG5hbWVzcGFjZSB0byBwcm92aWRlIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtEb2N1bWVudEhpZ2hsaWdodF0oI0RvY3VtZW50SGlnaGxpZ2h0KSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgRG9jdW1lbnRIaWdobGlnaHQ7XHJcbihmdW5jdGlvbiAoRG9jdW1lbnRIaWdobGlnaHQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgRG9jdW1lbnRIaWdobGlnaHQgb2JqZWN0LlxyXG4gICAgICogQHBhcmFtIHJhbmdlIFRoZSByYW5nZSB0aGUgaGlnaGxpZ2h0IGFwcGxpZXMgdG8uXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwga2luZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHJhbmdlOiByYW5nZSB9O1xyXG4gICAgICAgIGlmIChJcy5udW1iZXIoa2luZCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmtpbmQgPSBraW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRIaWdobGlnaHQuY3JlYXRlID0gY3JlYXRlO1xyXG59KShEb2N1bWVudEhpZ2hsaWdodCB8fCAoRG9jdW1lbnRIaWdobGlnaHQgPSB7fSkpO1xyXG4vKipcclxuICogQSBzeW1ib2wga2luZC5cclxuICovXHJcbmV4cG9ydCB2YXIgU3ltYm9sS2luZDtcclxuKGZ1bmN0aW9uIChTeW1ib2xLaW5kKSB7XHJcbiAgICBTeW1ib2xLaW5kLkZpbGUgPSAxO1xyXG4gICAgU3ltYm9sS2luZC5Nb2R1bGUgPSAyO1xyXG4gICAgU3ltYm9sS2luZC5OYW1lc3BhY2UgPSAzO1xyXG4gICAgU3ltYm9sS2luZC5QYWNrYWdlID0gNDtcclxuICAgIFN5bWJvbEtpbmQuQ2xhc3MgPSA1O1xyXG4gICAgU3ltYm9sS2luZC5NZXRob2QgPSA2O1xyXG4gICAgU3ltYm9sS2luZC5Qcm9wZXJ0eSA9IDc7XHJcbiAgICBTeW1ib2xLaW5kLkZpZWxkID0gODtcclxuICAgIFN5bWJvbEtpbmQuQ29uc3RydWN0b3IgPSA5O1xyXG4gICAgU3ltYm9sS2luZC5FbnVtID0gMTA7XHJcbiAgICBTeW1ib2xLaW5kLkludGVyZmFjZSA9IDExO1xyXG4gICAgU3ltYm9sS2luZC5GdW5jdGlvbiA9IDEyO1xyXG4gICAgU3ltYm9sS2luZC5WYXJpYWJsZSA9IDEzO1xyXG4gICAgU3ltYm9sS2luZC5Db25zdGFudCA9IDE0O1xyXG4gICAgU3ltYm9sS2luZC5TdHJpbmcgPSAxNTtcclxuICAgIFN5bWJvbEtpbmQuTnVtYmVyID0gMTY7XHJcbiAgICBTeW1ib2xLaW5kLkJvb2xlYW4gPSAxNztcclxuICAgIFN5bWJvbEtpbmQuQXJyYXkgPSAxODtcclxuICAgIFN5bWJvbEtpbmQuT2JqZWN0ID0gMTk7XHJcbiAgICBTeW1ib2xLaW5kLktleSA9IDIwO1xyXG4gICAgU3ltYm9sS2luZC5OdWxsID0gMjE7XHJcbiAgICBTeW1ib2xLaW5kLkVudW1NZW1iZXIgPSAyMjtcclxuICAgIFN5bWJvbEtpbmQuU3RydWN0ID0gMjM7XHJcbiAgICBTeW1ib2xLaW5kLkV2ZW50ID0gMjQ7XHJcbiAgICBTeW1ib2xLaW5kLk9wZXJhdG9yID0gMjU7XHJcbiAgICBTeW1ib2xLaW5kLlR5cGVQYXJhbWV0ZXIgPSAyNjtcclxufSkoU3ltYm9sS2luZCB8fCAoU3ltYm9sS2luZCA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgU3ltYm9sSW5mb3JtYXRpb247XHJcbihmdW5jdGlvbiAoU3ltYm9sSW5mb3JtYXRpb24pIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzeW1ib2wgaW5mb3JtYXRpb24gbGl0ZXJhbC5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGtpbmQgVGhlIGtpbmQgb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2Ugb2YgdGhlIGxvY2F0aW9uIG9mIHRoZSBzeW1ib2wuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSByZXNvdXJjZSBvZiB0aGUgbG9jYXRpb24gb2Ygc3ltYm9sLCBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBkb2N1bWVudC5cclxuICAgICAqIEBwYXJhbSBjb250YWluZXJOYW1lIFRoZSBuYW1lIG9mIHRoZSBzeW1ib2wgY29udGFpbmluZyB0aGUgc3ltYm9sLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobmFtZSwga2luZCwgcmFuZ2UsIHVyaSwgY29udGFpbmVyTmFtZSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgIGtpbmQ6IGtpbmQsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7IHVyaTogdXJpLCByYW5nZTogcmFuZ2UgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lck5hbWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNvbnRhaW5lck5hbWUgPSBjb250YWluZXJOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgU3ltYm9sSW5mb3JtYXRpb24uY3JlYXRlID0gY3JlYXRlO1xyXG59KShTeW1ib2xJbmZvcm1hdGlvbiB8fCAoU3ltYm9sSW5mb3JtYXRpb24gPSB7fSkpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBwcm9ncmFtbWluZyBjb25zdHJ1Y3RzIGxpa2UgdmFyaWFibGVzLCBjbGFzc2VzLCBpbnRlcmZhY2VzIGV0Yy5cclxuICogdGhhdCBhcHBlYXIgaW4gYSBkb2N1bWVudC4gRG9jdW1lbnQgc3ltYm9scyBjYW4gYmUgaGllcmFyY2hpY2FsIGFuZCB0aGV5XHJcbiAqIGhhdmUgdHdvIHJhbmdlczogb25lIHRoYXQgZW5jbG9zZXMgaXRzIGRlZmluaXRpb24gYW5kIG9uZSB0aGF0IHBvaW50cyB0b1xyXG4gKiBpdHMgbW9zdCBpbnRlcmVzdGluZyByYW5nZSwgZS5nLiB0aGUgcmFuZ2Ugb2YgYW4gaWRlbnRpZmllci5cclxuICovXHJcbnZhciBEb2N1bWVudFN5bWJvbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERvY3VtZW50U3ltYm9sKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIERvY3VtZW50U3ltYm9sO1xyXG59KCkpO1xyXG5leHBvcnQgeyBEb2N1bWVudFN5bWJvbCB9O1xyXG4oZnVuY3Rpb24gKERvY3VtZW50U3ltYm9sKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgc3ltYm9sIGluZm9ybWF0aW9uIGxpdGVyYWwuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSBkZXRhaWwgVGhlIGRldGFpbCBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICogQHBhcmFtIGtpbmQgVGhlIGtpbmQgb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSByYW5nZSBUaGUgcmFuZ2Ugb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSBzZWxlY3Rpb25SYW5nZSBUaGUgc2VsZWN0aW9uUmFuZ2Ugb2YgdGhlIHN5bWJvbC5cclxuICAgICAqIEBwYXJhbSBjaGlsZHJlbiBDaGlsZHJlbiBvZiB0aGUgc3ltYm9sLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUobmFtZSwgZGV0YWlsLCBraW5kLCByYW5nZSwgc2VsZWN0aW9uUmFuZ2UsIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgZGV0YWlsOiBkZXRhaWwsXHJcbiAgICAgICAgICAgIGtpbmQ6IGtpbmQsXHJcbiAgICAgICAgICAgIHJhbmdlOiByYW5nZSxcclxuICAgICAgICAgICAgc2VsZWN0aW9uUmFuZ2U6IHNlbGVjdGlvblJhbmdlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4gIT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICByZXN1bHQuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIERvY3VtZW50U3ltYm9sLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtEb2N1bWVudFN5bWJvbF0oI0RvY3VtZW50U3ltYm9sKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBjYW5kaWRhdGUgJiZcclxuICAgICAgICAgICAgSXMuc3RyaW5nKGNhbmRpZGF0ZS5uYW1lKSAmJiBJcy5udW1iZXIoY2FuZGlkYXRlLmtpbmQpICYmXHJcbiAgICAgICAgICAgIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnNlbGVjdGlvblJhbmdlKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRldGFpbCA9PT0gdm9pZCAwIHx8IElzLnN0cmluZyhjYW5kaWRhdGUuZGV0YWlsKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5kZXByZWNhdGVkID09PSB2b2lkIDAgfHwgSXMuYm9vbGVhbihjYW5kaWRhdGUuZGVwcmVjYXRlZCkpICYmXHJcbiAgICAgICAgICAgIChjYW5kaWRhdGUuY2hpbGRyZW4gPT09IHZvaWQgMCB8fCBBcnJheS5pc0FycmF5KGNhbmRpZGF0ZS5jaGlsZHJlbikpO1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRTeW1ib2wuaXMgPSBpcztcclxufSkoRG9jdW1lbnRTeW1ib2wgfHwgKERvY3VtZW50U3ltYm9sID0ge30pKTtcclxuLyoqXHJcbiAqIEEgc2V0IG9mIHByZWRlZmluZWQgY29kZSBhY3Rpb24ga2luZHNcclxuICovXHJcbmV4cG9ydCB2YXIgQ29kZUFjdGlvbktpbmQ7XHJcbihmdW5jdGlvbiAoQ29kZUFjdGlvbktpbmQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciBxdWlja2ZpeCBhY3Rpb25zOiAncXVpY2tmaXgnXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlF1aWNrRml4ID0gJ3F1aWNrZml4JztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciByZWZhY3RvcmluZyBhY3Rpb25zOiAncmVmYWN0b3InXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlJlZmFjdG9yID0gJ3JlZmFjdG9yJztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciByZWZhY3RvcmluZyBleHRyYWN0aW9uIGFjdGlvbnM6ICdyZWZhY3Rvci5leHRyYWN0J1xyXG4gICAgICpcclxuICAgICAqIEV4YW1wbGUgZXh0cmFjdCBhY3Rpb25zOlxyXG4gICAgICpcclxuICAgICAqIC0gRXh0cmFjdCBtZXRob2RcclxuICAgICAqIC0gRXh0cmFjdCBmdW5jdGlvblxyXG4gICAgICogLSBFeHRyYWN0IHZhcmlhYmxlXHJcbiAgICAgKiAtIEV4dHJhY3QgaW50ZXJmYWNlIGZyb20gY2xhc3NcclxuICAgICAqIC0gLi4uXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlJlZmFjdG9yRXh0cmFjdCA9ICdyZWZhY3Rvci5leHRyYWN0JztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciByZWZhY3RvcmluZyBpbmxpbmUgYWN0aW9uczogJ3JlZmFjdG9yLmlubGluZSdcclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlIGlubGluZSBhY3Rpb25zOlxyXG4gICAgICpcclxuICAgICAqIC0gSW5saW5lIGZ1bmN0aW9uXHJcbiAgICAgKiAtIElubGluZSB2YXJpYWJsZVxyXG4gICAgICogLSBJbmxpbmUgY29uc3RhbnRcclxuICAgICAqIC0gLi4uXHJcbiAgICAgKi9cclxuICAgIENvZGVBY3Rpb25LaW5kLlJlZmFjdG9ySW5saW5lID0gJ3JlZmFjdG9yLmlubGluZSc7XHJcbiAgICAvKipcclxuICAgICAqIEJhc2Uga2luZCBmb3IgcmVmYWN0b3JpbmcgcmV3cml0ZSBhY3Rpb25zOiAncmVmYWN0b3IucmV3cml0ZSdcclxuICAgICAqXHJcbiAgICAgKiBFeGFtcGxlIHJld3JpdGUgYWN0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiAtIENvbnZlcnQgSmF2YVNjcmlwdCBmdW5jdGlvbiB0byBjbGFzc1xyXG4gICAgICogLSBBZGQgb3IgcmVtb3ZlIHBhcmFtZXRlclxyXG4gICAgICogLSBFbmNhcHN1bGF0ZSBmaWVsZFxyXG4gICAgICogLSBNYWtlIG1ldGhvZCBzdGF0aWNcclxuICAgICAqIC0gTW92ZSBtZXRob2QgdG8gYmFzZSBjbGFzc1xyXG4gICAgICogLSAuLi5cclxuICAgICAqL1xyXG4gICAgQ29kZUFjdGlvbktpbmQuUmVmYWN0b3JSZXdyaXRlID0gJ3JlZmFjdG9yLnJld3JpdGUnO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYXNlIGtpbmQgZm9yIHNvdXJjZSBhY3Rpb25zOiBgc291cmNlYFxyXG4gICAgICpcclxuICAgICAqIFNvdXJjZSBjb2RlIGFjdGlvbnMgYXBwbHkgdG8gdGhlIGVudGlyZSBmaWxlLlxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5Tb3VyY2UgPSAnc291cmNlJztcclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBraW5kIGZvciBhbiBvcmdhbml6ZSBpbXBvcnRzIHNvdXJjZSBhY3Rpb246IGBzb3VyY2Uub3JnYW5pemVJbXBvcnRzYFxyXG4gICAgICovXHJcbiAgICBDb2RlQWN0aW9uS2luZC5Tb3VyY2VPcmdhbml6ZUltcG9ydHMgPSAnc291cmNlLm9yZ2FuaXplSW1wb3J0cyc7XHJcbn0pKENvZGVBY3Rpb25LaW5kIHx8IChDb2RlQWN0aW9uS2luZCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBUaGUgQ29kZUFjdGlvbkNvbnRleHQgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtDb2RlQWN0aW9uQ29udGV4dF0oI0NvZGVBY3Rpb25Db250ZXh0KSBsaXRlcmFscy5cclxuICovXHJcbmV4cG9ydCB2YXIgQ29kZUFjdGlvbkNvbnRleHQ7XHJcbihmdW5jdGlvbiAoQ29kZUFjdGlvbkNvbnRleHQpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBDb2RlQWN0aW9uQ29udGV4dCBsaXRlcmFsLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoZGlhZ25vc3RpY3MsIG9ubHkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0geyBkaWFnbm9zdGljczogZGlhZ25vc3RpY3MgfTtcclxuICAgICAgICBpZiAob25seSAhPT0gdm9pZCAwICYmIG9ubHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0Lm9ubHkgPSBvbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgQ29kZUFjdGlvbkNvbnRleHQuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0NvZGVBY3Rpb25Db250ZXh0XSgjQ29kZUFjdGlvbkNvbnRleHQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy50eXBlZEFycmF5KGNhbmRpZGF0ZS5kaWFnbm9zdGljcywgRGlhZ25vc3RpYy5pcykgJiYgKGNhbmRpZGF0ZS5vbmx5ID09PSB2b2lkIDAgfHwgSXMudHlwZWRBcnJheShjYW5kaWRhdGUub25seSwgSXMuc3RyaW5nKSk7XHJcbiAgICB9XHJcbiAgICBDb2RlQWN0aW9uQ29udGV4dC5pcyA9IGlzO1xyXG59KShDb2RlQWN0aW9uQ29udGV4dCB8fCAoQ29kZUFjdGlvbkNvbnRleHQgPSB7fSkpO1xyXG5leHBvcnQgdmFyIENvZGVBY3Rpb247XHJcbihmdW5jdGlvbiAoQ29kZUFjdGlvbikge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRpdGxlLCBjb21tYW5kT3JFZGl0LCBraW5kKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHsgdGl0bGU6IHRpdGxlIH07XHJcbiAgICAgICAgaWYgKENvbW1hbmQuaXMoY29tbWFuZE9yRWRpdCkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNvbW1hbmQgPSBjb21tYW5kT3JFZGl0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzdWx0LmVkaXQgPSBjb21tYW5kT3JFZGl0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2luZCAhPT0gdm9pZCBudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5raW5kID0ga2luZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENvZGVBY3Rpb24uY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnRpdGxlKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmRpYWdub3N0aWNzID09PSB2b2lkIDAgfHwgSXMudHlwZWRBcnJheShjYW5kaWRhdGUuZGlhZ25vc3RpY3MsIERpYWdub3N0aWMuaXMpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmtpbmQgPT09IHZvaWQgMCB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLmtpbmQpKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmVkaXQgIT09IHZvaWQgMCB8fCBjYW5kaWRhdGUuY29tbWFuZCAhPT0gdm9pZCAwKSAmJlxyXG4gICAgICAgICAgICAoY2FuZGlkYXRlLmNvbW1hbmQgPT09IHZvaWQgMCB8fCBDb21tYW5kLmlzKGNhbmRpZGF0ZS5jb21tYW5kKSkgJiZcclxuICAgICAgICAgICAgKGNhbmRpZGF0ZS5lZGl0ID09PSB2b2lkIDAgfHwgV29ya3NwYWNlRWRpdC5pcyhjYW5kaWRhdGUuZWRpdCkpO1xyXG4gICAgfVxyXG4gICAgQ29kZUFjdGlvbi5pcyA9IGlzO1xyXG59KShDb2RlQWN0aW9uIHx8IChDb2RlQWN0aW9uID0ge30pKTtcclxuLyoqXHJcbiAqIFRoZSBDb2RlTGVucyBuYW1lc3BhY2UgcHJvdmlkZXMgaGVscGVyIGZ1bmN0aW9ucyB0byB3b3JrIHdpdGhcclxuICogW0NvZGVMZW5zXSgjQ29kZUxlbnMpIGxpdGVyYWxzLlxyXG4gKi9cclxuZXhwb3J0IHZhciBDb2RlTGVucztcclxuKGZ1bmN0aW9uIChDb2RlTGVucykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IENvZGVMZW5zIGxpdGVyYWwuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShyYW5nZSwgZGF0YSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7IHJhbmdlOiByYW5nZSB9O1xyXG4gICAgICAgIGlmIChJcy5kZWZpbmVkKGRhdGEpKVxyXG4gICAgICAgICAgICByZXN1bHQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIENvZGVMZW5zLmNyZWF0ZSA9IGNyZWF0ZTtcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGdpdmVuIGxpdGVyYWwgY29uZm9ybXMgdG8gdGhlIFtDb2RlTGVuc10oI0NvZGVMZW5zKSBpbnRlcmZhY2UuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGlzKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBJcy5kZWZpbmVkKGNhbmRpZGF0ZSkgJiYgUmFuZ2UuaXMoY2FuZGlkYXRlLnJhbmdlKSAmJiAoSXMudW5kZWZpbmVkKGNhbmRpZGF0ZS5jb21tYW5kKSB8fCBDb21tYW5kLmlzKGNhbmRpZGF0ZS5jb21tYW5kKSk7XHJcbiAgICB9XHJcbiAgICBDb2RlTGVucy5pcyA9IGlzO1xyXG59KShDb2RlTGVucyB8fCAoQ29kZUxlbnMgPSB7fSkpO1xyXG4vKipcclxuICogVGhlIEZvcm1hdHRpbmdPcHRpb25zIG5hbWVzcGFjZSBwcm92aWRlcyBoZWxwZXIgZnVuY3Rpb25zIHRvIHdvcmsgd2l0aFxyXG4gKiBbRm9ybWF0dGluZ09wdGlvbnNdKCNGb3JtYXR0aW5nT3B0aW9ucykgbGl0ZXJhbHMuXHJcbiAqL1xyXG5leHBvcnQgdmFyIEZvcm1hdHRpbmdPcHRpb25zO1xyXG4oZnVuY3Rpb24gKEZvcm1hdHRpbmdPcHRpb25zKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgRm9ybWF0dGluZ09wdGlvbnMgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRhYlNpemUsIGluc2VydFNwYWNlcykge1xyXG4gICAgICAgIHJldHVybiB7IHRhYlNpemU6IHRhYlNpemUsIGluc2VydFNwYWNlczogaW5zZXJ0U3BhY2VzIH07XHJcbiAgICB9XHJcbiAgICBGb3JtYXR0aW5nT3B0aW9ucy5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbRm9ybWF0dGluZ09wdGlvbnNdKCNGb3JtYXR0aW5nT3B0aW9ucykgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIElzLm51bWJlcihjYW5kaWRhdGUudGFiU2l6ZSkgJiYgSXMuYm9vbGVhbihjYW5kaWRhdGUuaW5zZXJ0U3BhY2VzKTtcclxuICAgIH1cclxuICAgIEZvcm1hdHRpbmdPcHRpb25zLmlzID0gaXM7XHJcbn0pKEZvcm1hdHRpbmdPcHRpb25zIHx8IChGb3JtYXR0aW5nT3B0aW9ucyA9IHt9KSk7XHJcbi8qKlxyXG4gKiBBIGRvY3VtZW50IGxpbmsgaXMgYSByYW5nZSBpbiBhIHRleHQgZG9jdW1lbnQgdGhhdCBsaW5rcyB0byBhbiBpbnRlcm5hbCBvciBleHRlcm5hbCByZXNvdXJjZSwgbGlrZSBhbm90aGVyXHJcbiAqIHRleHQgZG9jdW1lbnQgb3IgYSB3ZWIgc2l0ZS5cclxuICovXHJcbnZhciBEb2N1bWVudExpbmsgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEb2N1bWVudExpbmsoKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRG9jdW1lbnRMaW5rO1xyXG59KCkpO1xyXG5leHBvcnQgeyBEb2N1bWVudExpbmsgfTtcclxuLyoqXHJcbiAqIFRoZSBEb2N1bWVudExpbmsgbmFtZXNwYWNlIHByb3ZpZGVzIGhlbHBlciBmdW5jdGlvbnMgdG8gd29yayB3aXRoXHJcbiAqIFtEb2N1bWVudExpbmtdKCNEb2N1bWVudExpbmspIGxpdGVyYWxzLlxyXG4gKi9cclxuKGZ1bmN0aW9uIChEb2N1bWVudExpbmspIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBEb2N1bWVudExpbmsgbGl0ZXJhbC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHJhbmdlLCB0YXJnZXQsIGRhdGEpIHtcclxuICAgICAgICByZXR1cm4geyByYW5nZTogcmFuZ2UsIHRhcmdldDogdGFyZ2V0LCBkYXRhOiBkYXRhIH07XHJcbiAgICB9XHJcbiAgICBEb2N1bWVudExpbmsuY3JlYXRlID0gY3JlYXRlO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3Mgd2hldGhlciB0aGUgZ2l2ZW4gbGl0ZXJhbCBjb25mb3JtcyB0byB0aGUgW0RvY3VtZW50TGlua10oI0RvY3VtZW50TGluaykgaW50ZXJmYWNlLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpcyh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYW5kaWRhdGUgPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gSXMuZGVmaW5lZChjYW5kaWRhdGUpICYmIFJhbmdlLmlzKGNhbmRpZGF0ZS5yYW5nZSkgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUudGFyZ2V0KSB8fCBJcy5zdHJpbmcoY2FuZGlkYXRlLnRhcmdldCkpO1xyXG4gICAgfVxyXG4gICAgRG9jdW1lbnRMaW5rLmlzID0gaXM7XHJcbn0pKERvY3VtZW50TGluayB8fCAoRG9jdW1lbnRMaW5rID0ge30pKTtcclxuZXhwb3J0IHZhciBFT0wgPSBbJ1xcbicsICdcXHJcXG4nLCAnXFxyJ107XHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50O1xyXG4oZnVuY3Rpb24gKFRleHREb2N1bWVudCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGEgbmV3IElUZXh0RG9jdW1lbnQgbGl0ZXJhbCBmcm9tIHRoZSBnaXZlbiB1cmkgYW5kIGNvbnRlbnQuXHJcbiAgICAgKiBAcGFyYW0gdXJpIFRoZSBkb2N1bWVudCdzIHVyaS5cclxuICAgICAqIEBwYXJhbSBsYW5ndWFnZUlkICBUaGUgZG9jdW1lbnQncyBsYW5ndWFnZSBJZC5cclxuICAgICAqIEBwYXJhbSBjb250ZW50IFRoZSBkb2N1bWVudCdzIGNvbnRlbnQuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh1cmksIGxhbmd1YWdlSWQsIHZlcnNpb24sIGNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEZ1bGxUZXh0RG9jdW1lbnQodXJpLCBsYW5ndWFnZUlkLCB2ZXJzaW9uLCBjb250ZW50KTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudC5jcmVhdGUgPSBjcmVhdGU7XHJcbiAgICAvKipcclxuICAgICAqIENoZWNrcyB3aGV0aGVyIHRoZSBnaXZlbiBsaXRlcmFsIGNvbmZvcm1zIHRvIHRoZSBbSVRleHREb2N1bWVudF0oI0lUZXh0RG9jdW1lbnQpIGludGVyZmFjZS5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaXModmFsdWUpIHtcclxuICAgICAgICB2YXIgY2FuZGlkYXRlID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIElzLmRlZmluZWQoY2FuZGlkYXRlKSAmJiBJcy5zdHJpbmcoY2FuZGlkYXRlLnVyaSkgJiYgKElzLnVuZGVmaW5lZChjYW5kaWRhdGUubGFuZ3VhZ2VJZCkgfHwgSXMuc3RyaW5nKGNhbmRpZGF0ZS5sYW5ndWFnZUlkKSkgJiYgSXMubnVtYmVyKGNhbmRpZGF0ZS5saW5lQ291bnQpXHJcbiAgICAgICAgICAgICYmIElzLmZ1bmMoY2FuZGlkYXRlLmdldFRleHQpICYmIElzLmZ1bmMoY2FuZGlkYXRlLnBvc2l0aW9uQXQpICYmIElzLmZ1bmMoY2FuZGlkYXRlLm9mZnNldEF0KSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudC5pcyA9IGlzO1xyXG4gICAgZnVuY3Rpb24gYXBwbHlFZGl0cyhkb2N1bWVudCwgZWRpdHMpIHtcclxuICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldFRleHQoKTtcclxuICAgICAgICB2YXIgc29ydGVkRWRpdHMgPSBtZXJnZVNvcnQoZWRpdHMsIGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgIHZhciBkaWZmID0gYS5yYW5nZS5zdGFydC5saW5lIC0gYi5yYW5nZS5zdGFydC5saW5lO1xyXG4gICAgICAgICAgICBpZiAoZGlmZiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGEucmFuZ2Uuc3RhcnQuY2hhcmFjdGVyIC0gYi5yYW5nZS5zdGFydC5jaGFyYWN0ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRpZmY7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxhc3RNb2RpZmllZE9mZnNldCA9IHRleHQubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBzb3J0ZWRFZGl0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHNvcnRlZEVkaXRzW2ldO1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRPZmZzZXQgPSBkb2N1bWVudC5vZmZzZXRBdChlLnJhbmdlLnN0YXJ0KTtcclxuICAgICAgICAgICAgdmFyIGVuZE9mZnNldCA9IGRvY3VtZW50Lm9mZnNldEF0KGUucmFuZ2UuZW5kKTtcclxuICAgICAgICAgICAgaWYgKGVuZE9mZnNldCA8PSBsYXN0TW9kaWZpZWRPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCBzdGFydE9mZnNldCkgKyBlLm5ld1RleHQgKyB0ZXh0LnN1YnN0cmluZyhlbmRPZmZzZXQsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignT3ZlcmxhcHBpbmcgZWRpdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxhc3RNb2RpZmllZE9mZnNldCA9IHN0YXJ0T2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgIH1cclxuICAgIFRleHREb2N1bWVudC5hcHBseUVkaXRzID0gYXBwbHlFZGl0cztcclxuICAgIGZ1bmN0aW9uIG1lcmdlU29ydChkYXRhLCBjb21wYXJlKSB7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoIDw9IDEpIHtcclxuICAgICAgICAgICAgLy8gc29ydGVkXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcCA9IChkYXRhLmxlbmd0aCAvIDIpIHwgMDtcclxuICAgICAgICB2YXIgbGVmdCA9IGRhdGEuc2xpY2UoMCwgcCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0ID0gZGF0YS5zbGljZShwKTtcclxuICAgICAgICBtZXJnZVNvcnQobGVmdCwgY29tcGFyZSk7XHJcbiAgICAgICAgbWVyZ2VTb3J0KHJpZ2h0LCBjb21wYXJlKTtcclxuICAgICAgICB2YXIgbGVmdElkeCA9IDA7XHJcbiAgICAgICAgdmFyIHJpZ2h0SWR4ID0gMDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGxlZnRJZHggPCBsZWZ0Lmxlbmd0aCAmJiByaWdodElkeCA8IHJpZ2h0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcmV0ID0gY29tcGFyZShsZWZ0W2xlZnRJZHhdLCByaWdodFtyaWdodElkeF0pO1xyXG4gICAgICAgICAgICBpZiAocmV0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIHNtYWxsZXJfZXF1YWwgLT4gdGFrZSBsZWZ0IHRvIHByZXNlcnZlIG9yZGVyXHJcbiAgICAgICAgICAgICAgICBkYXRhW2krK10gPSBsZWZ0W2xlZnRJZHgrK107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBncmVhdGVyIC0+IHRha2UgcmlnaHRcclxuICAgICAgICAgICAgICAgIGRhdGFbaSsrXSA9IHJpZ2h0W3JpZ2h0SWR4KytdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChsZWZ0SWR4IDwgbGVmdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YVtpKytdID0gbGVmdFtsZWZ0SWR4KytdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAocmlnaHRJZHggPCByaWdodC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZGF0YVtpKytdID0gcmlnaHRbcmlnaHRJZHgrK107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59KShUZXh0RG9jdW1lbnQgfHwgKFRleHREb2N1bWVudCA9IHt9KSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHJlYXNvbnMgd2h5IGEgdGV4dCBkb2N1bWVudCBpcyBzYXZlZC5cclxuICovXHJcbmV4cG9ydCB2YXIgVGV4dERvY3VtZW50U2F2ZVJlYXNvbjtcclxuKGZ1bmN0aW9uIChUZXh0RG9jdW1lbnRTYXZlUmVhc29uKSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hbnVhbGx5IHRyaWdnZXJlZCwgZS5nLiBieSB0aGUgdXNlciBwcmVzc2luZyBzYXZlLCBieSBzdGFydGluZyBkZWJ1Z2dpbmcsXHJcbiAgICAgKiBvciBieSBhbiBBUEkgY2FsbC5cclxuICAgICAqL1xyXG4gICAgVGV4dERvY3VtZW50U2F2ZVJlYXNvbi5NYW51YWwgPSAxO1xyXG4gICAgLyoqXHJcbiAgICAgKiBBdXRvbWF0aWMgYWZ0ZXIgYSBkZWxheS5cclxuICAgICAqL1xyXG4gICAgVGV4dERvY3VtZW50U2F2ZVJlYXNvbi5BZnRlckRlbGF5ID0gMjtcclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0aGUgZWRpdG9yIGxvc3QgZm9jdXMuXHJcbiAgICAgKi9cclxuICAgIFRleHREb2N1bWVudFNhdmVSZWFzb24uRm9jdXNPdXQgPSAzO1xyXG59KShUZXh0RG9jdW1lbnRTYXZlUmVhc29uIHx8IChUZXh0RG9jdW1lbnRTYXZlUmVhc29uID0ge30pKTtcclxudmFyIEZ1bGxUZXh0RG9jdW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBGdWxsVGV4dERvY3VtZW50KHVyaSwgbGFuZ3VhZ2VJZCwgdmVyc2lvbiwgY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuX3VyaSA9IHVyaTtcclxuICAgICAgICB0aGlzLl9sYW5ndWFnZUlkID0gbGFuZ3VhZ2VJZDtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLl9saW5lT2Zmc2V0cyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUsIFwidXJpXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VyaTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJsYW5ndWFnZUlkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmd1YWdlSWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUsIFwidmVyc2lvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZXJzaW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uIChyYW5nZSkge1xyXG4gICAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLm9mZnNldEF0KHJhbmdlLnN0YXJ0KTtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IHRoaXMub2Zmc2V0QXQocmFuZ2UuZW5kKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGVudDtcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZXZlbnQsIHZlcnNpb24pIHtcclxuICAgICAgICB0aGlzLl9jb250ZW50ID0gZXZlbnQudGV4dDtcclxuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB0aGlzLl9saW5lT2Zmc2V0cyA9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUuZ2V0TGluZU9mZnNldHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpbmVPZmZzZXRzID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBsaW5lT2Zmc2V0cyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHRoaXMuX2NvbnRlbnQ7XHJcbiAgICAgICAgICAgIHZhciBpc0xpbmVTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGluZVN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZU9mZnNldHMucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICBpc0xpbmVTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGNoID0gdGV4dC5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICBpc0xpbmVTdGFydCA9IChjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXG4nKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ1xccicgJiYgaSArIDEgPCB0ZXh0Lmxlbmd0aCAmJiB0ZXh0LmNoYXJBdChpICsgMSkgPT09ICdcXG4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0xpbmVTdGFydCAmJiB0ZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxpbmVPZmZzZXRzLnB1c2godGV4dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2xpbmVPZmZzZXRzID0gbGluZU9mZnNldHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9saW5lT2Zmc2V0cztcclxuICAgIH07XHJcbiAgICBGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZS5wb3NpdGlvbkF0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xyXG4gICAgICAgIG9mZnNldCA9IE1hdGgubWF4KE1hdGgubWluKG9mZnNldCwgdGhpcy5fY29udGVudC5sZW5ndGgpLCAwKTtcclxuICAgICAgICB2YXIgbGluZU9mZnNldHMgPSB0aGlzLmdldExpbmVPZmZzZXRzKCk7XHJcbiAgICAgICAgdmFyIGxvdyA9IDAsIGhpZ2ggPSBsaW5lT2Zmc2V0cy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGhpZ2ggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmNyZWF0ZSgwLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobG93IDwgaGlnaCkge1xyXG4gICAgICAgICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigobG93ICsgaGlnaCkgLyAyKTtcclxuICAgICAgICAgICAgaWYgKGxpbmVPZmZzZXRzW21pZF0gPiBvZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2ggPSBtaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsb3cgPSBtaWQgKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxvdyBpcyB0aGUgbGVhc3QgeCBmb3Igd2hpY2ggdGhlIGxpbmUgb2Zmc2V0IGlzIGxhcmdlciB0aGFuIHRoZSBjdXJyZW50IG9mZnNldFxyXG4gICAgICAgIC8vIG9yIGFycmF5Lmxlbmd0aCBpZiBubyBsaW5lIG9mZnNldCBpcyBsYXJnZXIgdGhhbiB0aGUgY3VycmVudCBvZmZzZXRcclxuICAgICAgICB2YXIgbGluZSA9IGxvdyAtIDE7XHJcbiAgICAgICAgcmV0dXJuIFBvc2l0aW9uLmNyZWF0ZShsaW5lLCBvZmZzZXQgLSBsaW5lT2Zmc2V0c1tsaW5lXSk7XHJcbiAgICB9O1xyXG4gICAgRnVsbFRleHREb2N1bWVudC5wcm90b3R5cGUub2Zmc2V0QXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgbGluZU9mZnNldHMgPSB0aGlzLmdldExpbmVPZmZzZXRzKCk7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uLmxpbmUgPj0gbGluZU9mZnNldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250ZW50Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG9zaXRpb24ubGluZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsaW5lT2Zmc2V0ID0gbGluZU9mZnNldHNbcG9zaXRpb24ubGluZV07XHJcbiAgICAgICAgdmFyIG5leHRMaW5lT2Zmc2V0ID0gKHBvc2l0aW9uLmxpbmUgKyAxIDwgbGluZU9mZnNldHMubGVuZ3RoKSA/IGxpbmVPZmZzZXRzW3Bvc2l0aW9uLmxpbmUgKyAxXSA6IHRoaXMuX2NvbnRlbnQubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihsaW5lT2Zmc2V0ICsgcG9zaXRpb24uY2hhcmFjdGVyLCBuZXh0TGluZU9mZnNldCksIGxpbmVPZmZzZXQpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGdWxsVGV4dERvY3VtZW50LnByb3RvdHlwZSwgXCJsaW5lQ291bnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMaW5lT2Zmc2V0cygpLmxlbmd0aDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBGdWxsVGV4dERvY3VtZW50O1xyXG59KCkpO1xyXG52YXIgSXM7XHJcbihmdW5jdGlvbiAoSXMpIHtcclxuICAgIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbiAgICBmdW5jdGlvbiBkZWZpbmVkKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9XHJcbiAgICBJcy5kZWZpbmVkID0gZGVmaW5lZDtcclxuICAgIGZ1bmN0aW9uIHVuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gICAgSXMudW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgZnVuY3Rpb24gYm9vbGVhbih2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBJcy5ib29sZWFuID0gYm9vbGVhbjtcclxuICAgIGZ1bmN0aW9uIHN0cmluZyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XHJcbiAgICB9XHJcbiAgICBJcy5zdHJpbmcgPSBzdHJpbmc7XHJcbiAgICBmdW5jdGlvbiBudW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xyXG4gICAgfVxyXG4gICAgSXMubnVtYmVyID0gbnVtYmVyO1xyXG4gICAgZnVuY3Rpb24gZnVuYyh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcclxuICAgIH1cclxuICAgIElzLmZ1bmMgPSBmdW5jO1xyXG4gICAgZnVuY3Rpb24gb2JqZWN0TGl0ZXJhbCh2YWx1ZSkge1xyXG4gICAgICAgIC8vIFN0cmljdGx5IHNwZWFraW5nIGNsYXNzIGluc3RhbmNlcyBwYXNzIHRoaXMgY2hlY2sgYXMgd2VsbC4gU2luY2UgdGhlIExTUFxyXG4gICAgICAgIC8vIGRvZXNuJ3QgdXNlIGNsYXNzZXMgd2UgaWdub3JlIHRoaXMgZm9yIG5vdy4gSWYgd2UgZG8gd2UgbmVlZCB0byBhZGQgc29tZXRoaW5nXHJcbiAgICAgICAgLy8gbGlrZSB0aGlzOiBgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSkgPT09IG51bGxgXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbiAgICB9XHJcbiAgICBJcy5vYmplY3RMaXRlcmFsID0gb2JqZWN0TGl0ZXJhbDtcclxuICAgIGZ1bmN0aW9uIHR5cGVkQXJyYXkodmFsdWUsIGNoZWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmV2ZXJ5KGNoZWNrKTtcclxuICAgIH1cclxuICAgIElzLnR5cGVkQXJyYXkgPSB0eXBlZEFycmF5O1xyXG59KShJcyB8fCAoSXMgPSB7fSkpO1xyXG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCB7IFdvcmtlck1hbmFnZXIgfSBmcm9tICcuL3dvcmtlck1hbmFnZXIuanMnO1xuaW1wb3J0ICogYXMgbGFuZ3VhZ2VGZWF0dXJlcyBmcm9tICcuL2xhbmd1YWdlRmVhdHVyZXMuanMnO1xuZXhwb3J0IGZ1bmN0aW9uIHNldHVwTW9kZShkZWZhdWx0cykge1xuICAgIHZhciBjbGllbnQgPSBuZXcgV29ya2VyTWFuYWdlcihkZWZhdWx0cyk7XG4gICAgdmFyIHdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVyaXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHVyaXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xpZW50LmdldExhbmd1YWdlU2VydmljZVdvcmtlci5hcHBseShjbGllbnQsIHVyaXMpO1xuICAgIH07XG4gICAgdmFyIGxhbmd1YWdlSWQgPSBkZWZhdWx0cy5sYW5ndWFnZUlkO1xuICAgIC8vIGFsbCBtb2Rlc1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJDb21wbGV0aW9uSXRlbVByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkNvbXBsZXRpb25BZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJIb3ZlclByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkhvdmVyQWRhcHRlcih3b3JrZXIpKTtcbiAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRIaWdobGlnaHRQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXIod29ya2VyKSk7XG4gICAgbW9uYWNvLmxhbmd1YWdlcy5yZWdpc3RlckxpbmtQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Eb2N1bWVudExpbmtBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJGb2xkaW5nUmFuZ2VQcm92aWRlcihsYW5ndWFnZUlkLCBuZXcgbGFuZ3VhZ2VGZWF0dXJlcy5Gb2xkaW5nUmFuZ2VBZGFwdGVyKHdvcmtlcikpO1xuICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudFN5bWJvbFByb3ZpZGVyKGxhbmd1YWdlSWQsIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRvY3VtZW50U3ltYm9sQWRhcHRlcih3b3JrZXIpKTtcbiAgICAvLyBvbmx5IGh0bWxcbiAgICBpZiAobGFuZ3VhZ2VJZCA9PT0gJ2h0bWwnKSB7XG4gICAgICAgIG1vbmFjby5sYW5ndWFnZXMucmVnaXN0ZXJEb2N1bWVudEZvcm1hdHRpbmdFZGl0UHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRG9jdW1lbnRGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKHdvcmtlcikpO1xuICAgICAgICBtb25hY28ubGFuZ3VhZ2VzLnJlZ2lzdGVyRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIobGFuZ3VhZ2VJZCwgbmV3IGxhbmd1YWdlRmVhdHVyZXMuRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0UHJvdmlkZXIod29ya2VyKSk7XG4gICAgICAgIG5ldyBsYW5ndWFnZUZlYXR1cmVzLkRpYWdub3N0aWNzQWRhcHRlcihsYW5ndWFnZUlkLCB3b3JrZXIsIGRlZmF1bHRzKTtcbiAgICB9XG59XG4iLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIGxzIGZyb20gJy4vX2RlcHMvdnNjb2RlLWxhbmd1YWdlc2VydmVyLXR5cGVzL21haW4uanMnO1xudmFyIFJhbmdlID0gbW9uYWNvLlJhbmdlO1xuLy8gLS0tIGRpYWdub3N0aWNzIC0tLSAtLS1cbnZhciBEaWFnbm9zdGljc0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlhZ25vc3RpY3NBZGFwdGVyKF9sYW5ndWFnZUlkLCBfd29ya2VyLCBkZWZhdWx0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9sYW5ndWFnZUlkID0gX2xhbmd1YWdlSWQ7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIG9uTW9kZWxBZGQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIHZhciBtb2RlSWQgPSBtb2RlbC5nZXRNb2RlSWQoKTtcbiAgICAgICAgICAgIGlmIChtb2RlSWQgIT09IF90aGlzLl9sYW5ndWFnZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhbmRsZTtcbiAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lclttb2RlbC51cmkudG9TdHJpbmcoKV0gPSBtb2RlbC5vbkRpZENoYW5nZUNvbnRlbnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIGhhbmRsZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2RvVmFsaWRhdGUobW9kZWwudXJpLCBtb2RlSWQpOyB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5fZG9WYWxpZGF0ZShtb2RlbC51cmksIG1vZGVJZCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbk1vZGVsUmVtb3ZlZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9kZWwsIF90aGlzLl9sYW5ndWFnZUlkLCBbXSk7XG4gICAgICAgICAgICB2YXIgdXJpU3RyID0gbW9kZWwudXJpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBfdGhpcy5fbGlzdGVuZXJbdXJpU3RyXTtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMuX2xpc3RlbmVyW3VyaVN0cl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzLnB1c2gobW9uYWNvLmVkaXRvci5vbkRpZENyZWF0ZU1vZGVsKG9uTW9kZWxBZGQpKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChtb25hY28uZWRpdG9yLm9uV2lsbERpc3Bvc2VNb2RlbChmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKG1vbmFjby5lZGl0b3Iub25EaWRDaGFuZ2VNb2RlbExhbmd1YWdlKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQoZXZlbnQubW9kZWwpO1xuICAgICAgICAgICAgb25Nb2RlbEFkZChldmVudC5tb2RlbCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMucHVzaChkZWZhdWx0cy5vbkRpZENoYW5nZShmdW5jdGlvbiAoXykge1xuICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5nZXRNb2RlbHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbC5nZXRNb2RlSWQoKSA9PT0gX3RoaXMuX2xhbmd1YWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICBvbk1vZGVsQWRkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLl9kaXNwb3NhYmxlcy5wdXNoKHtcbiAgICAgICAgICAgIGRpc3Bvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gX3RoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9saXN0ZW5lcltrZXldLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBtb25hY28uZWRpdG9yLmdldE1vZGVscygpLmZvckVhY2gob25Nb2RlbEFkZCk7XG4gICAgfVxuICAgIERpYWdub3N0aWNzQWRhcHRlci5wcm90b3R5cGUuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCAmJiBkLmRpc3Bvc2UoKTsgfSk7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2FibGVzID0gW107XG4gICAgfTtcbiAgICBEaWFnbm9zdGljc0FkYXB0ZXIucHJvdG90eXBlLl9kb1ZhbGlkYXRlID0gZnVuY3Rpb24gKHJlc291cmNlLCBsYW5ndWFnZUlkKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmRvVmFsaWRhdGlvbihyZXNvdXJjZS50b1N0cmluZygpKS50aGVuKGZ1bmN0aW9uIChkaWFnbm9zdGljcykge1xuICAgICAgICAgICAgICAgIHZhciBtYXJrZXJzID0gZGlhZ25vc3RpY3MubWFwKGZ1bmN0aW9uIChkKSB7IHJldHVybiB0b0RpYWdub3N0aWNzKHJlc291cmNlLCBkKTsgfSk7XG4gICAgICAgICAgICAgICAgbW9uYWNvLmVkaXRvci5zZXRNb2RlbE1hcmtlcnMobW9uYWNvLmVkaXRvci5nZXRNb2RlbChyZXNvdXJjZSksIGxhbmd1YWdlSWQsIG1hcmtlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERpYWdub3N0aWNzQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBEaWFnbm9zdGljc0FkYXB0ZXIgfTtcbmZ1bmN0aW9uIHRvU2V2ZXJpdHkobHNTZXZlcml0eSkge1xuICAgIHN3aXRjaCAobHNTZXZlcml0eSkge1xuICAgICAgICBjYXNlIGxzLkRpYWdub3N0aWNTZXZlcml0eS5FcnJvcjogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5FcnJvcjtcbiAgICAgICAgY2FzZSBscy5EaWFnbm9zdGljU2V2ZXJpdHkuV2FybmluZzogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5XYXJuaW5nO1xuICAgICAgICBjYXNlIGxzLkRpYWdub3N0aWNTZXZlcml0eS5JbmZvcm1hdGlvbjogcmV0dXJuIG1vbmFjby5NYXJrZXJTZXZlcml0eS5JbmZvO1xuICAgICAgICBjYXNlIGxzLkRpYWdub3N0aWNTZXZlcml0eS5IaW50OiByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5LkhpbnQ7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbW9uYWNvLk1hcmtlclNldmVyaXR5LkluZm87XG4gICAgfVxufVxuZnVuY3Rpb24gdG9EaWFnbm9zdGljcyhyZXNvdXJjZSwgZGlhZykge1xuICAgIHZhciBjb2RlID0gdHlwZW9mIGRpYWcuY29kZSA9PT0gJ251bWJlcicgPyBTdHJpbmcoZGlhZy5jb2RlKSA6IGRpYWcuY29kZTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXZlcml0eTogdG9TZXZlcml0eShkaWFnLnNldmVyaXR5KSxcbiAgICAgICAgc3RhcnRMaW5lTnVtYmVyOiBkaWFnLnJhbmdlLnN0YXJ0LmxpbmUgKyAxLFxuICAgICAgICBzdGFydENvbHVtbjogZGlhZy5yYW5nZS5zdGFydC5jaGFyYWN0ZXIgKyAxLFxuICAgICAgICBlbmRMaW5lTnVtYmVyOiBkaWFnLnJhbmdlLmVuZC5saW5lICsgMSxcbiAgICAgICAgZW5kQ29sdW1uOiBkaWFnLnJhbmdlLmVuZC5jaGFyYWN0ZXIgKyAxLFxuICAgICAgICBtZXNzYWdlOiBkaWFnLm1lc3NhZ2UsXG4gICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgIHNvdXJjZTogZGlhZy5zb3VyY2VcbiAgICB9O1xufVxuLy8gLS0tIGNvbXBsZXRpb24gLS0tLS0tXG5mdW5jdGlvbiBmcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB7IGNoYXJhY3RlcjogcG9zaXRpb24uY29sdW1uIC0gMSwgbGluZTogcG9zaXRpb24ubGluZU51bWJlciAtIDEgfTtcbn1cbmZ1bmN0aW9uIGZyb21SYW5nZShyYW5nZSkge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIHsgc3RhcnQ6IGZyb21Qb3NpdGlvbihyYW5nZS5nZXRTdGFydFBvc2l0aW9uKCkpLCBlbmQ6IGZyb21Qb3NpdGlvbihyYW5nZS5nZXRFbmRQb3NpdGlvbigpKSB9O1xufVxuZnVuY3Rpb24gdG9SYW5nZShyYW5nZSkge1xuICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHZvaWQgMDtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS5zdGFydC5saW5lICsgMSwgcmFuZ2Uuc3RhcnQuY2hhcmFjdGVyICsgMSwgcmFuZ2UuZW5kLmxpbmUgKyAxLCByYW5nZS5lbmQuY2hhcmFjdGVyICsgMSk7XG59XG5mdW5jdGlvbiB0b0NvbXBsZXRpb25JdGVtS2luZChraW5kKSB7XG4gICAgdmFyIG1JdGVtS2luZCA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1LaW5kO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5UZXh0OiByZXR1cm4gbUl0ZW1LaW5kLlRleHQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLk1ldGhvZDogcmV0dXJuIG1JdGVtS2luZC5NZXRob2Q7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkZ1bmN0aW9uOiByZXR1cm4gbUl0ZW1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Db25zdHJ1Y3RvcjogcmV0dXJuIG1JdGVtS2luZC5Db25zdHJ1Y3RvcjtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuRmllbGQ6IHJldHVybiBtSXRlbUtpbmQuRmllbGQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlZhcmlhYmxlOiByZXR1cm4gbUl0ZW1LaW5kLlZhcmlhYmxlO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5DbGFzczogcmV0dXJuIG1JdGVtS2luZC5DbGFzcztcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlOiByZXR1cm4gbUl0ZW1LaW5kLkludGVyZmFjZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuTW9kdWxlOiByZXR1cm4gbUl0ZW1LaW5kLk1vZHVsZTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuUHJvcGVydHk6IHJldHVybiBtSXRlbUtpbmQuUHJvcGVydHk7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlVuaXQ6IHJldHVybiBtSXRlbUtpbmQuVW5pdDtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuVmFsdWU6IHJldHVybiBtSXRlbUtpbmQuVmFsdWU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkVudW06IHJldHVybiBtSXRlbUtpbmQuRW51bTtcbiAgICAgICAgY2FzZSBscy5Db21wbGV0aW9uSXRlbUtpbmQuS2V5d29yZDogcmV0dXJuIG1JdGVtS2luZC5LZXl3b3JkO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5TbmlwcGV0OiByZXR1cm4gbUl0ZW1LaW5kLlNuaXBwZXQ7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbG9yOiByZXR1cm4gbUl0ZW1LaW5kLkNvbG9yO1xuICAgICAgICBjYXNlIGxzLkNvbXBsZXRpb25JdGVtS2luZC5GaWxlOiByZXR1cm4gbUl0ZW1LaW5kLkZpbGU7XG4gICAgICAgIGNhc2UgbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlJlZmVyZW5jZTogcmV0dXJuIG1JdGVtS2luZC5SZWZlcmVuY2U7XG4gICAgfVxuICAgIHJldHVybiBtSXRlbUtpbmQuUHJvcGVydHk7XG59XG5mdW5jdGlvbiBmcm9tQ29tcGxldGlvbkl0ZW1LaW5kKGtpbmQpIHtcbiAgICB2YXIgbUl0ZW1LaW5kID0gbW9uYWNvLmxhbmd1YWdlcy5Db21wbGV0aW9uSXRlbUtpbmQ7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLlRleHQ6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuVGV4dDtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuTWV0aG9kOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLk1ldGhvZDtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuRnVuY3Rpb246IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuRnVuY3Rpb247XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkNvbnN0cnVjdG9yOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNvbnN0cnVjdG9yO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5GaWVsZDogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5GaWVsZDtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuVmFyaWFibGU6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuVmFyaWFibGU7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkNsYXNzOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLkNsYXNzO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5JbnRlcmZhY2U6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuSW50ZXJmYWNlO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5Nb2R1bGU6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuTW9kdWxlO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5Qcm9wZXJ0eTogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuVW5pdDogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Vbml0O1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5WYWx1ZTogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5WYWx1ZTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuRW51bTogcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5FbnVtO1xuICAgICAgICBjYXNlIG1JdGVtS2luZC5LZXl3b3JkOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLktleXdvcmQ7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLlNuaXBwZXQ6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuU25pcHBldDtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuQ29sb3I6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuQ29sb3I7XG4gICAgICAgIGNhc2UgbUl0ZW1LaW5kLkZpbGU6IHJldHVybiBscy5Db21wbGV0aW9uSXRlbUtpbmQuRmlsZTtcbiAgICAgICAgY2FzZSBtSXRlbUtpbmQuUmVmZXJlbmNlOiByZXR1cm4gbHMuQ29tcGxldGlvbkl0ZW1LaW5kLlJlZmVyZW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIGxzLkNvbXBsZXRpb25JdGVtS2luZC5Qcm9wZXJ0eTtcbn1cbmZ1bmN0aW9uIHRvVGV4dEVkaXQodGV4dEVkaXQpIHtcbiAgICBpZiAoIXRleHRFZGl0KSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmdlOiB0b1JhbmdlKHRleHRFZGl0LnJhbmdlKSxcbiAgICAgICAgdGV4dDogdGV4dEVkaXQubmV3VGV4dFxuICAgIH07XG59XG52YXIgQ29tcGxldGlvbkFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcGxldGlvbkFkYXB0ZXIoX3dvcmtlcikge1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBfd29ya2VyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcGxldGlvbkFkYXB0ZXIucHJvdG90eXBlLCBcInRyaWdnZXJDaGFyYWN0ZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gWycuJywgJzonLCAnPCcsICdcIicsICc9JywgJy8nXTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgQ29tcGxldGlvbkFkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVDb21wbGV0aW9uSXRlbXMgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCBjb250ZXh0LCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5kb0NvbXBsZXRlKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgd29yZEluZm8gPSBtb2RlbC5nZXRXb3JkVW50aWxQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgICAgICB2YXIgd29yZFJhbmdlID0gbmV3IFJhbmdlKHBvc2l0aW9uLmxpbmVOdW1iZXIsIHdvcmRJbmZvLnN0YXJ0Q29sdW1uLCBwb3NpdGlvbi5saW5lTnVtYmVyLCB3b3JkSW5mby5lbmRDb2x1bW4pO1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gaW5mby5pdGVtcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0VGV4dDogZW50cnkuaW5zZXJ0VGV4dCB8fCBlbnRyeS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgc29ydFRleHQ6IGVudHJ5LnNvcnRUZXh0LFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXh0OiBlbnRyeS5maWx0ZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uOiBlbnRyeS5kb2N1bWVudGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWw6IGVudHJ5LmRldGFpbCxcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IHdvcmRSYW5nZSxcbiAgICAgICAgICAgICAgICAgICAga2luZDogdG9Db21wbGV0aW9uSXRlbUtpbmQoZW50cnkua2luZCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkudGV4dEVkaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yYW5nZSA9IHRvUmFuZ2UoZW50cnkudGV4dEVkaXQucmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmluc2VydFRleHQgPSBlbnRyeS50ZXh0RWRpdC5uZXdUZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuYWRkaXRpb25hbFRleHRFZGl0cykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZGl0aW9uYWxUZXh0RWRpdHMgPSBlbnRyeS5hZGRpdGlvbmFsVGV4dEVkaXRzLm1hcCh0b1RleHRFZGl0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Lmluc2VydFRleHRGb3JtYXQgPT09IGxzLkluc2VydFRleHRGb3JtYXQuU25pcHBldCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmluc2VydFRleHRSdWxlcyA9IG1vbmFjby5sYW5ndWFnZXMuQ29tcGxldGlvbkl0ZW1JbnNlcnRUZXh0UnVsZS5JbnNlcnRBc1NuaXBwZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzSW5jb21wbGV0ZTogaW5mby5pc0luY29tcGxldGUsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnM6IGl0ZW1zXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb21wbGV0aW9uQWRhcHRlcjtcbn0oKSk7XG5leHBvcnQgeyBDb21wbGV0aW9uQWRhcHRlciB9O1xuLy8gLS0tIGhvdmVyIC0tLS0tLVxuZnVuY3Rpb24gaXNNYXJrdXBDb250ZW50KHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRoaW5nLmtpbmQgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gdG9NYXJrZG93blN0cmluZyhlbnRyeSkge1xuICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogZW50cnlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzTWFya3VwQ29udGVudChlbnRyeSkpIHtcbiAgICAgICAgaWYgKGVudHJ5LmtpbmQgPT09ICdwbGFpbnRleHQnKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZS5yZXBsYWNlKC9bXFxcXGAqX3t9W1xcXSgpIytcXC0uIV0vZywgJ1xcXFwkJicpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogZW50cnkudmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmFsdWU6ICdgYGAnICsgZW50cnkubGFuZ3VhZ2UgKyAnXFxuJyArIGVudHJ5LnZhbHVlICsgJ1xcbmBgYFxcbicgfTtcbn1cbmZ1bmN0aW9uIHRvTWFya2VkU3RyaW5nQXJyYXkoY29udGVudHMpIHtcbiAgICBpZiAoIWNvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnRzKSkge1xuICAgICAgICByZXR1cm4gY29udGVudHMubWFwKHRvTWFya2Rvd25TdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gW3RvTWFya2Rvd25TdHJpbmcoY29udGVudHMpXTtcbn1cbnZhciBIb3ZlckFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSG92ZXJBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgSG92ZXJBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlSG92ZXIgPSBmdW5jdGlvbiAobW9kZWwsIHBvc2l0aW9uLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlci5kb0hvdmVyKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoIWluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGluZm8ucmFuZ2UpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOiB0b01hcmtlZFN0cmluZ0FycmF5KGluZm8uY29udGVudHMpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIb3ZlckFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgSG92ZXJBZGFwdGVyIH07XG4vLyAtLS0gZG9jdW1lbnQgaGlnaGxpZ2h0cyAtLS0tLS1cbmZ1bmN0aW9uIHRvSGlnaGxpZ2hLaW5kKGtpbmQpIHtcbiAgICB2YXIgbUtpbmQgPSBtb25hY28ubGFuZ3VhZ2VzLkRvY3VtZW50SGlnaGxpZ2h0S2luZDtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBscy5Eb2N1bWVudEhpZ2hsaWdodEtpbmQuUmVhZDogcmV0dXJuIG1LaW5kLlJlYWQ7XG4gICAgICAgIGNhc2UgbHMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLldyaXRlOiByZXR1cm4gbUtpbmQuV3JpdGU7XG4gICAgICAgIGNhc2UgbHMuRG9jdW1lbnRIaWdobGlnaHRLaW5kLlRleHQ6IHJldHVybiBtS2luZC5UZXh0O1xuICAgIH1cbiAgICByZXR1cm4gbUtpbmQuVGV4dDtcbn1cbnZhciBEb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRIaWdobGlnaHRzID0gZnVuY3Rpb24gKG1vZGVsLCBwb3NpdGlvbiwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHsgcmV0dXJuIHdvcmtlci5maW5kRG9jdW1lbnRIaWdobGlnaHRzKHJlc291cmNlLnRvU3RyaW5nKCksIGZyb21Qb3NpdGlvbihwb3NpdGlvbikpOyB9KS50aGVuKGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgaWYgKCFpdGVtcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRvUmFuZ2UoaXRlbS5yYW5nZSksXG4gICAgICAgICAgICAgICAga2luZDogdG9IaWdobGlnaEtpbmQoaXRlbS5raW5kKVxuICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudEhpZ2hsaWdodEFkYXB0ZXI7XG59KCkpO1xuZXhwb3J0IHsgRG9jdW1lbnRIaWdobGlnaHRBZGFwdGVyIH07XG4vLyAtLS0gZG9jdW1lbnQgc3ltYm9scyAtLS0tLS1cbmZ1bmN0aW9uIHRvU3ltYm9sS2luZChraW5kKSB7XG4gICAgdmFyIG1LaW5kID0gbW9uYWNvLmxhbmd1YWdlcy5TeW1ib2xLaW5kO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRmlsZTogcmV0dXJuIG1LaW5kLkFycmF5O1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTW9kdWxlOiByZXR1cm4gbUtpbmQuTW9kdWxlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTmFtZXNwYWNlOiByZXR1cm4gbUtpbmQuTmFtZXNwYWNlO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuUGFja2FnZTogcmV0dXJuIG1LaW5kLlBhY2thZ2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5DbGFzczogcmV0dXJuIG1LaW5kLkNsYXNzO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuTWV0aG9kOiByZXR1cm4gbUtpbmQuTWV0aG9kO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuUHJvcGVydHk6IHJldHVybiBtS2luZC5Qcm9wZXJ0eTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkZpZWxkOiByZXR1cm4gbUtpbmQuRmllbGQ7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Db25zdHJ1Y3RvcjogcmV0dXJuIG1LaW5kLkNvbnN0cnVjdG9yO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuRW51bTogcmV0dXJuIG1LaW5kLkVudW07XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5JbnRlcmZhY2U6IHJldHVybiBtS2luZC5JbnRlcmZhY2U7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5GdW5jdGlvbjogcmV0dXJuIG1LaW5kLkZ1bmN0aW9uO1xuICAgICAgICBjYXNlIGxzLlN5bWJvbEtpbmQuVmFyaWFibGU6IHJldHVybiBtS2luZC5WYXJpYWJsZTtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkNvbnN0YW50OiByZXR1cm4gbUtpbmQuQ29uc3RhbnQ7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5TdHJpbmc6IHJldHVybiBtS2luZC5TdHJpbmc7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5OdW1iZXI6IHJldHVybiBtS2luZC5OdW1iZXI7XG4gICAgICAgIGNhc2UgbHMuU3ltYm9sS2luZC5Cb29sZWFuOiByZXR1cm4gbUtpbmQuQm9vbGVhbjtcbiAgICAgICAgY2FzZSBscy5TeW1ib2xLaW5kLkFycmF5OiByZXR1cm4gbUtpbmQuQXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBtS2luZC5GdW5jdGlvbjtcbn1cbnZhciBEb2N1bWVudFN5bWJvbEFkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRTeW1ib2xBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRTeW1ib2xBZGFwdGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRTeW1ib2xzID0gZnVuY3Rpb24gKG1vZGVsLCB0b2tlbikge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBtb2RlbC51cmk7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXIocmVzb3VyY2UpLnRoZW4oZnVuY3Rpb24gKHdvcmtlcikgeyByZXR1cm4gd29ya2VyLmZpbmREb2N1bWVudFN5bWJvbHMocmVzb3VyY2UudG9TdHJpbmcoKSk7IH0pLnRoZW4oZnVuY3Rpb24gKGl0ZW1zKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgZGV0YWlsOiAnJyxcbiAgICAgICAgICAgICAgICBjb250YWluZXJOYW1lOiBpdGVtLmNvbnRhaW5lck5hbWUsXG4gICAgICAgICAgICAgICAga2luZDogdG9TeW1ib2xLaW5kKGl0ZW0ua2luZCksXG4gICAgICAgICAgICAgICAgcmFuZ2U6IHRvUmFuZ2UoaXRlbS5sb2NhdGlvbi5yYW5nZSksXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uUmFuZ2U6IHRvUmFuZ2UoaXRlbS5sb2NhdGlvbi5yYW5nZSlcbiAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRG9jdW1lbnRTeW1ib2xBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERvY3VtZW50U3ltYm9sQWRhcHRlciB9O1xudmFyIERvY3VtZW50TGlua0FkYXB0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRMaW5rQWRhcHRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIERvY3VtZW50TGlua0FkYXB0ZXIucHJvdG90eXBlLnByb3ZpZGVMaW5rcyA9IGZ1bmN0aW9uIChtb2RlbCwgdG9rZW4pIHtcbiAgICAgICAgdmFyIHJlc291cmNlID0gbW9kZWwudXJpO1xuICAgICAgICByZXR1cm4gdGhpcy5fd29ya2VyKHJlc291cmNlKS50aGVuKGZ1bmN0aW9uICh3b3JrZXIpIHsgcmV0dXJuIHdvcmtlci5maW5kRG9jdW1lbnRMaW5rcyhyZXNvdXJjZS50b1N0cmluZygpKTsgfSkudGhlbihmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgICAgIGlmICghaXRlbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtzOiBpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiB0b1JhbmdlKGl0ZW0ucmFuZ2UpLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IGl0ZW0udGFyZ2V0XG4gICAgICAgICAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBEb2N1bWVudExpbmtBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IERvY3VtZW50TGlua0FkYXB0ZXIgfTtcbmZ1bmN0aW9uIGZyb21Gb3JtYXR0aW5nT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGFiU2l6ZTogb3B0aW9ucy50YWJTaXplLFxuICAgICAgICBpbnNlcnRTcGFjZXM6IG9wdGlvbnMuaW5zZXJ0U3BhY2VzXG4gICAgfTtcbn1cbnZhciBEb2N1bWVudEZvcm1hdHRpbmdFZGl0UHJvdmlkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRG9jdW1lbnRGb3JtYXR0aW5nRWRpdFByb3ZpZGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRG9jdW1lbnRGb3JtYXR0aW5nRWRpdFByb3ZpZGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRGb3JtYXR0aW5nRWRpdHMgPSBmdW5jdGlvbiAobW9kZWwsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmZvcm1hdChyZXNvdXJjZS50b1N0cmluZygpLCBudWxsLCBmcm9tRm9ybWF0dGluZ09wdGlvbnMob3B0aW9ucykpLnRoZW4oZnVuY3Rpb24gKGVkaXRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0cyB8fCBlZGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdHMubWFwKHRvVGV4dEVkaXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERvY3VtZW50Rm9ybWF0dGluZ0VkaXRQcm92aWRlcjtcbn0oKSk7XG5leHBvcnQgeyBEb2N1bWVudEZvcm1hdHRpbmdFZGl0UHJvdmlkZXIgfTtcbnZhciBEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2N1bWVudFJhbmdlRm9ybWF0dGluZ0VkaXRQcm92aWRlcihfd29ya2VyKSB7XG4gICAgICAgIHRoaXMuX3dvcmtlciA9IF93b3JrZXI7XG4gICAgfVxuICAgIERvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyLnByb3RvdHlwZS5wcm92aWRlRG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdFZGl0cyA9IGZ1bmN0aW9uIChtb2RlbCwgcmFuZ2UsIG9wdGlvbnMsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gd29ya2VyLmZvcm1hdChyZXNvdXJjZS50b1N0cmluZygpLCBmcm9tUmFuZ2UocmFuZ2UpLCBmcm9tRm9ybWF0dGluZ09wdGlvbnMob3B0aW9ucykpLnRoZW4oZnVuY3Rpb24gKGVkaXRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlZGl0cyB8fCBlZGl0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZWRpdHMubWFwKHRvVGV4dEVkaXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IERvY3VtZW50UmFuZ2VGb3JtYXR0aW5nRWRpdFByb3ZpZGVyIH07XG52YXIgRm9sZGluZ1JhbmdlQWRhcHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGb2xkaW5nUmFuZ2VBZGFwdGVyKF93b3JrZXIpIHtcbiAgICAgICAgdGhpcy5fd29ya2VyID0gX3dvcmtlcjtcbiAgICB9XG4gICAgRm9sZGluZ1JhbmdlQWRhcHRlci5wcm90b3R5cGUucHJvdmlkZUZvbGRpbmdSYW5nZXMgPSBmdW5jdGlvbiAobW9kZWwsIGNvbnRleHQsIHRva2VuKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG1vZGVsLnVyaTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dvcmtlcihyZXNvdXJjZSkudGhlbihmdW5jdGlvbiAod29ya2VyKSB7IHJldHVybiB3b3JrZXIucHJvdmlkZUZvbGRpbmdSYW5nZXMocmVzb3VyY2UudG9TdHJpbmcoKSwgY29udGV4dCk7IH0pLnRoZW4oZnVuY3Rpb24gKHJhbmdlcykge1xuICAgICAgICAgICAgaWYgKCFyYW5nZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmFuZ2VzLm1hcChmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogcmFuZ2Uuc3RhcnRMaW5lICsgMSxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiByYW5nZS5lbmRMaW5lICsgMVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByYW5nZS5raW5kICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQua2luZCA9IHRvRm9sZGluZ1JhbmdlS2luZChyYW5nZS5raW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGb2xkaW5nUmFuZ2VBZGFwdGVyO1xufSgpKTtcbmV4cG9ydCB7IEZvbGRpbmdSYW5nZUFkYXB0ZXIgfTtcbmZ1bmN0aW9uIHRvRm9sZGluZ1JhbmdlS2luZChraW5kKSB7XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5Db21tZW50OiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLkNvbW1lbnQ7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5JbXBvcnRzOiByZXR1cm4gbW9uYWNvLmxhbmd1YWdlcy5Gb2xkaW5nUmFuZ2VLaW5kLkltcG9ydHM7XG4gICAgICAgIGNhc2UgbHMuRm9sZGluZ1JhbmdlS2luZC5SZWdpb246IHJldHVybiBtb25hY28ubGFuZ3VhZ2VzLkZvbGRpbmdSYW5nZUtpbmQuUmVnaW9uO1xuICAgIH1cbiAgICByZXR1cm4gdm9pZCAwO1xufVxuIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4ndXNlIHN0cmljdCc7XG52YXIgU1RPUF9XSEVOX0lETEVfRk9SID0gMiAqIDYwICogMTAwMDsgLy8gMm1pblxudmFyIFdvcmtlck1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV29ya2VyTWFuYWdlcihkZWZhdWx0cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9kZWZhdWx0cyA9IGRlZmF1bHRzO1xuICAgICAgICB0aGlzLl93b3JrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9pZGxlQ2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jaGVja0lmSWRsZSgpOyB9LCAzMCAqIDEwMDApO1xuICAgICAgICB0aGlzLl9sYXN0VXNlZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lciA9IHRoaXMuX2RlZmF1bHRzLm9uRGlkQ2hhbmdlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9zdG9wV29ya2VyKCk7IH0pO1xuICAgIH1cbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5fc3RvcFdvcmtlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3dvcmtlcikge1xuICAgICAgICAgICAgdGhpcy5fd29ya2VyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2xpZW50ID0gbnVsbDtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faWRsZUNoZWNrSW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLl9jb25maWdDaGFuZ2VMaXN0ZW5lci5kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICB9O1xuICAgIFdvcmtlck1hbmFnZXIucHJvdG90eXBlLl9jaGVja0lmSWRsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl93b3JrZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGltZVBhc3NlZFNpbmNlTGFzdFVzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVzZWRUaW1lO1xuICAgICAgICBpZiAodGltZVBhc3NlZFNpbmNlTGFzdFVzZWQgPiBTVE9QX1dIRU5fSURMRV9GT1IpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0b3BXb3JrZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgV29ya2VyTWFuYWdlci5wcm90b3R5cGUuX2dldENsaWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fbGFzdFVzZWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKCF0aGlzLl9jbGllbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmtlciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlV2ViV29ya2VyKHtcbiAgICAgICAgICAgICAgICAvLyBtb2R1bGUgdGhhdCBleHBvcnRzIHRoZSBjcmVhdGUoKSBtZXRob2QgYW5kIHJldHVybnMgYSBgSFRNTFdvcmtlcmAgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICBtb2R1bGVJZDogJ3ZzL2xhbmd1YWdlL2h0bWwvaHRtbFdvcmtlcicsXG4gICAgICAgICAgICAgICAgLy8gcGFzc2VkIGluIHRvIHRoZSBjcmVhdGUoKSBtZXRob2RcbiAgICAgICAgICAgICAgICBjcmVhdGVEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlU2V0dGluZ3M6IHRoaXMuX2RlZmF1bHRzLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlSWQ6IHRoaXMuX2RlZmF1bHRzLmxhbmd1YWdlSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLl9kZWZhdWx0cy5sYW5ndWFnZUlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX2NsaWVudCA9IHRoaXMuX3dvcmtlci5nZXRQcm94eSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnQ7XG4gICAgfTtcbiAgICBXb3JrZXJNYW5hZ2VyLnByb3RvdHlwZS5nZXRMYW5ndWFnZVNlcnZpY2VXb3JrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByZXNvdXJjZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHJlc291cmNlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfY2xpZW50O1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0Q2xpZW50KCkudGhlbihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICBfY2xpZW50ID0gY2xpZW50O1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX3dvcmtlci53aXRoU3luY2VkUmVzb3VyY2VzKHJlc291cmNlcyk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF9jbGllbnQ7IH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFdvcmtlck1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgV29ya2VyTWFuYWdlciB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==