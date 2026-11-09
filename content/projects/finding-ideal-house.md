---
title: "Finding Ideal House"
summary: "Geospatial clustering and neighborhood amenity profiling to identify optimal residential property locations across New Delhi."
period: "Coursera Capstone Project"
role: "Data & Geospatial Engineer"
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
---

### Problem Statement

Locating an optimal residential property in a sprawling, densely populated metropolis like New Delhi presents complex, multi-criteria trade-offs. Prospective buyers and renters must simultaneously balance property pricing against quality-of-life criteria: access to public transit, grocery stores, healthcare facilities, dining establishments, recreational parks, and schools.

Standard real estate portals offer listing prices and raw address lists, but lack synthesized geospatial intelligence that categorizes neighborhoods based on their functional amenity profiles. The goal of this project was to analyze heterogeneous geospatial venue data and property pricing across diverse New Delhi localities, partition neighborhoods into cohesive behavioral clusters via unsupervised learning, and present the results in an interactive, map-based analytical application.

### Why It Was Interesting

The problem lies at the intersection of urban geospatial analysis, high-dimensional clustering, and interactive cartography. Transforming unstructured latitude/longitude coordinates and venue distributions into mathematically sound, human-interpretable neighborhood profiles requires solving several non-trivial data engineering challenges:
- High variance in venue density between commercial hubs and outlying suburbs.
- Combining geospatial coordinate space with categorical venue frequency vectors without letting geographical proximity artificially dictate cluster membership.
- Enabling non-technical users to intuitively explore multidimensional cluster features directly on an interactive geographic map.

### Approach

1. **Geospatial Coordinate Extraction**: Compiled a comprehensive geographic boundary dataset of New Delhi neighborhoods, determining centroid latitude and longitude coordinates for each locality.
2. **Venue Data Ingestion via Foursquare API**: Implemented automated API ingestion routines to query the Foursquare Places API for each neighborhood centroid within calibrated radius thresholds (e.g., 500m to 1,000m), retrieving venue names, coordinates, and standardized category tags.
3. **Feature Engineering & Frequency Profiling**: One-hot encoded venue categories across all neighborhoods and aggregated counts via group-by operations to calculate the relative frequency of each venue type per locality. Constructed a dense feature matrix representing each neighborhood's distinct amenity signature.
4. **Optimal Cluster Determination**: Applied the Elbow Method (sum of squared distances within clusters) and Silhouette Coefficient analysis to determine the optimal number of clusters ($K$) that minimized intra-cluster variance while maximizing inter-cluster separation.
5. **K-Means Clustering**: Segmented Delhi localities into distinct clusters representing recognizable urban archetypes (e.g., bustling commercial/retail corridors, quiet residential enclaves, student/budget hubs, transit-centric districts).
6. **Geospatial Visualization**: Rendered clustered neighborhoods onto an interactive Leaflet map using Folium, embedding customized visual color encodings, popups, and top-amenity summaries, and deployed the workflow as a Streamlit web application.

### Architecture

```
[New Delhi Neighborhood Data & Centroid Coordinates]
                         │
                         ▼
[Foursquare Places API Ingestion Module]
  • Radial search (500m - 1000m radius)
  • Venue categories & metadata extraction
                         │
                         ▼
[Feature Engineering & Normalization Pipeline]
  • One-hot encoding of venue categories
  • Frequency aggregation & vectorization
                         │
                         ▼
[Unsupervised Clustering Engine (Scikit-Learn)]
  • Elbow Method & Silhouette validation
  • K-Means++ centroid initialization
                         │
                         ▼
[Interactive Cartography & Web Application (Folium + Streamlit)]
  • Interactive map tiles with clustered markers
  • Locality amenity breakdown & pricing filters
```

The pipeline was architected to separate the data extraction/clustering computations from the presentation layer, allowing rapid re-rendering of map tiles upon user filtering.

### Engineering Challenges

- **API Rate Limiting & Uneven Venue Densities**: The Foursquare API imposes strict request quotas and returns varying venue counts depending on urban density (e.g., Connaught Place vs. Dwarka outskirts). Built request rate-limit throttling and structured caching to avoid rate exhaustion, and normalized category frequencies to prevent high-density neighborhoods from dominating distance metrics.
- **Dimensionality & Euclidean Distance Distortions**: One-hot encoding hundreds of distinct venue categories created a high-dimensional, sparse matrix where standard Euclidean distance metrics in K-Means can degrade. Handled this by filtering low-frequency venue categories and focusing on top-$N$ representative amenity classes per neighborhood.
- **Decoupling Geography from Character**: Ensuring that the clustering algorithm grouped localities based on their amenity characteristics and lifestyle profiles rather than purely clustering adjacent geographical coordinates together.

### Potential Improvements

- **Spatial Database Backing**: Migrating the static dataset into a PostgreSQL database with PostGIS extensions to perform spatial indexing (R-Tree / GiST indexing), coordinate transformations, and spatial queries natively in SQL.
- **Transit Accessibility Vectors**: Incorporating Delhi Metro telemetry (proximity to metro stations, average commute times, and multimodal connectivity indices) into the neighborhood feature space.
- **Density-Based Clustering (HDBSCAN)**: Replacing standard K-Means with HDBSCAN to eliminate the need for pre-specifying $K$ and to naturally identify outlier or transitional localities as noise rather than forcing them into unnatural clusters.

