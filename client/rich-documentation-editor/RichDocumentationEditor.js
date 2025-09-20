import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function RichDocumentationEditor() {
  document.addEventListener('focusin', function (event) {
    const target = event.target;
    // Check if the focused element is inside the properties panel
    if (target.closest('.bio-properties-panel')) {
      if (
        target.id === 'bio-properties-panel-documentation' ||
        target.id === 'bio-properties-panel-processDocumentation' ||
        target.id === 'bio-properties-panel-description' ||
        target.id === 'bio-properties-panel-question' ||
        target.id === 'bio-properties-panel-allowedAnswers'
      ) {
        event.preventDefault();
        event.stopPropagation();

        // Prevent default editing
        target.blur();
        target.setAttribute('placeholder', 'Click to edit.')

        // Only open one modal at a time
        if (document.getElementById('custom-richtext-modal')) return;

        // Create modal
        const modal = document.createElement('div');
        modal.id = 'custom-richtext-modal';
        modal.style = `
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; z-index: 9999; background: rgba(0,0,0,0.5);
        `;

        // Modal content with Quill container
        modal.innerHTML = `
        <div style="background: #fff; padding: 24px; border-radius: 8px; min-width: 500px;">
            <h3>Edit Documentation</h3>
            <div id="quill-editor" style="height: 200px;">${
              target.value || ''
            }</div>
            <div style="margin-top: 16px; text-align: right;">
            <button id="richtext-cancel">Cancel</button>
            <button id="richtext-save">Save</button>
            <button id="richtext-clear">Clear</button>
            </div>
        </div>
        `;

        document.body.appendChild(modal);

        // Initialize Quill
        const quill = new Quill('#quill-editor', {
          theme: 'snow',
        });

        // Set initial content (if any)
        if (target.value) {
          quill.root.innerHTML = target.value;
        }

        // Handle save/cancel/clear
        modal.querySelector('#richtext-cancel').onclick = () => {
          document.body.removeChild(modal);
        };
        modal.querySelector('#richtext-save').onclick = () => {
          const newValue = quill.root.innerHTML;
          target.value = newValue.replace('<p><br></p>', '');
          target.setAttribute(
            'data-value',
            newValue.replace('<p><br></p>', '')
          );
          target.dispatchEvent(new Event('input', { bubbles: true }));
          document.body.removeChild(modal);
        };
        modal.querySelector('#richtext-clear').onclick = () => {
          quill.setText('');
        };
      }
    }
  });
}
