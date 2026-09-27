import { PastWorkItem } from '../types';

/**
 * Past Works Data & Configuration
 * 
 * NOTE FOR OPERATORS / DEVELOPERS:
 * To use direct image files instead of the technical drawing placeholders,
 * place your image files in /public/images/ or provide direct CDN URLs in the
 * `imageUrl` field below. The gallery will automatically render the image
 * when `imageUrl` is populated.
 * 
 * All 5 items preserve their verified Google Maps photographic source links.
 */
export const PAST_WORKS_CONFIG: PastWorkItem[] = [
  {
    id: 'work-01',
    number: '01',
    title: 'Industrial Work Record 01',
    category: 'Iron & Steel Assembly',
    googleMapsUrl: 'https://maps.app.goo.gl/UWAAc3pcaCAqKdGZ6',
    imageUrl: '', // Populate with direct image URL or local asset path e.g. '/images/work-01.jpg'
    aspectRatio: 'wide',
    summary: 'Heavy metal component and structural steel arrangement documented at the Autonagar facility.',
    verifiedSource: 'Google Maps Business Record',
  },
  {
    id: 'work-02',
    number: '02',
    title: 'Industrial Work Record 02',
    category: 'Basic Metals & Alloy',
    googleMapsUrl: 'https://maps.app.goo.gl/BQSxpvZt8HNCabuU8',
    imageUrl: '', // Populate with direct image URL or local asset path
    aspectRatio: 'landscape',
    summary: 'Precision-measured steel profiles prepared for industrial customer requirements.',
    verifiedSource: 'Google Maps Business Record',
  },
  {
    id: 'work-03',
    number: '03',
    title: 'Industrial Work Record 03',
    category: 'Structural Profile',
    googleMapsUrl: 'https://maps.app.goo.gl/kdWy9Xwu2AqknDGr7',
    imageUrl: '', // Populate with direct image URL or local asset path
    aspectRatio: 'square',
    summary: 'Engineering steel stock and fabrication material verified on-site in Guntur.',
    verifiedSource: 'Google Maps Business Record',
  },
  {
    id: 'work-04',
    number: '04',
    title: 'Industrial Work Record 04',
    category: 'Steel Plate & Section',
    googleMapsUrl: 'https://maps.app.goo.gl/ZFN9rbkV1rrZ6Xm6A',
    imageUrl: '', // Populate with direct image URL or local asset path
    aspectRatio: 'portrait',
    summary: 'Machined and prepped iron and steel materials aligned to engineering tolerances.',
    verifiedSource: 'Google Maps Business Record',
  },
  {
    id: 'work-05',
    number: '05',
    title: 'Industrial Work Record 05',
    category: 'Workshop Operations',
    googleMapsUrl: 'https://maps.app.goo.gl/pXu7U9rnNwJe55bW6',
    imageUrl: '', // Populate with direct image URL or local asset path
    aspectRatio: 'landscape',
    summary: 'Autonagar industrial workshop work area and basic metal handling environment.',
    verifiedSource: 'Google Maps Business Record',
  },
];
