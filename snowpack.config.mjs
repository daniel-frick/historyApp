export default {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
   '@snowpack/plugin-sass',
   '@snowpack/plugin-dotenv'
  ],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  env: {
    NAME:'daniel'
  }
}