import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getProduct } from "@/config/products";

export interface CartLine { slug: string; qty: number }
interface CartCtx {
  lines: CartLine[];
  ready: boolean;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
}
const Ctx = createContext<CartCtx | null>(null);
const KEY = "emberovia-demo-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setLines(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch { /* ignore */ }
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem(KEY, JSON.stringify(lines)); }, [lines, ready]);

  const valid = lines.filter((l) => getProduct(l.slug)?.orderable);
  const clamp = (n: number) => Math.max(1, Math.min(10, Math.floor(n) || 1));
  const value: CartCtx = {
    lines: valid,
    ready,
    add: (slug, qty = 1) => {
      if (!getProduct(slug)?.orderable) return;
      setLines((ls) => {
        const ex = ls.find((l) => l.slug === slug);
        return ex ? ls.map((l) => (l.slug === slug ? { ...l, qty: clamp(l.qty + qty) } : l)) : [...ls, { slug, qty: clamp(qty) }];
      });
    },
    setQty: (slug, qty) => setLines((ls) => ls.map((l) => (l.slug === slug ? { ...l, qty: clamp(qty) } : l))),
    remove: (slug) => setLines((ls) => ls.filter((l) => l.slug !== slug)),
    clear: () => setLines([]),
    count: valid.reduce((s, l) => s + l.qty, 0),
    subtotal: valid.reduce((s, l) => s + l.qty * (getProduct(l.slug)?.price ?? 0), 0),
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart outside CartProvider");
  return c;
}
