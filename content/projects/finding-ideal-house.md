---
title: "Finding Ideal House"
summary: "Geospatial clustering and neighborhood amenity profiling to identify optimal residential property locations across New Delhi."
period: "Coursera Capstone Project"
role: "Capstone Project • Coursera"
metrics: "K-Means Clustering • Folium Maps • Streamlit"
stack:
  - "Python"
  - "Scikit-Learn"
  - "K-Means"
  - "Folium"
  - "Foursquare API"
  - "Geospatial Analysis"
  - "Streamlit"
github: "https://github.com/siddhantBhanot/Coursera_Capstone"
live: "https://courseracapstone-wh4aihzgahbjp2wpdysjae.streamlit.app/"
featured: true
order: 3
image: "/images/projects/searching-house.jpg"
---

### Problem Statement

Locating an optimal residential property in New Delhi involves complex multi-criteria trade-offs between property prices and daily quality-of-life amenities (transit, schools, healthcare, retail, dining). Traditional listing portals show raw pricing without structured neighborhood profiling. The objective was to analyze geospatial venue distributions across New Delhi localities, segment neighborhoods into behavioral archetypes via unsupervised clustering, and deliver an interactive cartographic recommendation tool.

### Why It Was Interesting

- **Geospatial & High-Dimensional Profiling**: Converting raw latitude/longitude coordinates and venue categories into mathematically cohesive neighborhood signatures.
- **Venue Density Disparities**: Handling extreme variance between dense commercial hubs and peripheral residential sectors.
- **Geography vs. Amenity Decoupling**: Ensuring clustering reflects lifestyle and functional character rather than mere geographic adjacency.

### Approach

- **Centroid Coordinate Extraction**: Compiled geographic boundary datasets and calculated centroid coordinates for New Delhi localities.
- **Venue Ingestion via Foursquare API**: Extracted nearby venues and categorized metadata within calibrated radial thresholds (500m–1,000m).
- **Amenity Vectorization**: One-hot encoded venue types and aggregated relative frequencies into a normalized locality feature matrix.
- **Optimal K-Means Segmentation**: Evaluated Elbow Method (WCSS) and Silhouette Coefficients to determine optimal $K$, partitioning localities into distinct urban archetypes (commercial, transit-centric, quiet residential, student hubs).
- **Interactive Cartography**: Visualized clusters on interactive Leaflet maps with custom color encodings and amenity breakdowns via Folium and Streamlit.

### Architecture

```
[Locality Centroid Data] ──► [Foursquare Places API]
                                   │
                                   ▼
[Streamlit Web App + Folium Maps] ◄── [K-Means Cluster Engine] ◄── [Venue Frequency Matrix]
```

Separates radial data harvesting and cluster modeling from interactive map tile rendering.

### Engineering Challenges

- **API Rate Quotas & Density Bias**: Built request throttling and caching to handle API limits, and normalized venue frequencies so dense commercial areas didn't skew clustering metrics.
- **Curse of Dimensionality**: Filtered low-frequency categories from one-hot matrices to prevent Euclidean distance degradation in K-Means.
- **Amenity vs. Proximity Separation**: Normalized coordinates so clusters reflect lifestyle attributes rather than physical proximity.

### Potential Improvements

- **PostGIS Spatial Database**: Migrate data to PostgreSQL/PostGIS for native R-Tree spatial indexing and fast geographic boundary queries.
- **Transit Accessibility Vectors**: Incorporate Delhi Metro station proximity, multimodal connectivity scores, and peak commute times into feature vectors.
- **Density-Based Clustering (HDBSCAN)**: Adopt HDBSCAN to eliminate fixed $K$ selection and isolate irregular transitional localities as noise.
