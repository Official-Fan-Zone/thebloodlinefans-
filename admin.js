const adminBtn = document.getElementById('showAdminBtn');
const adminPanel = document.getElementById('adminPanel');
adminBtn.addEventListener('click', () => {
  const pass = prompt('Enter admin password:');
  if (pass === '19moosty99') {
    adminPanel.classList.remove('hidden');
    alert('Access granted 👑');
  } else {
    alert('Incorrect password ❌');
  }
});