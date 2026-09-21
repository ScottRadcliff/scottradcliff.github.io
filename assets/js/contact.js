const copyEmailButton = document.querySelector('.copy-email');
const copyEmailStatus = document.querySelector('.copy-email-status');

function copyEmailFallback(email) {
  const field = document.createElement('textarea');
  field.value = email;
  field.readOnly = true;
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  try {
    field.select();
    if (!document.execCommand('copy')) {
      throw new Error('Copy failed');
    }
  } finally {
    field.remove();
    copyEmailButton.focus();
  }
}

if (copyEmailButton && copyEmailStatus) {
  copyEmailButton.addEventListener('click', async () => {
    copyEmailStatus.textContent = '';
    try {
      const email = copyEmailButton.dataset.email;
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(email);
        } catch {
          copyEmailFallback(email);
        }
      } else {
        copyEmailFallback(email);
      }
      copyEmailStatus.textContent = 'Copied!';
    } catch {
      copyEmailStatus.textContent = 'Couldn’t copy. Please select and copy the address.';
    }
  });
}
