"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calculator, Layers, Ruler, Waves } from "lucide-react";
import content from "@/content/content.json";

type FloorProductId = "laminate" | "engineered" | "hybrid" | "herringbone";
type SubfloorId =
  | "level"
  | "unevenConcrete"
  | "tiles"
  | "oldBoards"
  | "unknown";

type FloorProduct = {
  id: FloorProductId;
  label: string;
  materialPerSqm: number; // AUD / m²
  installPerSqm: number; // AUD / m²
};

type Subfloor = {
  id: SubfloorId;
  label: string;
  requiresSelfLevel: boolean;
};

const FLOOR_PRODUCTS: FloorProduct[] = [
  { id: "laminate", label: "Laminate", materialPerSqm: 35, installPerSqm: 35 },
  { id: "hybrid", label: "Hybrid", materialPerSqm: 55, installPerSqm: 40 },
  {
    id: "engineered",
    label: "Engineered Timber",
    materialPerSqm: 110,
    installPerSqm: 60,
  },
  {
    id: "herringbone",
    label: "Herringbone (Engineered)",
    materialPerSqm: 150,
    installPerSqm: 85,
  },
];

const SUBFLOORS: Subfloor[] = [
  {
    id: "level",
    label: "Level subfloor (ready to lay)",
    requiresSelfLevel: false,
  },
  {
    id: "unevenConcrete",
    label: "Uneven concrete / screed",
    requiresSelfLevel: true,
  },
  { id: "tiles", label: "Existing tiles", requiresSelfLevel: true },
  {
    id: "oldBoards",
    label: "Old floorboards (uneven)",
    requiresSelfLevel: true,
  },
  { id: "unknown", label: "Not sure", requiresSelfLevel: true },
];

// Self-levelling assumptions (AUD) — tweak to your real rates
const SELF_LEVEL_PER_SQM = 18; // AUD / m²
const SELF_LEVEL_MIN_CHARGE = 280; // AUD minimum if needed

function formatAUD(value: number) {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function FloorCostCalculator() {
  const [floorId, setFloorId] = React.useState<FloorProductId>("hybrid");
  const [subfloorId, setSubfloorId] = React.useState<SubfloorId>("level");
  const [sqmRaw, setSqmRaw] = React.useState<string>("");

  const sqm = React.useMemo(() => {
    const n = Number(String(sqmRaw).replace(",", "."));
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, n);
  }, [sqmRaw]);

  const product = React.useMemo(
    () => FLOOR_PRODUCTS.find((p) => p.id === floorId)!,
    [floorId]
  );

  const subfloor = React.useMemo(
    () => SUBFLOORS.find((s) => s.id === subfloorId)!,
    [subfloorId]
  );

  const materialCost = sqm * product.materialPerSqm;
  const installCost = sqm * product.installPerSqm;

  const selfLevelNeeded = subfloor.requiresSelfLevel;
  const selfLevelCostRaw = sqm * SELF_LEVEL_PER_SQM;
  const selfLevelCost = selfLevelNeeded
    ? Math.max(SELF_LEVEL_MIN_CHARGE, selfLevelCostRaw)
    : 0;

  const total = materialCost + installCost + selfLevelCost;
  const showNumbers = sqm > 0;

  return (
    <section className="bg-white py-30" id="floor-calculator">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        {/* Header styled like HowItWorks */}
        <div className="space-y-3">
          <p
            className={`inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white`}
          >
            Quote tool
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Flooring cost calculator
          </h2>
          <p className="max-w-2xl text-slate-600">
            Get a quick AUD estimate based on floor type, area (m²), and whether
            subfloor levelling is likely required.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 items-start">
          {/* Inputs card */}
          <Card className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] lg:col-span-2">
            <div
              className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r card-top-border`}
            />
            <CardContent className="space-y-6 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Enter your details
                  </h3>
                  <p className="text-sm text-slate-600">
                    Update any field to see the estimate change instantly.
                  </p>
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full process-card-icon`}
                >
                  <Calculator size={18} strokeWidth={2} />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label className="text-slate-700">Floor board type</Label>
                  <Select
                    value={floorId}
                    onValueChange={(v) => setFloorId(v as FloorProductId)}
                  >
                    <SelectTrigger
                      className={`bg-white focus:ring-2 focus-primary h-10 w-full`}
                    >
                      <SelectValue placeholder="Select a floor type" />
                    </SelectTrigger>
                    <SelectContent>
                      {FLOOR_PRODUCTS.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="text-xs text-slate-600">
                    <span className="font-medium text-slate-700">Rates:</span>{" "}
                    {formatAUD(product.materialPerSqm)}/m² materials +{" "}
                    {formatAUD(product.installPerSqm)}/m² install
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700">Area (m²)</Label>
                  <Input
                    inputMode="decimal"
                    placeholder="e.g. 24"
                    value={sqmRaw}
                    onChange={(e) => setSqmRaw(e.target.value)}
                    className={`bg-white focus-visible:ring-2 focus-visable-primary h-10 w-full`}
                  />
                  <p className="text-xs text-slate-600">
                    Tip: use the measured area (not the room size guess).
                  </p>
                </div>

                <div className="space-y-2">
                  <Label className="text-slate-700">Current floor type</Label>
                  <Select
                    value={subfloorId}
                    onValueChange={(v) => setSubfloorId(v as SubfloorId)}
                  >
                    <SelectTrigger
                      className={`bg-white focus:ring-2 focus-primary h-10 w-full`}
                    >
                      <SelectValue placeholder="Select current floor" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBFLOORS.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div className="text-xs text-slate-600">
                    {selfLevelNeeded ? (
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={`inline-block h-2 w-2 rounded-full bg-primary`}
                        />
                        Self-levelling likely required
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-slate-300" />
                        No self-levelling assumed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary card */}
          <Card
            id="floor-calculator-summary"
            className="group relative overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
          >
            <div className={`card-top-border`} />
            <CardContent className="space-y-5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Estimate summary
                  </h3>
                  <p className="text-sm text-slate-600">
                    Breakdown based on your selections.
                  </p>
                </div>

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full process-card-icon`}
                >
                  <Layers size={18} strokeWidth={2} />
                </div>
              </div>

              <div className="space-y-3">
                <Row
                  label="Materials"
                  value={showNumbers ? formatAUD(materialCost) : "—"}
                  icon={<Ruler size={16} />}
                />
                <Row
                  label="Installation"
                  value={showNumbers ? formatAUD(installCost) : "—"}
                  icon={<Layers size={16} />}
                />
                <Row
                  label={
                    <span className="inline-flex items-center gap-2">
                      Self-levelling
                      <span className="text-xs text-slate-500">
                        ({formatAUD(SELF_LEVEL_PER_SQM)}/m², min{" "}
                        {formatAUD(SELF_LEVEL_MIN_CHARGE)})
                      </span>
                    </span>
                  }
                  value={showNumbers ? formatAUD(selfLevelCost) : "—"}
                  icon={<Waves size={16} />}
                />

                <Separator className="bg-slate-200/80" />

                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-900">
                    Estimated total
                  </span>
                  <span className="text-base font-semibold text-slate-900">
                    {showNumbers ? formatAUD(total) : "—"}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-600">
                  Estimate only. Final pricing can vary depending on trims,
                  underlay, removal/disposal, furniture moving, waste factor,
                  and actual subfloor condition.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  icon,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200/80 bg-white px-3 py-2">
      <div className="flex min-w-0 items-center gap-2 text-sm text-slate-600">
        <span className={`text-primary-dark-500`}>{icon}</span>
        <span className="truncate">{label}</span>
      </div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}
