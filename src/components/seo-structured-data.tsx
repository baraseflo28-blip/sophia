export function SEOStructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ClothingStore",
        "@id": "https://sofiafashions.com/#business",
        name: "Sofia Fashions",
        alternateName: ["Sofia Fashion", "صوفيا فاشن"],
        url: "https://sofiafashions.com",
        logo: {
          "@type": "ImageObject",
          url: "https://sofiafashions.com/images/logo.png",
          width: 400,
          height: 400,
        },
        image: [
          "https://sofiafashions.com/images/shareimage.jpeg",
          "https://sofiafashions.com/images/logo.png",
          "https://sofiafashions.com/images/carousel-images-optimized/IMG_0788.jpg",
          "https://sofiafashions.com/images/carousel-images-optimized/IMG_0800.jpg",
          "https://sofiafashions.com/images/carousel-images-optimized/IMG_0808.jpg",
        ],
        description:
          "Premium women's clothing store specializing in Turkish fashion. From Istanbul to Aleppo, offering high-quality ladies' apparel and fashion accessories.",
        sameAs: [
          "https://www.instagram.com/sofiafashions",
          "https://www.facebook.com/sofiafashions",
          "https://t.me/sofiafashions",
          "https://www.tiktok.com/@sofiafashions",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Aleppo",
          addressRegion: "Aleppo Governorate",
          addressCountry: "SY",
          geo: {
            "@type": "GeoCoordinates",
            latitude: "36.2021",
            longitude: "37.1343",
          },
        },
        telephone: "+963-XXX-XXXXXX",
        priceRange: "$$",
        currenciesAccepted: "SYP, USD, EUR",
        paymentAccepted: "Cash, Credit Card, Bank Transfer",
        openingHours: "Mo-Sa 09:00-21:00",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Women's Fashion Collection",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Women's Dresses",
                category: "Clothing > Women's Clothing > Dresses",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Women's Tops",
                category: "Clothing > Women's Clothing > Tops",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Product",
                name: "Women's Outerwear",
                category: "Clothing > Women's Clothing > Outerwear",
              },
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://sofiafashions.com/#organization",
        name: "Sofia Fashions",
        url: "https://sofiafashions.com",
        logo: {
          "@type": "ImageObject",
          url: "https://sofiafashions.com/images/logo.png",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+963-XXX-XXXXXX",
          contactType: "customer service",
          availableLanguage: ["Arabic", "English", "Turkish"],
        },
        founder: {
          "@type": "Person",
          name: "Sofia",
        },
        foundingDate: "2020",
        foundingLocation: {
          "@type": "Place",
          name: "Istanbul, Turkey",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://sofiafashions.com/#website",
        url: "https://sofiafashions.com",
        name: "Sofia Fashions",
        description:
          "Premium women's fashion store - Turkish fashion from Istanbul, now in Aleppo",
        publisher: {
          "@id": "https://sofiafashions.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://sofiafashions.com/?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
        inLanguage: ["ar", "en"],
      },
      {
        "@type": "WebPage",
        "@id": "https://sofiafashions.com/#webpage",
        url: "https://sofiafashions.com",
        name: "Sofia Fashions | Premium Women's Fashion Store",
        isPartOf: {
          "@id": "https://sofiafashions.com/#website",
        },
        about: {
          "@id": "https://sofiafashions.com/#business",
        },
        description:
          "Premium women's clothing store specializing in Turkish fashion. From Istanbul to Aleppo, offering high-quality ladies' apparel.",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://sofiafashions.com",
            },
          ],
        },
        mainEntity: {
          "@id": "https://sofiafashions.com/#business",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessData),
      }}
    />
  );
}
