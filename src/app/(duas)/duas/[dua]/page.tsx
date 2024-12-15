import MainContentArea from "@/components/global/main-content-area";
interface DuaPageParams {
params: Promise<{ params: string }>;
searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function DuasPage({ params, searchParams}: DuaPageParams) {

  console.log("param object :", await params);
  const queries = await searchParams;

  console.log(`see queriesss`, queries);

  return (
    <>
      {/* Main Content */}
      <MainContentArea className="flex-1" {...queries} />
    </>
  );
}
