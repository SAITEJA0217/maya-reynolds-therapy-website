import type { Service } from "@/data/types";

type ServiceCardProps = {
  service: Service;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-title`}
      className="reveal group flex h-full flex-col border-t-2 border-olive bg-paper p-8 transition-transform duration-500 ease-(--ease-calm) hover:-translate-y-1 motion-reduce:transform-none lg:p-10"
    >
      <p aria-hidden="true" className="font-serif text-small italic text-clay">
        0{index + 1}
      </p>
      <h4 id={`${service.id}-title`} className="mt-3 text-h3 text-ink">
        {service.title}
      </h4>
      <p className="mt-4 flex-1 text-muted">{service.body}</p>
      <div className="mt-8 border-t border-line pt-5">
        <p className="eyebrow text-muted">Often draws on</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Approaches used for ${service.title}`}>
          {service.methods.map((method) => (
            <li
              key={method}
              className="rounded-full border border-line px-3 py-1 text-[0.85rem] text-olive"
            >
              {method}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
