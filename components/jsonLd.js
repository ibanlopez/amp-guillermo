export default function JsonLd({ data, id }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      id={id}
    />
  );
}
