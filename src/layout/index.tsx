import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

function Layout({ children }: { children: any }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-grow mb-16">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
