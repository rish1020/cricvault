import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import { getTrophyById, trophies } from "@/lib/data";

export function generateStaticParams() {
  return trophies.map((t) => ({ id: t.id }));
}

export default async function TrophyRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trophy = getTrophyById(id);
  if (!trophy) notFound();
  redirect(`/tournaments/international/${trophy.gender}/${id}`);
}
