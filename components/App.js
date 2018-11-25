export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      @import url("//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css");
      main {
        height: 100vh;
      }
    `}</style>
  </main>
);
