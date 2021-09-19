export default function AmpImage({ alt, width, height, src, layout }) {
  return (
    <amp-img
      alt={alt}
      width={width}
      height={height}
      src={src}
      layout={layout}
    ></amp-img>
  );
}
