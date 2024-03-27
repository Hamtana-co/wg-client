import AccountMain from "@/components/account";

export default function AccountSections({
  params,
}: {
  params: { slug: string };
}) {

  return (
    <div>
      <AccountMain item={params} />
    </div>
  );
}
