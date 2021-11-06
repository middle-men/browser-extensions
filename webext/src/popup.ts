import Popup from './popup.svelte';

const popup = new Popup({
  target: document.body,
  props: {
    button: 'Popup',
  },
});

export default popup;
