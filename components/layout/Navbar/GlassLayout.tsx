import { cn } from "@/lib/utils";

type GlassLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassLayout({ children, className }: GlassLayoutProps) {
  return (
    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-xl
        bg-neutral-900/55
        border border-white/10
        backdrop-blur-[24px]
        backdrop-saturate-[180%]
        shadow-[0_10px_40px_rgba(0,0,0,.45),inset_0_1px_0_rgba(255,255,255,.15)]
        before:absolute
        before:inset-[1px]
        before:rounded-xl
        before:border
        before:border-white/5
        after:absolute
        after:top-0
        after:left-8
        after:right-8
        after:h-px
        after:bg-gradient-to-r
        after:from-transparent
        after:via-white/60
        after:to-transparent
        px-2 py-2
        `,
       
      )}
    >
      {/* Glass Reflection */}
      <div
        className="pointer-events-none 
      absolute inset-0 rounded-xl 
      bg-gradient-to-b from-white/10
      via-transparent to-transparent"
      />

      <div className={cn(`relative z-10 flex items-center justify-center `, className)}>
        {children}
      </div>
    </div>
  );
}
