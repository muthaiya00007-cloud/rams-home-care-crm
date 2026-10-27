import { createClient } from "@supabase/supabase-js";

// Preview builds without the legacy CRM environment must still compile. The
// admin routes redirect to the standalone CRM, so this placeholder is never
// used for production data access. Configured production values take priority.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://preview-build.invalid";
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "preview-build-placeholder";

export const supabase = createClient(supabaseUrl, supabaseKey);
