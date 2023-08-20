import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return <div>
    <Link href="/checkgroup">
      <div className={`my-1 w-full px-4 py-2.5 bg-slate-100 rounded-xl shadow-sm flex items-start`}>
        Breezer 600
      </div>
    </Link>
  </div>
};

export default Home;
