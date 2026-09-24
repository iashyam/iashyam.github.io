// Card images go through Vite's asset pipeline (hashing, and whatever
// optimisation is configured), so content.yml names a file and these maps turn
// that name into the built URL. Kept per-collection so an error message can
// name the directory the file was expected in. The glob patterns must be
// literals — Vite resolves them at build time.
function urlsByFileName(
  modules: Record<string, { default: string }>,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(modules).map(([path, module]) => [
      path.slice(path.lastIndexOf("/") + 1),
      module.default,
    ]),
  );
}

export const productImages = urlsByFileName(
  import.meta.glob<{ default: string }>(
    "../assets/products/*.{jpg,jpeg,png,webp,avif,svg}",
    { eager: true },
  ),
);

export const projectImages = urlsByFileName(
  import.meta.glob<{ default: string }>(
    "../assets/projects/*.{jpg,jpeg,png,webp,avif,svg}",
    { eager: true },
  ),
);
