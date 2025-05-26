export default function YouTubeVideo({ src, className }: { src: string; className?: string }) {
  return (
    <iframe
      src={src + "?modestbranding=1&rel=0&iv_load_policy=3"}
      className={className}
      allowFullScreen
    />
  );
}
