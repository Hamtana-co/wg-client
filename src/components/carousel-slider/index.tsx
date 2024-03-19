import CarouselCard from "./card";
import { IItemProps } from "./types";

export default function CarouselSlider({ sectionTitle, items }: IItemProps) {
  return (
    <>
      <section className="flex flex-col rtl py-24">
        <div className="pb-8">
          <h2 className="text-white text-2xl">{sectionTitle}</h2>
        </div>
        <div className="flex items-center">
          {items.length >= 1 ? (
            items.map((item) => (
              <CarouselCard
                key={`team-${item.team_name}`}
                teamName={item.team_name}
                href={item.slug}
              />
            ))
          ) : (
            <div>
              <p className="text-white">تیمی وجود ندارد</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
