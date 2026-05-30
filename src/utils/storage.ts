export const STORAGE_CONFIG = {
  WEBSITE_BUCKET: "albarq",
  BANNER_FOLDER: "banners",
  CLIENT_FOLDER: "clients",
  FLEET_FOLDER: "fleet",
  VIDEO_FOLDER: "videos",
  CERTIFICATE_FOLDER: "certificates",
  BLOG_FOLDER: "blogs",
} as const;

export const getSignedUrl = (filePath: string): string => {
  if (!filePath) return "";
  if (filePath?.includes("http")) return filePath;
  
  const bucket = STORAGE_CONFIG.WEBSITE_BUCKET;
  const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "")?.replace?.(
    ":8000",
    ""
  );
  const STORAGE_PATH = "/storage/v1/object/public/";
  const url = `${SUPABASE_URL}${STORAGE_PATH}${bucket}/${filePath}`;
  return url;
};
