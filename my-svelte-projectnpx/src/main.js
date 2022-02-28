import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'world',
    test: 'test',
    current: 'hej',
  },
})

export default app
