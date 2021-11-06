import Options from './options.svelte';

const options = new Options({
  target: document.body,
  props: {
    button: 'Options',
  },
});

export default options;
