import { createServerAction } from "zsa";

export const serverAction = createServerAction().experimental_shapeError(
  (error) => {
    const err = error.err;

    // Handle Error instances (most common case)
    if (err instanceof Error) {
      return { message: err.message || "Something went wrong" };
    }

    // Handle Prisma errors (they have a code and meta property)
    if (err && typeof err === "object" && "code" in err && "meta" in err) {
      const prismaError = err as {
        code: string;
        meta?: any;
        message?: string;
      };
      return {
        message:
          prismaError.message ||
          `Database error: ${prismaError.code}` ||
          "Something went wrong",
      };
    }

    // Handle objects with message property
    if (err && typeof err === "object" && "message" in err) {
      const message = (err as { message?: unknown }).message;
      if (message) {
        return { message: String(message) };
      }
    }

    // Handle string errors
    if (typeof err === "string") {
      return { message: err };
    }

    // Fallback
    try {
      return { message: String(err) || "Something went wrong" };
    } catch {
      return { message: "Something went wrong" };
    }
  }
);
