import type { NextConfig } from "next";

// Extract Supabase hostname from environment variable
const getSupabaseHostname = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (supabaseUrl) {
    try {
      const url = new URL(supabaseUrl);
      return url.hostname;
    } catch {
      return null;
    }
  }
  return null;
};

const supabaseHostname = getSupabaseHostname();

const remotePatterns: Array<{
  protocol: "https";
  hostname: string;
  pathname: string;
}> = [
  {
    protocol: "https",
    hostname: "images.unsplash.com",
    pathname: "/**",
  },
];

// Add Supabase hostname if available
if (supabaseHostname) {
  remotePatterns.push({
    protocol: "https",
    hostname: supabaseHostname,
    pathname: "/**",
  });
}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns,
  },
};

export default nextConfig;
