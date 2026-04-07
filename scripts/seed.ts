/**
 * Seed script for Dapin Edu database
 * Run with: npx ts-node --project tsconfig.json scripts/seed.ts
 * Or: npm run seed
 */

import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

// Load env vars
dotenv.config({ path: resolve(process.cwd(), '.env.local') });
dotenv.config({ path: resolve(process.cwd(), '.env') });

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'dapin_edu',
  multipleStatements: true,
};

async function seed() {
  const connection = await mysql.createConnection(DB_CONFIG);
  console.log('✅ Connected to database');

  try {
    // ─── Admin User ──────────────────────────────────────────────────────────
    const passwordHash = await bcrypt.hash('admin123', 12);
    await connection.execute(
      `INSERT INTO admin_users (username, email, password_hash, full_name, role)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE password_hash = ?`,
      ['admin', 'admin@dapinedu.com', passwordHash, 'Super Admin', 'super_admin', passwordHash]
    );
    console.log('✅ Admin user created (username: admin, password: admin123)');

    // ─── Pages ───────────────────────────────────────────────────────────────
    const pages = [
      { title: 'Home', slug: 'home', meta_title: 'Dapin Edu - Quality Education', meta_description: 'Welcome to Dapin Edu', sort_order: 1, is_published: true },
      { title: 'About', slug: 'about', meta_title: 'About Us | Dapin Edu', meta_description: 'Learn about Dapin Edu', sort_order: 2, is_published: true },
      { title: 'Services', slug: 'services', meta_title: 'Our Services | Dapin Edu', meta_description: 'Explore our educational services', sort_order: 3, is_published: true },
      { title: 'Programs', slug: 'programs', meta_title: 'Programs | Dapin Edu', meta_description: 'Our educational programs', sort_order: 4, is_published: true },
      { title: 'Team', slug: 'team', meta_title: 'Our Team | Dapin Edu', meta_description: 'Meet our team', sort_order: 5, is_published: true },
      { title: 'Blog', slug: 'blog', meta_title: 'Blog | Dapin Edu', meta_description: 'Latest news and articles', sort_order: 6, is_published: false },
      { title: 'Contact', slug: 'contact', meta_title: 'Contact Us | Dapin Edu', meta_description: 'Get in touch with us', sort_order: 7, is_published: true },
    ];

    const pageIds: Record<string, number> = {};
    for (const page of pages) {
      const [existing] = await connection.execute<mysql.RowDataPacket[]>(
        'SELECT id FROM pages WHERE slug = ?',
        [page.slug]
      );
      if ((existing as mysql.RowDataPacket[]).length > 0) {
        pageIds[page.slug] = (existing as mysql.RowDataPacket[])[0].id;
        console.log(`  ℹ Page "${page.title}" already exists, skipping`);
        continue;
      }
      const [result] = await connection.execute<mysql.ResultSetHeader>(
        `INSERT INTO pages (title, slug, meta_title, meta_description, sort_order, is_published)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [page.title, page.slug, page.meta_title, page.meta_description, page.sort_order, page.is_published]
      );
      pageIds[page.slug] = result.insertId;
      console.log(`  ✅ Page "${page.title}" created`);
    }
    console.log('✅ Pages seeded');

    // ─── Sections ─────────────────────────────────────────────────────────────
    const sections = [
      // Home page sections
      { page: 'home', key: 'hero', type: 'hero', title: 'Hero Section', subtitle: 'Quality Education for Everyone', sort_order: 1 },
      { page: 'home', key: 'features', type: 'stats', title: 'Features', sort_order: 2 },
      { page: 'home', key: 'about-preview', type: 'about', title: 'About Preview', sort_order: 3 },
      { page: 'home', key: 'services-preview', type: 'services', title: 'Services Preview', sort_order: 4 },
      { page: 'home', key: 'testimonials', type: 'testimonials', title: 'Testimonials', sort_order: 5 },
      { page: 'home', key: 'cta', type: 'cta', title: 'Call to Action', sort_order: 6 },
      // About page sections
      { page: 'about', key: 'hero', type: 'hero', title: 'About Hero', sort_order: 1 },
      { page: 'about', key: 'story', type: 'about', title: 'Our Story', sort_order: 2 },
      { page: 'about', key: 'mission', type: 'text', title: 'Mission & Vision', sort_order: 3 },
      { page: 'about', key: 'team', type: 'team', title: 'Our Team', sort_order: 4 },
      // Services page sections
      { page: 'services', key: 'hero', type: 'hero', title: 'Services Hero', sort_order: 1 },
      { page: 'services', key: 'list', type: 'services', title: 'Services List', sort_order: 2 },
      // Contact page sections
      { page: 'contact', key: 'hero', type: 'hero', title: 'Contact Hero', sort_order: 1 },
      { page: 'contact', key: 'form', type: 'contact', title: 'Contact Form', sort_order: 2 },
      { page: 'contact', key: 'info', type: 'text', title: 'Contact Info', sort_order: 3 },
    ];

    for (const s of sections) {
      const pageId = pageIds[s.page];
      if (!pageId) continue;
      try {
        await connection.execute(
          `INSERT IGNORE INTO sections (page_id, section_key, title, subtitle, section_type, sort_order)
           VALUES (?, ?, ?, ?, ?, ?)`,
          [pageId, s.key, s.title, (s as { subtitle?: string }).subtitle || null, s.type, s.sort_order]
        );
        console.log(`  ✅ Section "${s.page}/${s.key}" created`);
      } catch {
        console.log(`  ℹ Section "${s.page}/${s.key}" already exists`);
      }
    }
    console.log('✅ Sections seeded');

    // ─── Site Settings ────────────────────────────────────────────────────────
    const settings = [
      { key: 'site_name', value: 'Dapin Edu', type: 'text', desc: 'Website name' },
      { key: 'site_tagline', value: 'Quality Education for Everyone', type: 'text', desc: 'Website tagline' },
      { key: 'logo_url', value: '', type: 'image', desc: 'Logo image URL' },
      { key: 'favicon_url', value: '', type: 'image', desc: 'Favicon URL' },
      { key: 'contact_email', value: 'info@dapinedu.com', type: 'text', desc: 'Contact email' },
      { key: 'contact_phone', value: '+1 (555) 000-0000', type: 'text', desc: 'Contact phone' },
      { key: 'address', value: '123 Education Street, Learning City, LC 12345', type: 'text', desc: 'Physical address' },
      { key: 'facebook_url', value: '', type: 'text', desc: 'Facebook page URL' },
      { key: 'instagram_url', value: '', type: 'text', desc: 'Instagram profile URL' },
      { key: 'twitter_url', value: '', type: 'text', desc: 'Twitter profile URL' },
      { key: 'linkedin_url', value: '', type: 'text', desc: 'LinkedIn page URL' },
      { key: 'youtube_url', value: '', type: 'text', desc: 'YouTube channel URL' },
      { key: 'google_analytics_id', value: '', type: 'text', desc: 'Google Analytics 4 ID' },
    ];

    for (const s of settings) {
      await connection.execute(
        `INSERT INTO site_settings (setting_key, setting_value, setting_type, description)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)`,
        [s.key, s.value, s.type, s.desc]
      );
    }
    console.log('✅ Site settings seeded');

    console.log('\n🎉 Database seeded successfully!');
    console.log('\nDefault admin credentials:');
    console.log('  Username: admin');
    console.log('  Password: admin123');
    console.log('\n⚠️  Please change the password after first login!');
  } finally {
    await connection.end();
  }
}

seed().catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
