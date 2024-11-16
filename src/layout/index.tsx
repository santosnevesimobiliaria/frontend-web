
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { useRouter } from 'next/router';

function Layout({ children }: { children: any }) {
  const router = useRouter();
  const isAdminPage = router.asPath.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header isAdmin={isAdminPage} />
      <div className="flex-grow h-full w-full pb-16 bg-[#FBFBFA]">
        {children}
      </div>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default Layout;
