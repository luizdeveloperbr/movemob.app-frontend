import { useRouter } from "next/router";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export default function BreadCrumps() {
  const router = useRouter();
  const listRouters = router.asPath.split("/");
  return (
    <>
      {router.asPath !== "/" ? (
        <div className="text-sm breadcrumbs">
          <ul>
            {listRouters.map((link, index) => (
              <li key={index}>
                <a onClick={() => router.push({ pathname: `/${link}` })}>
                  {link || <HomeOutlinedIcon /> }
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
