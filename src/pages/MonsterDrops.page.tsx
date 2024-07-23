import { usePage } from "@/providers/PageProvider";

export const MonsterDropsPage = () => {
  const { setIndex } = usePage();
  setIndex(1)
  return <>Hello there</>;
};
