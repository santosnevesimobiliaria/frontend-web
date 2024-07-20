
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-grow h-full w-full mb-16 bg-[#FBFBFA]">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
