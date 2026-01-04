// Imports
import * as monaco from 'monaco-editor';
import { createHighlighter } from 'shiki';
import { shikiToMonaco } from '@shikijs/monaco';
import { customTheme } from './shiki_theme.js';

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  }
};

// Shiki highlighter
const highlighter = await createHighlighter({
  themes: [
    customTheme
  ],
  langs: [
    'javascript'
  ],
});

// Convert shiki highlighter to monaco
shikiToMonaco(highlighter, monaco);

// Monaco editor
const editor = monaco.editor.create(document.getElementById('generatedCode'), {
  language: 'javascript',
  theme: 'custom-theme',
  fontFamily: '"JetBrains Mono", monospace',
  fontLigatures: true,
  "bracketPairColorization.enabled": false,
  value: 'rhinobloxStart = () => {};',
  readOnly: true
});

// Resize editor
window.addEventListener('resize', () => {
  editor.layout();
});

window.updateCode = (code) => {
  editor.setValue(code);
}