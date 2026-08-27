export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full bg-noise opacity-40 mix-blend-screen"
    />
  );
}
