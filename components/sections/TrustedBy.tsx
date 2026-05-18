import { TRUSTED_BRANDS } from "@/lib/constants";

export default function TrustedBy() {
  return (
    <section className="py-12 bg-surface-dim border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-gutter">
        <p className="text-center text-label-sm text-on-surface-variant/60 tracking-widest mb-10 uppercase">
          Güven Veren Markalar
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-60 transition-all duration-700">
          {TRUSTED_BRANDS.map((brand) => (
            <span key={brand} className="text-[22px] font-bold text-on-surface tracking-tight">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
