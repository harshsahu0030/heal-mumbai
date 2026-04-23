import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";

import Footer from "@/components/footer/Footer";
import CTA from "@/components/helper/CTA";
import SmoothScroller from "@/components/helper/SmoothScroller";
import PageLoader from "@/components/helper/PageLoader";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <SmoothScroller>
        <PageLoader>
          {children}
          <CTA />
          <Footer />
        </PageLoader>
      </SmoothScroller>
    </>
  );
}
