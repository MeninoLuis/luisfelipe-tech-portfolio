export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Mesh gradient blobs — dark blue + indigo/violet, slow drift */}
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.45_0.18_275)] opacity-40 blur-3xl mix-blend-screen animate-blob-1" />
      <div className="absolute top-1/3 -right-32 h-[32rem] w-[32rem] rounded-full bg-[oklch(0.38_0.2_300)] opacity-35 blur-3xl mix-blend-screen animate-blob-2" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[oklch(0.42_0.16_250)] opacity-40 blur-3xl mix-blend-screen animate-blob-3" />
      <div className="absolute top-1/2 left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.5_0.14_220)] opacity-25 blur-3xl mix-blend-screen animate-blob-4" />

      {/* Subtle grain / vignette to keep it professional */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.18_0.02_250/_0.6)_100%)]" />
    </div>
  )
}
