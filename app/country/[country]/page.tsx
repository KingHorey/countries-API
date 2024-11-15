// export const experimental_ppr = true;

import Information from "@/app/lib/ui/countryInformation/information";

export default async function Home({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const nation = await params;
  const name = nation.country;
  return <Information name={name} />;
}
