"use client";

const items = [
  "BACKEND ENGINEERING",
  "DATA PIPELINES",
  "ETL SYSTEMS",
  "REST APIs",
  "SPRING BOOT",
  "BIGQUERY",
  "MEDALLION ARCHITECTURE",
  "GCP · CLOUD NATIVE",
  "SQL · T-SQL",
  "DOCKER",
  "SYSTEM DESIGN",
  "DATA WAREHOUSING",
];

export default function Ticker() {
  const repeated = [...items, ...items];
  return (
    <div className="border-y border-border/70 py-3 overflow-hidden bg-surface">
      <div className="ticker-track flex gap-10 whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono text-[10px] tracking-[0.26em] text-text-dim uppercase">
              {item}
            </span>
            <span className="text-electric-aqua/60 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
