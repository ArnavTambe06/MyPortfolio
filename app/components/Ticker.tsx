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
    <div className="border-y border-border py-4 overflow-hidden bg-surface-2">
      <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="font-mono text-[10px] tracking-[0.2em] text-text-dim">{item}</span>
            <span className="text-phosphor/40 text-xs">◈</span>
          </span>
        ))}
      </div>
    </div>
  );
}
