import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="relative w-[200px] aspect-[10/2]">
              <Image
                src="/assets/images/logo.png"
                alt="MeowTalker"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h4 className="hidden md:block ml-4 text-lg">
              Finally! With {" "}
              <span className="text-blue-600">
                MeowTalker
              </span>{" "}
              , I can talk to my cat! 🐱
            </h4>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              首页
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              博客
            </Link>
            <Link href="/login" className="hover:text-blue-600 transition-colors">
              登录
            </Link>
            <Link href="/register" className="hover:text-blue-600 transition-colors">
              注册
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
