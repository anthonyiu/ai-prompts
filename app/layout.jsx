import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";

export const metadata = {
  title: "AI Prompts Repository",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav></Nav>
            {children}
          </main>

          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
