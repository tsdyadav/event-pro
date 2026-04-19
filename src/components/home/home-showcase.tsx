import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, MoveRight } from "lucide-react";
import { getFeaturedCategories } from "@/services/category.service";
import { getPackages } from "@/services/package.service";
import { KidsDecorationsBand } from "@/components/home/kids-decorations-band";
import type { DecorPackage } from "@/types/package";

type CategoryCardData = {
  image: string;
  title: string;
  label: string;
};

function repeatToLength<T>(items: T[], count: number) {
  return Array.from({ length: count }, (_, index) => items[index % items.length]);
}

function toCategoryCardData(category: { image: string; name: string; description: string }): CategoryCardData {
  return {
    image: category.image,
    title: category.name,
    label: category.description,
  };
}

function toPackageCardData(item: DecorPackage): CategoryCardData {
  return {
    image: item.heroImage,
    title: item.title,
    label: item.category,
  };
}

function ProductCard({ item }: { item: CategoryCardData }) {
  return (
    <article className="group rounded-[14px] bg-white p-3 shadow-[0_14px_40px_rgba(66,23,80,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden rounded-[10px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <div className="text-[10px] uppercase tracking-[0.28em] text-[#f0b400]">*****</div>
        <h3 className="mt-2 line-clamp-2 text-sm font-semibold leading-5 text-[#23172d]">
          {item.title}
        </h3>
        <p className="mt-1 text-[11px] leading-4 text-slate-500">{item.label}</p>
        <button className="mt-4 rounded-full bg-brand-gradient px-4 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white">
          BOOK NOW
        </button>
      </div>
    </article>
  );
}

function EditorialCard({
  title,
  description,
  images,
  actionLabel = "EXPLORE MORE",
}: {
  title: string;
  description: string;
  images: string[];
  actionLabel?: string;
}) {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="rounded-[18px] bg-[#fff6fb] p-5 shadow-[0_20px_60px_rgba(72,24,85,0.1)] md:p-7">
        <div className="max-w-md">
          <h2 className="text-3xl font-black leading-tight text-brand-500">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((src, index) => (
            <div key={`${src}-${index}`} className="relative h-40 overflow-hidden rounded-[12px] md:h-48">
              <Image src={src} alt={title} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-2 text-[11px] font-bold tracking-[0.18em] text-[#2f1833] shadow-[0_10px_25px_rgba(79,40,86,0.08)]">
            {actionLabel} <MoveRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function BirthdayIntroSection({ images }: { images: string[] }) {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="rounded-[18px] border border-[#f8e5ef] bg-[#fff9fc] px-4 py-4 shadow-[0_18px_50px_rgba(72,24,85,0.09)] md:px-5 md:py-5">
        <div className="max-w-sm">
          <h2 className="text-[2.05rem] font-black leading-[1.02] text-brand-500">
            Make Your Birthday
            <br />
            Extra Special
          </h2>
          <p className="mt-2 max-w-[280px] text-[11px] leading-4 text-[#d48ab1]">
            we are thrilled to offer a range of exceptional
            <br />
            decoration services tailored to elevate your space.
          </p>
        </div>

        <div className="mt-5 grid gap-3 grid-cols-2 md:grid-cols-4">
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative h-[148px] overflow-hidden rounded-[12px] bg-white md:h-[180px] lg:h-[188px]"
            >
              <Image src={src} alt="Birthday inspiration" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SplitShowcase({ items }: { items: DecorPackage[] }) {
  const showcaseHeroImage = "/assets/Placeholder.png";

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="rounded-[24px] border border-[#f8e2ec] bg-[#fff9fc] p-5 shadow-[0_32px_90px_rgba(72,24,85,0.12)] md:p-8">
        <div className="max-w-xl">
          <h2 className="text-[2.1rem] font-black leading-[1.02] text-[#e14eb4] md:text-[2.7rem]">
            Level Up Your Birthday Party
          </h2>
          <p className="mt-3 max-w-md text-[13px] leading-5 text-[#e28ab9]">
            Browse popular birthday themes with mixed-size cards, editorial imagery,
            and direct booking actions like the reference layout.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[22px] border border-[#f2e2db] bg-white">
          <div className="relative h-[220px] bg-[#fff6f8] md:h-[310px]">
            <Image
              src={showcaseHeroImage}
              alt="Level Up Your Birthday Party"
              fill
              className="scale-[0.92] object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="grid overflow-hidden rounded-[16px] bg-white shadow-[0_10px_30px_rgba(53,24,61,0.08)] md:grid-cols-2"
            >
              <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"} p-6`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-brand-500">
                  At your location
                </p>
                <h3 className="mt-3 text-[1.7rem] font-black leading-tight text-brand-500">
                  Minnie Mouse Themed
                  <br />
                  Birthday Party
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{item.shortDescription}</p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <span className="tracking-[0.24em] text-[#f0b400]">*****</span>
                  <span className="text-slate-500">{item.rating.toFixed(1)}</span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href={`/packages/${item.slug}`}
                    className="rounded-full bg-brand-gradient px-8 py-2 text-[11px] font-bold tracking-[0.14em] text-white"
                  >
                    BOOK NOW
                  </Link>
                  <button className="rounded-full border border-[#e3cedf] p-2 text-slate-500">
                    <Heart className="size-4" />
                  </button>
                </div>
              </div>
              <div className={`relative min-h-[240px] ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                <Image
                  src={item.gallery[1]?.url ?? item.heroImage}
                 
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-2 text-[11px] font-bold tracking-[0.16em] text-[#2f1833] shadow-[0_10px_25px_rgba(79,40,86,0.08)]">
            EXPLORE MORE <MoveRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductSection({
  title,
  description,
  items,
  compact = false,
}: {
  title: string;
  description: string;
  items: CategoryCardData[];
  compact?: boolean;
}) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-[18px] bg-[#fff6fb] p-5 shadow-[0_20px_60px_rgba(72,24,85,0.1)] md:p-7">
        <div className="text-center">
          <h2 className="text-3xl font-black text-brand-500">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">{description}</p>
        </div>
        {compact ? (
          <>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {items.map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="rounded-[12px] bg-white p-3 shadow-[0_12px_30px_rgba(66,23,80,0.06)]"
                >
                  <div className="relative h-44 overflow-hidden rounded-[10px] md:h-48">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="pt-3">
                    <div className="text-[9px] tracking-[0.18em] text-[#f0b400]">***** 4.6</div>
                    <h3 className="mt-1 text-[12px] font-semibold leading-4 text-[#23172d]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-500">{item.label}</p>
                    <button className="mt-3 rounded-full bg-brand-gradient px-4 py-1.5 text-[9px] font-bold tracking-[0.12em] text-white">
                      BOOK NOW <span className="ml-1">{">"}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#2f1833]">
                EXPLORE MORE <MoveRight className="size-3.5" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {items.map((item, index) => (
                <ProductCard key={`${item.title}-${index}`} item={item} />
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-2 text-[11px] font-bold tracking-[0.16em] text-[#2f1833] shadow-[0_10px_25px_rgba(79,40,86,0.08)]">
                DRAG TO SEE MORE <MoveRight className="size-3.5" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "20k+", label: "Completed projects" },
    { value: "240+", label: "Expert members" },
    { value: "12+", label: "Advanced tools" },
  ];

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="grid gap-6 rounded-[18px] bg-white p-6 text-center shadow-[0_16px_50px_rgba(69,25,80,0.08)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div key={item.label} className="relative">
            <p className="bg-brand-gradient bg-clip-text text-5xl font-black text-transparent">{item.value}</p>
            <p className="mt-2 text-sm text-slate-500">{item.label}</p>
            {index < stats.length - 1 ? (
              <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#f2dce9] lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function RomanticSection({ items }: { items: string[] }) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-[18px] bg-[#fff6fb] p-5 shadow-[0_20px_60px_rgba(72,24,85,0.1)] md:p-7">
        <div className="text-center">
          <h2 className="text-3xl font-black text-brand-500">Romantic Couple Experience</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Mixed-size image storytelling with one large hero panel and supporting
            images, similar to the screenshot's romantic showcase.
          </p>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[14px]">
            <Image src={items[0]} alt="Romantic setup" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(17,8,26,0.72)_100%)]" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-4xl font-black leading-tight">
                Minnie Mouse Themed
                <br />
                Birthday Party
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/80">
                Learn planning, coordination, and surprise ideas for intimate experiences.
              </p>
              <div className="mt-4 text-[10px] tracking-[0.24em] text-[#ffd54f]">***** 4.0</div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[150px] overflow-hidden rounded-[14px]">
              <Image src={items[1]} alt="Couple silhouette" fill className="object-cover" />
            </div>
            <div className="relative min-h-[150px] overflow-hidden rounded-[14px]">
              <Image src={items[2]} alt="Couple sunset" fill className="object-cover" />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative min-h-[150px] overflow-hidden rounded-[14px]">
              <Image src={items[3]} alt="Couple portrait" fill className="object-cover" />
            </div>
            <Link
              href="/categories/romantic-couple"
              className="flex min-h-[150px] items-center justify-center rounded-[14px] bg-brand-gradient p-8 text-center text-3xl font-black leading-tight text-white"
            >
              EXPLORE
              <br />
              MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialBlock() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="rounded-[18px] bg-[#fff6fb] p-6 shadow-[0_20px_60px_rgba(72,24,85,0.1)] md:p-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-brand-500">
            Success Stories That Inspire
            <br />
            Confidence in What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            Loved by clients who expect a seamless, visually memorable event setup.
          </p>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button className="rounded-full bg-[#6f294c] p-2 text-white">
            <ChevronLeft className="size-4" />
          </button>
          <div className="grid flex-1 gap-4 rounded-[16px] bg-[#edd8e5] p-4 md:grid-cols-[180px_1fr]">
            <div className="relative min-h-[160px] overflow-hidden rounded-[12px]">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                alt="Customer portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-[12px] bg-white p-5">
              <p className="text-sm leading-7 text-slate-600">
                "Working with this team was an absolute pleasure. The expertise and
                meticulous execution exceeded our expectations. Highly recommended!"
              </p>
              <div className="mt-5">
                <p className="font-semibold text-[#23172d]">John Doe</p>
                <p className="text-sm text-slate-500">CEO, XYZ Corp</p>
              </div>
            </div>
          </div>
          <button className="rounded-full bg-[#6f294c] p-2 text-white">
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function WelcomeStrip({ images }: { images: string[] }) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="flex flex-wrap items-end justify-center gap-5">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`relative w-[120px] overflow-hidden rounded-[999px] shadow-[0_20px_50px_rgba(115,35,139,0.16)] ${
              index % 2 === 0 ? "h-[190px]" : "h-[230px]"
            }`}
          >
            <Image src={src} alt="Decor collage" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-black text-brand-500">Welcome To DKG Pro</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          The vibrant ribbon of visuals near the bottom of the page, recreated as a
          clean branded welcome band.
        </p>
        <button className="mt-5 rounded-full bg-brand-gradient px-8 py-2 text-[11px] font-bold tracking-[0.14em] text-white">
          KNOW MORE
        </button>
      </div>
    </section>
  );
}

function TagCloud() {
  const tags = [
    "1st Birthday",
    "Baby Shower",
    "Canopy Decor",
    "Table Decor",
    "Flamingo",
    "Lanterns",
    "Lighting",
    "Balloons",
    "Theme Decoration",
    "Cake Table",
    "Welcome Board",
    "Entrance Styling",
    "Ring Setup",
    "Photo Booth",
    "Stage Backdrop",
    "Rooftop Party",
    "Family Gatherings",
    "Candlelight Date",
    "Kids Birthday Themes",
    "Wedding Anniversary",
  ];

  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="rounded-[18px] bg-[#fff6fb] p-6 shadow-[0_20px_60px_rgba(72,24,85,0.1)]">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-brand-500">Host your next birthday party with ease.</h3>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-[10px] border border-[#edd8e8] bg-white px-4 py-2 text-sm text-slate-600 shadow-[0_6px_16px_rgba(56,18,66,0.04)]"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function HomeShowcase() {
  const [categories, packages] = await Promise.all([
    getFeaturedCategories(),
    getPackages(),
  ]);

  const kidsCarouselCards = [
    {
      id: "kids-1",
      name: "Kid's Birthday",
      description: "Playful party styling with cake tables, balloons, and colorful kids themes.",
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "kids-2",
      name: "Adventure Theme",
      description: "Story-driven decor with bright props, playful backdrops, and themed activities.",
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "kids-3",
      name: "Princess Party",
      description: "Soft pastel celebration styling that feels more aligned with the mockup.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "kids-4",
      name: "Fun Theme Setup",
      description: "Indoor birthday decor with bright table accents and party energy.",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "kids-5",
      name: "Celebration Corner",
      description: "Kid-friendly party decor with photo-ready colors and festive styling.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const birthdayEditorial = [
    "/assets/crackfire.png",
    "/assets/cake.png",
    "/assets/hbd1.png",
    "/assets/hbd2.png"
  ];

  const occasionEditorial = [
    "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
  ];

  const weddingEditorial = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
  ];

  const festivalEditorial = [
    "https://images.unsplash.com/photo-1604427728074-4aeff36cd12d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?auto=format&fit=crop&w=1200&q=80",
  ];

  const packageCards = packages.map(toPackageCardData);
  const categoryCards = categories.map(toCategoryCardData);
  const mixedShowcase = [
    packageCards[0],
    packageCards[1],
    categoryCards[0],
    categoryCards[1],
  ];
  const balloonRingCards = [
    {
      image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=80",
      title: "Glossy Balloon Styling",
      label: "Balloon Ring Decoration",
    },
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      title: "Birthday Balloon Cluster",
      label: "Balloon Ring Decoration",
    },
    {
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=1200&q=80",
      title: "Heart Balloon Display",
      label: "Balloon Ring Decoration",
    },
    {
      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80",
      title: "Green Balloon Backdrop",
      label: "Balloon Ring Decoration",
    },
  ];

  return (
    <>
      <BirthdayIntroSection images={birthdayEditorial} />
      <SplitShowcase items={repeatToLength(packages, 4)} />
      <KidsDecorationsBand cards={kidsCarouselCards} />
      <EditorialCard
        title="Make Every Occasion Extra Special"
        description="A compact inspiration row that keeps the page moving between major product sections."
        images={occasionEditorial}
      />
      <ProductSection
        title="Balloon Ring Decoration"
        description="we are thrilled to offer a range of exceptional decoration services tailored to elevate your space."
        items={balloonRingCards}
        compact
      />
      <StatsBand />
      <EditorialCard
        title="Make Your's Wedding Extra Special"
        description="Wedding inspiration and intimate celebration imagery placed in a light editorial card."
        images={weddingEditorial}
      />
      <ProductSection
        title="Wedding Decoration"
        description="Explore elevated wedding decor packages, venue styling, and premium event atmospheres."
        items={repeatToLength(packageCards, 4)}
      />
      <ProductSection
        title="Bridal Entry Decoration"
        description="Grand walkway styling, floral gateways, and immersive entry designs curated for weddings."
        items={repeatToLength(categoryCards, 4)}
      />
      <ProductSection
        title="Bachelor's Party Decoration"
        description="Modern celebratory looks built for friend groups, lounges, rooftops, and vibrant nightlife setups."
        items={repeatToLength([...mixedShowcase].reverse(), 4)}
      />
      <RomanticSection
        items={[
          packages[1].heroImage,
          packages[1].gallery[1]?.url ?? packages[1].heroImage,
          packages[2].heroImage,
          packages[0].gallery[1]?.url ?? packages[0].heroImage,
        ]}
      />
      <ProductSection
        title="Anniversary Decoration Surprises"
        description="Soft romantic palettes, intimate scenes, and surprise-ready anniversary styling."
        items={repeatToLength([...mixedShowcase].reverse(), 4)}
      />
      <ProductSection
        title="Rooftop Decoration At Home"
        description="Open-air experiences with lounge lighting, ceiling drapes, and city-view photo moments."
        items={repeatToLength([...packageCards].reverse(), 4)}
      />
      <EditorialCard
        title="Make Every Festival Special"
        description="Festive visual storytelling with a large hero image and supporting thumbnails just like the reference."
        images={festivalEditorial}
      />
      <TestimonialBlock />
      <WelcomeStrip
        images={[
          "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80",
        ]}
      />
      <TagCloud />
    </>
  );
}
