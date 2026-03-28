import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { getDomesticTrophyById, domesticTrophies } from "@/lib/domesticData";

export function generateStaticParams() {
  return domesticTrophies.map((t) => ({ id: t.id }));
}

export default async function DomesticRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trophy = getDomesticTrophyById(id);
  if (!trophy) notFound();
  redirect(`/tournaments/domestic/${trophy.gender}/${id}`);
}
