import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes par défaut de Leaflet avec Webpack/Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface LeafletMapProps {
  className?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialisation de la carte centrée sur Paris
    const map = L.map(mapRef.current, {
      center: [48.8566, 2.3522], // Coordonnées de Paris
      zoom: 11,
      minZoom: 9,
      maxZoom: 18,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      touchZoom: true,
      zoomControl: false // Désactive le contrôle de zoom par défaut
    });

    // Ajout de la couche de tuiles OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marqueur principal pour Bondy (siège de l'entreprise)
    L.marker([48.9023, 2.4823])
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; color: #059669; font-size: 16px;">🏢 Hygiène Protect 3D</h3>
          <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Siège social</strong></p>
          <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">Bondy (93140)</p>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #888;">Service disponible 24h/24 & 7j/7</p>
          <a href="tel:0767393885" style="display: inline-block; background: #059669; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px;">📞 07 67 39 38 85</a>
        </div>
      `)
      .openPopup();

    // Zone de couverture (cercle représentant l'Île-de-France)
    const coverageArea = L.circle([48.8566, 2.3522], {
      color: '#059669',
      fillColor: '#059669',
      fillOpacity: 0.1,
      radius: 30000, // 30km de rayon pour couvrir l'IDF
      weight: 2
    }).addTo(map);

    coverageArea.bindTooltip('Zone d\'intervention Île-de-France', {
      permanent: false,
      direction: 'center'
    });

    // Gestionnaire d'événements pour les clics sur la carte
    map.on('click', function(e) {
      L.popup()
        .setLatLng(e.latlng)
        .setContent(`
          <div style="text-align: center; font-family: Arial, sans-serif;">
            <h4 style="margin: 0 0 8px 0; color: #059669; font-size: 14px;">📍 Intervention possible</h4>
            <p style="margin: 0 0 8px 0; font-size: 12px;">Coordonnées : ${e.latlng.lat.toFixed(4)}, ${e.latlng.lng.toFixed(4)}</p>
            <a href="tel:0767393885" style="display: inline-block; background: #059669; color: white; padding: 4px 8px; text-decoration: none; border-radius: 3px; font-size: 11px;">Appeler pour devis</a>
          </div>
        `)
        .openOn(map);
    });

    // Ajout d'un contrôle de couches
    const baseMaps = {
      "Plan": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      })
    };

    const overlayMaps = {
      "Zone de couverture": coverageArea
    };

    L.control.layers(baseMaps, overlayMaps, { position: 'topright' }).addTo(map);

    // Ajout d'un contrôle d'échelle
    L.control.scale({ position: 'bottomleft' }).addTo(map);

    mapInstance.current = map;

    // Nettoyage lors du démontage du composant
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 ${className}`}>
      <div 
        ref={mapRef} 
        className="w-full h-full min-h-[400px]"
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default LeafletMap;