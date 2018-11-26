export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      @import url("//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css");
      main {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .messages-container {
        flex: 1;
      }
      main > .ui {
        margin: 0 !important;
        border-radius: 0 !important;
      }
    `}</style>
  </main>
);
