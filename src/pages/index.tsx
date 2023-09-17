import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {

  const checkgroups = [
    { name: 'Breezer 600', key: 'breezer' },
    { name: 'Remos GX', key: 'remos' }
  ]

  return <div>
    {checkgroups.map((checkgroup) => (
      <Link href={`/checkgroup/${checkgroup.key}`} key={checkgroup.key}>
        <div key={checkgroup.key} className={`my-1 w-full px-4 py-2.5 bg-slate-100 rounded-xl shadow-sm flex items-start text-xl`}>
          {checkgroup.name}
        </div>
      </Link>
    ))}
  </div>
};

export default Home;
