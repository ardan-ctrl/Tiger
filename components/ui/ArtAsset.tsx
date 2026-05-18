type ArtAssetProps = {
  src: string;
  className: string;
  label?: string;
};

export function ArtAsset({ src, className, label }: ArtAssetProps) {
  return (
    <span
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`art-asset ${className}`}
      role={label ? "img" : undefined}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}
