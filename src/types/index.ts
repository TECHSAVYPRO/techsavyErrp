// Admin User Types
export interface AdminUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  full_name: string | null;
  role: 'super_admin' | 'admin' | 'editor';
  is_active: boolean;
  last_login: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdminUserPublic {
  id: number;
  username: string;
  email: string;
  full_name: string | null;
  role: 'super_admin' | 'admin' | 'editor';
  is_active: boolean;
  last_login: string | null;
  created_at: string;
}

// Page Types
export interface Page {
  id: number;
  title: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface CreatePageInput {
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  is_published?: boolean;
  sort_order?: number;
}

export type UpdatePageInput = Partial<CreatePageInput>;

// Section Types
export type SectionType =
  | 'hero'
  | 'about'
  | 'services'
  | 'testimonials'
  | 'cta'
  | 'gallery'
  | 'text'
  | 'stats'
  | 'team'
  | 'faq'
  | 'contact'
  | 'custom';

export interface Section {
  id: number;
  page_id: number;
  section_key: string;
  title: string | null;
  subtitle: string | null;
  content: string | null;
  section_type: SectionType;
  is_visible: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface SectionWithPage extends Section {
  page_title: string;
  page_slug: string;
}

export interface CreateSectionInput {
  page_id: number;
  section_key: string;
  title?: string;
  subtitle?: string;
  content?: string;
  section_type?: SectionType;
  is_visible?: boolean;
  sort_order?: number;
}

export type UpdateSectionInput = Partial<Omit<CreateSectionInput, 'page_id' | 'section_key'>>;

// Media Types
export interface Media {
  id: number;
  filename: string;
  original_name: string;
  mime_type: string;
  file_size: number;
  width: number | null;
  height: number | null;
  alt_text: string | null;
  folder: string;
  uploaded_by: number | null;
  created_at: string;
}

export interface MediaWithUploader extends Media {
  uploader_name: string | null;
}

// Site Settings Types
export type SettingType = 'text' | 'image' | 'json' | 'boolean' | 'number';

export interface SiteSetting {
  id: number;
  setting_key: string;
  setting_value: string | null;
  setting_type: SettingType;
  description: string | null;
  updated_at: string;
}

// JWT Payload
export interface JWTPayload {
  id: number;
  username: string;
  email: string;
  role: 'super_admin' | 'admin' | 'editor';
  iat?: number;
  exp?: number;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}

// Dashboard Stats
export interface DashboardStats {
  totalPages: number;
  totalSections: number;
  totalMedia: number;
  recentPages: Page[];
  recentMedia: Media[];
}
