const div = document.createElement('div');
const overlay = document.createElement('style');
overlay.innerHTML =
  '.ob-overlay {border-radius: 50%;z-index: 500;position: fixed;background: #fff;bottom: 6vh;right: 2rem;padding: 6px;height: 5rem;width: 5rem;font-size:38px;text-align:center;vertical-align: middle;}';
div.textContent = '📋';
div.classList.add('ob-overlay');
document.getElementsByTagName('head')[0].appendChild(overlay);
document.body.appendChild(div);
