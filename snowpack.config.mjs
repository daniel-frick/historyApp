export default {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
   '@snowpack/plugin-sass',
  ],
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
}