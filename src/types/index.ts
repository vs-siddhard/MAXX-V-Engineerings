export interface PastWorkItem {
  id: string;
  number: string;
  title: string;
  category: string;
  googleMapsUrl: string;
  imageUrl?: string; // Optional custom/local image URL override
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'wide';
  summary: string;
  verifiedSource: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  requirementType: string;
  material: string;
  quantity: string;
  description: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  fileName?: string;
  fileSize?: string;
}
